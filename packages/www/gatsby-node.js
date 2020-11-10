// const path = require("path");
// exports.onCreatePage = async ({ page, actions }) => {
//   const { createPage } = actions;
//   console.log(`Page - ${page.path}`);
//   if (page.path.match(/^\//)) {
//     page.matchPath = "/app/";
//     createPage(page);
//   }
// };
exports.createPages = ({ actions }) => {
  const { createRedirect } = actions;
  createRedirect({ fromPath: "/", toPath: "/app", isPermanent: true });
};
