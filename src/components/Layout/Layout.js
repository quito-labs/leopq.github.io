import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import '../../theme/main.scss'

const Layout = ({ children, location }) => {
  let content

  if (location && location.pathname === '/') {
    content = <div>{children}</div>
  } else {
    content = (
      <div id="wrapper" className="page">
        <div>{children}</div>
      </div>
    )
  }

  return (
    <StaticQuery
      query={graphql`
        query SiteTitleQuery {
          site {
            siteMetadata {
              title
            }
          }
        }
      `}
      render={(data) => (
        <>
          <Helmet title={data.site.siteMetadata.title}>
            <html lang="pt-BR" />
            {/* Geneal */}
            <title>
              Leonardo Quevedo - Software, Inovação, JavaScript, Mobile, PWA, Open Source e
              Atualidade.
            </title>
            <meta
              name="description"
              content="Leonardo Quevedo. Software Engineer. JavaScript Coder. Coffee Drinker. Artificial Intelligence Enthusiast. PWAs specialist. Universal applications advocate."
            />
            <meta
              name="keywords"
              content="Software, JavaScript, Mobile, PWA, Open Source, Discriminação Algorítmica, Sociedade, Hacktivismo."
            />

            {/* Crawlers */}
            <meta name="revisit-after" content="1 day" />
            <meta name="language" content="Portuguese" />
            <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />

            {/* Google */}
            <link rel="author" href="Leonardo Quevedo" />
            <link rel="publisher" href="Leonardo Quevedo" />
            <meta itemProp="name" content="leonardoquevedo:page:home | Leonardo Quevedo" />
            <meta
              itemProp="description"
              content="Leonardo Quevedo. Software Engineer. JavaScript Coder. Coffee Drinker. Artificial Intelligence Enthusiast. PWAs specialist. Universal applications advocate."
            />
            <meta itemProp="image" content="https://i.imgur.com/8BYAMHC.png" />

            {/* Facebook */}
            <meta property="og:url" content="http://leonardoquevedo.com/" />
            <meta property="og:site_name" content="leonardoquevedo.com" />
            <meta property="og:image" content="https://i.imgur.com/8BYAMHC.png" />
            <meta property="og:type" content="website" />
            <meta property="og:title" content="leonardoquevedo:page:home | Leonardo Quevedo" />
            <meta
              property="og:description"
              content="Leonardo Quevedo. Software Engineer. JavaScript Coder. Coffee Drinker. Artificial Intelligence Enthusiast. PWAs specialist. Universal applications advocate."
            />
            <meta property="og:locale" content="pt_BR" />

            {/* Twitter */}
            <meta name="twitter:card" content="summary" />
            <meta name="twitter:site" content="@leopq" />
            <meta name="twitter:title" content="leonardoquevedo:page:home | Leonardo Quevedo" />
            <meta
              name="twitter:description"
              content="Leonardo Quevedo. Software Engineer. JavaScript Coder. Coffee Drinker. Artificial Intelligence Enthusiast. PWAs specialist. Universal applications advocate."
            />
            <meta name="twitter:creator" content="@leopq" />
            <meta name="twitter:image:src" content="https://i.imgur.com/8BYAMHC.png" />
          </Helmet>
          {content}
        </>
      )}
    />
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
