// src/pages/Om.js
import React from "react";
import { graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import Layout from "../components/layout";
import "bootstrap/dist/css/bootstrap.min.css"; //Bootstrap

// Komponent för Om-sidan
const OmPage = ({ data }) => {
  // Extraherar information från graphql-queryn
  const { title, description, image } = data.contentfulOmPage;
  const imageData = getImage(image);

  return (
    <Layout>
      {/* Container för Om-sidan */}
      <div className="container mt-5">
        <div className="row ">
          {/* Kolumn för bild */}
          <div className="col-md-6">
            {/* Visar bild om tillgänglig */}
          {image && <GatsbyImage image={imageData} alt="Om Page Image" className="img-fluid" />}
          </div>
           {/* Kolumn för text */}
          <div className="col-md-6">
            {/* Rubrik och beskrivningstext */}
          <h1>{title}</h1>
            <p>{description.description}</p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

// GraphQL-query för att hämta data om Om-sidan
export const query = graphql`
  query {
    contentfulOmPage {
      title
      description {
        description
      }
      image {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
  }
`;

export default OmPage;
