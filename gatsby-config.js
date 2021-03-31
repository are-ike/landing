/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
	siteMetadata: {
		title: "Twinku",
		titleTemplate: "%s · Twinku",
		description:
      "We keep financial assets that matter to you & your loved ones, all in one place.",
		url: "https://www.doe.com", // No trailing slash allowed!
		image: "/images/snape.jpg", // Path to your image you placed in the 'static' folder
		twitterUsername: "@connectTwinku",
	},
	plugins: ["gatsby-plugin-react-helmet"],
}
