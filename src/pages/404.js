// src/pages/404.js
import React from "react";
import { Link } from "gatsby";
import Layout from "../components/layout";

const NotFoundPage = () => (
  <Layout>
    <h1>404 Page Not Found</h1>
    <p>Sidan du leter efter finns inte.</p>
    <Link to="/">Gå tillbaka till startsidan</Link>
  </Layout>
);

export default NotFoundPage;
