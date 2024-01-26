// src/pages/projects.js
import React from "react";
import { graphql, Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import Layout from "../components/layout";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS

// Komponent för sidan som visar projektöverblick
const ProjectsPage = ({ data }) => {
    // Hämtar alla projekt från graphql-queryn
  const projects = data.allContentfulProject.nodes;

  // Funktion för att förkorta projektbeskrivningen om den är för lång
  const truncateDescription = (description, maxLength) => {
    if (description.length > maxLength) {
      return `${description.slice(0, maxLength)}...`;
    }
    return description;
  };

  return (
    <Layout>
      {/* Rubrik för projektöverblick */}
      <h1 className="mb-4 mt-4 d-flex justify-content-center">Projektöverblick</h1>

       {/* Loopar genom varje projekt och renderar dess information */}
      {projects.map(project => {
        const { id, title, description, image, link } = project;
        const imageData = getImage(image);
        const truncatedDescription = truncateDescription(
          description.description,
          220
        );//truncateDescription är satt till 220 vilket gör att det bara visas de första 220 bokstäverna

        return (
          <div key={id} className="mb-4 p-3 border">
            <div className="row">
              {/* Kolumn för projektbild */}
              <div className="col-md-3">
                {image && (
                  <GatsbyImage
                    image={imageData}
                    alt={title}
                    className="img-thumbnail"
                  />
                )}
              </div>
              {/* Kolumn för projektinformation */}
              <div className="col-md-4">
                 {/* Länk till enskilt projekt */}
                <Link to={`/projects/${id}`}>
                  <h2>{title}</h2>
                </Link>
                {/* Förkortad projektbeskrivning */}
                <p>{truncatedDescription}</p>
                {/* Länk till projektet */}
                {link && (
                  <div>
                    <strong>Link:</strong>{" "}
                    <a href={link} target="_blank" rel="noopener noreferrer">
                      {link}
                    </a>
                  </div>
                )}
              </div>
            </div>
          </div>
        );
      })}
    </Layout>
  );
};
// GraphQL-query för att hämta data om alla projekt
export const query = graphql`
  query {
    allContentfulProject {
      nodes {
        id
        title
        description {
          description
        }
        image {
          gatsbyImageData(layout: FULL_WIDTH)
        }
        link
      }
    }
  }
`;

export default ProjectsPage;
