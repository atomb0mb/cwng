/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: `cwng`,
    description: `Pandas are simple. Pandas eat fast, they eat a lot, and they spend about 12 hours a day doing it.`,
    author: `Chee`,
    siteUrl: `https://www.cwng.us`, // Change in case no longer https in the future
  },

  plugins: [
    // robots.txt
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://www.cwng.us',
        sitemap: 'https://www.cwng.us/sitemap.xml',
        policy: [{ userAgent: '*', allow: '/' }]
      }
    },

    // Google Analytics plugins
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-175902871-1",
      },
    },

    // The web app manifest is a simple JSON file 
    // that tells the browser about your web application 
    // and how it should behave when ‘installed’ on the user’s mobile device or desktop.
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `cwng`,
        short_name: `cwng`,
        description: `The application does cool things. Dedicated to web technology.`,
        lang: `en`,
        start_url: `/`,
        background_color: `#6b37bf`,
        theme_color: `#6b37bf`,
        // Enables "Add to Homescreen" prompt and disables browser UI (including back button)
        // see https://developers.google.com/web/fundamentals/web-app-manifest/#display
        display: `standalone`,
        icon: `src/images/android-chrome-512x512.png`, // This path is relative to the root of the site.
        icon_options: {
          // For all the options available, please see:
          // https://developer.mozilla.org/en-US/docs/Web/Manifest
          // https://w3c.github.io/manifest/#purpose-member
          purpose: "any maskable",
        },
      },
    },
    // The filesystem source plugin knows how to fetch data from the file system. 
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },

    // css customization
    {
      resolve: "gatsby-plugin-typography",
      options: {
        pathToConfigModule: "src/utils/typography",
      },
    },
    //Gatsby plugin for preparing zopfli-compressed gzip versions of assets.
    {
      resolve: 'gatsby-plugin-zopfli'
    },

    `gatsby-transformer-remark`,
    `gatsby-plugin-emotion`,
    // Gatsby’s offline plugin makes a Gatsby site work offline 
    // and more resistant to bad network conditions by creating a service worker for your site.
    `gatsby-plugin-offline`,
    // React Helmet is a package that provides a React component interface for you to manage your document head.
    `gatsby-plugin-react-helmet`,
    // An XML sitemap lists a website’s important pages, making sure search engines (such as Google) can find and crawl them all. 
    // In effect, a sitemap helps a search engine understand your website structure.
    `gatsby-plugin-sitemap`,
  ],
}
