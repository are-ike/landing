import React from "react"
import PropTypes from "prop-types"
import favicon from "../assets/favicon.ico"
import { Helmet } from "react-helmet"
import { useLocation } from "@reach/router"
import { useStaticQuery, graphql } from "gatsby"

type PropTypes = {
	title?: string
	description?: string
	image?: string
	website?: boolean
}
const SEO : React.FC<PropTypes> = (prop) => {
	const { title, description, image, website } = prop
	const { pathname } = useLocation()
	const { site } = useStaticQuery(query)

	const {
		defaultTitle,
		titleTemplate,
		defaultDescription,
		siteUrl,
		defaultImage,
		twitterUsername,
		keywords
	} = site.siteMetadata

	const seo = {
		title: title || defaultTitle,
		description: description || defaultDescription,
		image: `${siteUrl}${image || defaultImage}`,
		url: `${siteUrl}${pathname}`,
		keywords: keywords
	}
  
	return (
		<Helmet title={seo.title} titleTemplate={titleTemplate}>
			<meta name="description" content={seo.description} />
			<meta name="image" content={seo.image} />
			{seo.url && <meta property="og:url" content={seo.url} />}
			{seo.url && <link rel="canonical" href={seo.url}/>}
			{(website ? true : null) && <meta property="og:type" content="website" />}
			{seo.keywords && <meta name="keywords" content={seo.keywords} />}
			{seo.title && <meta property="og:title" content={seo.title} />}
			{seo.description && (
				<meta property="og:description" content={seo.description} />
			)}
			{seo.image && <meta property="og:image" content={seo.image} />}
			<meta name="twitter:card" content="summary_large_image" />
			{twitterUsername && (
				<meta name="twitter:creator" content={twitterUsername} />
			)}
			{seo.title && <meta name="twitter:title" content={seo.title} />}
			{seo.description && (
				<meta name="twitter:description" content={seo.description} />
			)}
			{seo.image && <meta name="twitter:image" content={seo.image} />}
			<link rel="icon" href={favicon} />
		</Helmet>
	)
}

export default SEO

const query = graphql`
  query SEO {
    site {
      siteMetadata {
        defaultTitle: title
        titleTemplate
        defaultDescription: description
        siteUrl: url
        defaultImage: image
        twitterUsername
        keywords
      }
    }
  }
`