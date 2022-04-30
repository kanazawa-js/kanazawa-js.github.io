require(`dotenv`).config({
  path: `.env`,
});

const siteMetadata = {
  siteTitle: `Kanazawa.js`,
  siteTitleAlt: `Kanazawa.js - 石川県金沢市のJavaScriptコミュニティ「Kanazawa.js」です`,
  siteHeadline: `Kanazawa.js - 石川県金沢市のJavaScriptコミュニティ「Kanazawa.js」です`,
  siteUrl: `https://kanazawa-js.github.io`,
  siteDescription: `石川県金沢市のJavaScriptコミュニティ「Kanazawa.js」です`,
  siteLanguage: `ja`,
  siteImage: `/banner.png`,
  author: `@knzw_js`,
  socialLinks: [
    {
      name: `Twitter`,
      url: `https://twitter.com/knzw_js`,
    },
    {
      name: `Facebook`,
      url: `https://www.facebook.com/kanazawajs/`,
    },
    {
      name: `Github`,
      url: `https://github.com/kanazawa-js`,
    },
    {
      name: `Connpass`,
      url: `https://kanazawajs.connpass.com/`,
    },
  ],
  navigation: [
    {
      title: `コミュニティ概要`,
      slug: `/about`,
    },
    {
      title: `行動規範`,
      slug: `/code-of-conduct`,
    },
    {
      title: `イベントレポート`,
      slug: `/blog`,
    },
  ],
  connpassId: 9508,
};

module.exports = {
  siteMetadata,
  plugins: [
    {
      resolve: "gatsby-source-apiserver",
      options: {
        typePrefix: "connpass__",
        url: `https://connpass.com/api/v1/event/?series_id=${siteMetadata.connpassId}&order=2&count=3`,
        method: "get",
        headers: {
          "Content-Type": "application/json",
        },
        name: `events`,
      },
    },
    {
      resolve: `@lekoarts/gatsby-theme-minimal-blog`,
      options: {},
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GOOGLE_ANALYTICS_ID,
      },
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Kanazawa.js`,
        short_name: `Kanazawa.js`,
        description: `石川県金沢市のJavaScriptコミュニティ「Kanazawa.js」です`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#6B46C1`,
        display: `minimal-ui`,
        icon: `static/banner.png`,
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-netlify`,
    // `gatsby-plugin-webpack-bundle-analyser-v2`,
  ],
};
