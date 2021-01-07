import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
//import { ExtLink, InlinePageLink } from "../components/atoms"
import Work from '../components/Work'
import Contact from "../components/contact"

const WorkPage = _ => {
  return (
    <Layout activePage="work">
      <SEO title="Work" />
      <div className="container">
      <article className="prose">
        <section>
            <Work />
        </section>
        </article>
      </div>
      <Contact />
    </Layout>
  )
}

export default WorkPage
