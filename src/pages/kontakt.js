// src/pages/kontakt.js
import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import "bootstrap/dist/css/bootstrap.min.css"; //Bootstrap

// Komponent för Kontakt-sidan
const ContactPage = ({ data }) => {
  // Extraherar kontaktinformation från graphql-queryn
  const { email, github, linkedin } = data.contentfulContact;

  return (
    <Layout>
      {/* Container för Kontakt-sidan */}
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-8 offset-md-2 text-center">
            {/* Rubrik och introduktionstext */}
            <h1 className="mb-4">Kontaktinformation</h1>
            <p className="lead">Du kan nå mig genom följande kanaler:</p>
            {/* Visa email-adress */}
            <p className="mb-4">Email: {email}</p>
            {/* Visa GitHub-profil med länk */}
            <p className="mb-4">GitHub: <a href={github} target="_blank" rel="noopener noreferrer">{github}</a></p>
            {/* Visa LinkedIn-profil med länk */}
            <p className="mb-4">LinkedIn: <a href={linkedin} target="_blank" rel="noopener noreferrer">{linkedin}</a></p>
            {/* Avslutande text */}
            <p className="mt-4">Tveka inte att skicka mig ett meddelande!</p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

// GraphQL-query för att hämta kontaktinformation
export const query = graphql`
  query {
    contentfulContact {
      email
      github
      linkedin
    }
  }
`;

export default ContactPage;
