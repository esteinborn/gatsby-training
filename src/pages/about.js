import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Section from "../components/section"

const AboutPage = () => (
  <Layout>
    <SEO title="About Eric" />
    <h1>Eric is a cool dude</h1>
    <p>He thinks that GatsbyJS is going to be useful!</p>
    <Section title="My Section One!" text="There is a little text here."></Section>
    <Section title="My Section Two!" text="The new Tesla truck is an eye sore."></Section>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default AboutPage
