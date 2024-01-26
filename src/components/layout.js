// src/components/layout.js
import React from "react";
import { Link } from "gatsby";
import "bootstrap/dist/css/bootstrap.min.css"; //Bootstrap
import { Helmet } from "react-helmet";// seo


// Återanvändbar layoutkomponent för alla sidor
const Layout = ({ children }) => {
  return (
    <div>
       <Helmet>{/* seo */}
        <title>Oscars Portfolio</title>{/* Lägger till en titel uppe på "tabben" */}
        <meta name="description" content="Oscars Portfolio hemsida" />
      </Helmet>

      {/* header med navigationsmeny */}
      <header>
        <nav className="bg-dark fixed-top">
          <div className="container d-flex justify-content-center">
            <div className="row">
              <div className="col-md-12">
                {/* Nav med länkar till olika sidor */}
                <ul className="nav">
                  <li className="nav-item">
                    <Link className="nav-link text-white" to="/">
                      Home
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link text-white" to="/projects">
                      Projekt
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link text-white" to="/om">
                      Om mig
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link text-white" to="/kontakt">
                      Kontakt
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </header>
      {/* Huvudinnehåll med sidans innehåll */}
      <main style={{ paddingTop: "20px" }}>{children}</main>{/* renderar sidan */}
    </div>
  );
};

export default Layout;
