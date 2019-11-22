import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { css } from "@emotion/core"

import Menu from "./menu"

const Header = ({ siteTitle }) => {

  const headerStyle = css`
    background-color: rebeccapurple;
    margin-bottom: 1.45rem;
  `;

  const containerStyle = css`
    margin: 0 auto;
    max-width: 960px;
    padding: 1.45rem 1.0875rem;
  `;

  return (
    <header css={headerStyle}>
      <div css={containerStyle}>
        <h1 style={{ margin: 0 }}>
          <Link
            to="/"
            style={{
              color: `white`,
              textDecoration: `none`,
            }}
          >
            {siteTitle}
          </Link>
        </h1>
      </div>
      <Menu />
    </header>
  );
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
