import React from "react";
import { css } from "@emotion/core"

const Section = ({title, text}) => {

  const container = css`
    margin: 3rem auto;
    max-width: 600px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  `
  
  return (
    <div css={container}>
      <h2>{title}</h2>
      <p>{text}</p>
    </div>
  );
};

export default Section;
