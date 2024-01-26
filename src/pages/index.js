// src/pages/index.js
import React from "react";
import { graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { Helmet } from "react-helmet";// seo
import Layout from "../components/layout";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS

// Hämtar information från graphql
const IndexPage = ({ data }) => {
  // Extraherar nödvändig data från graphql-queryn
  const { titel, description, image } = data.contentfulHomePage;
  const imageData = getImage(image);

  return (
    <Layout>
      
      <div className="container-fluid p-0">
        <div className="position-relative">
          {image && (
            <GatsbyImage //seo
              image={imageData}
              alt="Home Page Image"
              className="img-fluid img-height-limit"
            />
          )}
          <div className="position-absolute top-50 start-50 translate-middle text-center text-light">
            <h1 className="display-3">{titel}</h1>
            <p className="lead">{description.description}</p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

// GraphQL-query för att hämta data från Contentful
export const query = graphql`
  query {
    contentfulHomePage {
      titel
      description {
        description
      }
      image {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
  }
`;

export default IndexPage;
