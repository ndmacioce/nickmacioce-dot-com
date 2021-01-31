import React from "react"
// import { Link } from "gatsby"

import { Blob } from "../components/atoms"
import Layout from "../components/layout"
import SEO from "../components/seo"
//import PostList from "../components/postList"
//import ProjectList from "../components/projectList"
import Contact from "../components/contact"
import { ExtLink, InlinePageLink } from "../components/atoms"
import SkillGrid from "../components/usesGrid"
import skills from "../data/uses"
import Image from "../components/image"

const IndexPage = () => (
  <Layout activePage="/">
    <SEO />
    <div className="mt-12 flex flex-col-reverse lg:flex-row items-center lg:justify-between lg:space-x-6">
      <h1 className="mt-12 lg:mt-0 max-w-3xl text-3xl sm:text-4xl text-primary font-semibold sm:text-left md:text-center lg:text-left">
        Hi, I’m Nick.
        <br className="mb-6 lg:hidden" /> I’m an experienced DevOps Engineer based in Denver, CO. 
      </h1>
      <div className="relative">
        <Blob />
        <div className="absolute w-full h-full top-0 flex items-center justify-center">
          <div className="h-32 w-32 md:h-40 md:w-40 lg:h-48 lg:w-48 rounded-full overflow-hidden">
            <Image />
          </div>
        </div>
      </div>
    </div>
    <article className="prose">
    <br></br>
    <p>
      I'm interested in all things cloud, devops, and automation. I'm using this website
      as a showcase of the skills and projects I've developed over the years. 
    </p>
    <p>
      This also serves a motivation for me to continue making projects
      because now I finally have a place to showcase them.
    </p>
    </article>
    <Contact />
  </Layout>
)

export default IndexPage
