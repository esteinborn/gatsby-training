import { Link } from "gatsby"
import React from "react"
import { css } from "@emotion/core"


const Menu = () => {

  const container = css`
    margin: 0 auto;
    max-width: 960px;
    padding: 1.45rem 1.0875rem;

    a {
      color: white;
      text-decoration: none;
      padding: 0 1em;
    }

    a:hover {
      text-decoration: underline;
    }
  `

  return (
    <nav css={container}>
      <Link to="/">Home</Link>
      {` `}
      <Link to="articles">Article List</Link>
      {` `}
      <Link to="page-2">Page 2</Link>
      {` `}
      <Link to="about">About Eric</Link>
    </nav>
  );
}

export default Menu
