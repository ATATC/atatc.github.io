module.exports = {
  content: ["_site/**/*.html", "_site/**/*.js"],
  css: ["_site/assets/css/*.css"],
  output: "_site/assets/css/",
  safelist: ["pagination", "pagination-lg", "justify-content-center", "page-item", "page-link", "active", "disabled"],
  skippedContentGlobs: ["_site/assets/**/*.html"],
};
