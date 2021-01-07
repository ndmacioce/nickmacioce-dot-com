import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Heading } from "../components/atoms"
import Contact from "../components/contact"
import SkillGrid from "../components/usesGrid"
import skills from "../data/uses"

const Uses = () => {
  return (
    <Layout activePage="uses">
      <SEO title="Uses" />
      <Heading>Uses</Heading>
      <p className="-mt-3 mb-8 text-tertiary">
        Here are some of the tools and platforms I use.
      </p>
      <div className="mt-12 flex flex-col space-y-0">
        {skills.map(data => {
          return (
            <SkillGrid
              key={data.label}
              heading={data.label}
              description={data.description}
              categories={data.categories}
            />
          )
        })}
      </div>
      <Contact />
    </Layout>
  )
}

export default Uses
