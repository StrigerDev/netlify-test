// src/templates/project.js
import React from "react";
import { graphql, Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import Layout from "../components/layout";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS

// Komponent för enskilt projekt
const ProjectTemplate = ({ data }) => {
  // Hämtar projektinformation från graphql-queryn
  const { title, description, image, link } = data.contentfulProject;
  const imageData = getImage(image);

  return (
    <Layout>
      {/* Container för projektets information */}
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-8 offset-md-2 bg-white p-4">
            {/* Länk tillbaka till projektöversikten */}
            <Link to="/projects" className="mb-3 d-inline-block text-decoration-none">
              <span className="arrow-icon">&larr;Tillbaka</span>
            </Link>

            {/* Visar projektbild om tillgänglig */}
            {image && <GatsbyImage image={imageData} alt={title} className="mb-4" />}

            {/* Projektets rubrik och beskrivning */}
            <h1>{title}</h1>
            <p>{description.description || ""}</p>

            {/* Länk till projekt*/}
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
    </Layout>
  );
};

// GraphQL-query för att hämta data om ett specifikt projekt baserat på ID
export const query = graphql`
  query($id: String!) {
    contentfulProject(id: { eq: $id }) {
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
`;

export default ProjectTemplate;
