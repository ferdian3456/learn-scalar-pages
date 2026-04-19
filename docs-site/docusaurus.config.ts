import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

const config: Config = {
  title: "Virdan API",
  tagline: "API Documentation",
  favicon: "img/favicon.ico",
  future: { v4: true },
  url: "https://ferdian3456.github.io",
  baseUrl: "/learn-scalar-pages/",
  organizationName: "ferdian3456",
  projectName: "learn-scalar-pages",
  trailingSlash: false,
  onBrokenLinks: "warn",
  onBrokenMarkdownLinks: "warn",
  markdown: { mermaid: true },
  i18n: { defaultLocale: "en", locales: ["en"] },
  themes: [
    "@docusaurus/theme-mermaid",
    "docusaurus-theme-openapi-docs",
  ],
  plugins: [
    [
      "docusaurus-plugin-openapi-docs",
      {
        id: "api",
        docsPluginId: "classic",
        config: {
          virdan: {
            specPath: "../swagger.yaml",
            outputDir: "docs/api",
            sidebarOptions: { groupPathsBy: "tag" },
          },
        },
      },
    ],
  ],
  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
          docItemComponent: "@theme/ApiItem",
        },
        blog: false,
        theme: { customCss: "./src/css/custom.css" },
      } satisfies Preset.Options,
    ],
  ],
  themeConfig: {
    colorMode: { respectPrefersColorScheme: true },
    navbar: {
      title: "Virdan API",
      logo: { alt: "Virdan API Logo", src: "img/logo.svg" },
      items: [
        {
          type: "docSidebar",
          sidebarId: "tutorialSidebar",
          position: "left",
          label: "API Reference",
        },
        {
          href: "https://github.com/ferdian3456/learn-scalar-pages",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      copyright: `Copyright © ${new Date().getFullYear()} Virdan API. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
