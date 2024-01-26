// gatsby-config.js
require("dotenv").config(); // Laddar in dotenv för att hantera miljövariabler

module.exports = {
  siteMetadata: {
    title: `Oscars Portfolio`, // Titel för webbplatsen
    description: `Oscars Portfolio`, // Beskrivning av webbplatsen
    author: `Oscar`, // Författare till webbplatsen
    siteUrl: `https://gatsbystarterdefaultsource.gatsbyjs.io/`, // URL för webbplatsen
  },
  plugins: [
    `gatsby-plugin-image`, // Gatsby-plugin för att hantera bilder
    {
      resolve: `gatsby-source-filesystem`, // Gatsby-plugin för att läsa in filsystemet
      options: {
        name: `images`, // Namn för filsystemet
        path: `${__dirname}/src/images`, // Sökväg till bilderna
      },
    },
    `gatsby-transformer-sharp`, // Gatsby-plugin för att transformera och optimera bilder
    `gatsby-plugin-sharp`, // Gatsby-plugin för skarpa bilder
    {
      resolve: `gatsby-plugin-manifest`, // Gatsby-plugin för att generera webbmanifest
      options: {//base gatsby starter inställningar, majoriteten gör inget just nu
        name: `gatsby-starter-default`, // Namn för webbplatsen
        short_name: `starter`, // Kort namn för webbplatsen
        start_url: `/`, // Start-URL för webbplatsen
        background_color: `#663399`, // Bakgrundsfärg för webbplatsen
        display: `minimal-ui`, // Visningsläge för webbplatsen
        icon: `src/images/gatsby-icon.png`, // Ikon för webbplatsen
      },
    },
    {
      resolve: `gatsby-source-contentful`, // Gatsby-plugin för att hämta innehåll från Contentful
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID, // Space ID för Contentful
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN, // Access token för att autentisera mot Contentful
      },
    },
    {
      resolve: `gatsby-plugin-sitemap`, // Gatsby-plugin för att generera en sitemap för SEO
      options: {
        output: `/sitemap.xml`, // Sökväg för sitemap-filen
        exclude: ["/404/"], // Undanta vissa sidor från sitemap
        createLinkInHead: true, // lägger till sitemap-länk i <head> av varje sida
      },
    },
    `gatsby-plugin-react-helmet`, // Gatsby-plugin för att hantera React Helmet och därmed SEO-metadata
    {
      resolve: `gatsby-plugin-layout`, // Gatsby-plugin för att hantera layout-komponent
      options: {
        component: require.resolve(`./src/components/layout.js`), // Sökväg till layout-komponenten
      },
    },
  ],
};
