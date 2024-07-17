// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

import path from "path";
import { themes } from "prism-react-renderer";

/** @type {import('@docusaurus/types').Config} */
export default {
  title: "GridBase Documentation",
  // tagline: '',
  favicon: "img/favicon.png",

  // Set the production url of your site here
  url: "https://grid151.github.io",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/gridbase-docs/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  // organizationName: 'facebook', // Usually your GitHub org/user name.
  // projectName: 'docusaurus', // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  plugins: [
    [
      require.resolve("docusaurus-lunr-search"),
      {
        indexBaseUrl: true,
        highlightResult: true,
        disableVersioning: true,
      },
    ],
    "@docusaurus/theme-live-codeblock",
  ],
  presets: [
    [
      "@docusaurus/preset-classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: "/",
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: "https://github.com/grid151/gridbase-docs/tree/main/",
        },
        theme: {
          // customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
    [
      "redocusaurus",
      {
        // Plugin Options for loading OpenAPI files
        config: path.join(__dirname, "redocly.yaml"),
        specs: [
          {
            id: "gridbase-api",
            spec: "api/swagger.json",
            route: "/api",
          },
        ],
      },
    ],
  ],
  markdown: {
    mermaid: true,
  },
  themes: ["@docusaurus/theme-mermaid"],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    {
      // Replace with your project's social card
      navbar: {
        title: "GridBase Docs",
        logo: {
          style: { height: "14px", width: "auto" },
          alt: "GridBase Logo",
          src: "img/logo.png",
        },
        items: [
          {
            to: "/",
            activeBasePath: "docs",
            label: "Docs",
            position: "left",
          },
          { to: "api", label: "API", position: "left" },
        ],
      },
      footer: {
        style: "dark",
        copyright: `Copyright ${new Date().getFullYear()} Grid151. Built with Docusaurus.`,
      },
      prism: {
        theme: themes.nightOwlLight,
        darkTheme: themes.nightOwl,
        additionalLanguages: ["json"],
      },
      liveCodeBlock: {
        /**
         * The position of the live playground, above or under the editor
         * Possible values: "top" | "bottom"
         */
        playgroundPosition: "bottom",
      },
    },
  stylesheets: ["https://fonts.googleapis.com/icon?family=Material+Icons"],
};
