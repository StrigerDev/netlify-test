/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-node/
 */

/**
 * @type {import('gatsby').GatsbyNode['createPages']}
 */


const path = require("path");


exports.createPages = async ({ graphql, actions }) => {
  const { createPage, createRedirect } = actions;

  // Sökväg till projektmallen
  const projectTemplate = path.resolve(`src/templates/project.js`);

  // Skapa sidor för varje projekt
  const result = await graphql(`
    query {
      allContentfulProject {
        nodes {
          id
        }
      }
    }
  `);

  // Loopa genom varje projekt och skapa sida för varje
  result.data.allContentfulProject.nodes.forEach(project => {
    createPage({
      path: `/projects/${project.id}`,
      component: projectTemplate,
      context: {
        id: project.id,
      },
    });
  });

  // Anpassad 404-sida
  createPage({
    path: "/404",
    component: path.resolve(`src/pages/404.js`),
  });
    // omdirigerar till 404 sida för alla okännbara urls
    createRedirect({
      fromPath: "/*",
      toPath: "/404",
      isPermanent: true,
      redirectInBrowser: true,
    });
};
