/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
	siteMetadata: {
		title: "Twinku - We Keep Your Financial Assets All In One Place",
		titleTemplate: "%s",
		description: "We keep financial assets that matter to you & your loved ones, all in one place.",
		url: "https://www.twinku.co", // No trailing slash allowed!
		image: "src/assets/landing.jpg", // Path to your image you placed in the 'static' folder
		twitterUsername: "@connectTwinku",
		keywords: "twinku, keep financial assests, financial assets, loved ones, connect account, link account, add beneficiaries, saving, investment, linking my Nigerian bank account, financial assests in Nigeria"
	},
	plugins: ["gatsby-plugin-react-helmet"],

}
