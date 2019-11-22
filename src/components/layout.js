/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { css } from "@emotion/core"

import Header from "./header"
import Footer from "./footer"
import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  const container = css`
    margin: 0 auto;
    max-width: 960px;
    padding: 0px 1.0875rem 1.45rem;
    padding-top: 0;
    border-right: 5px solid #333;
    border-left: 5px solid #333;
  `;

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <div css={container}>
        <main>{children}</main>
        <Footer copyDate={new Date().getFullYear()} />
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
