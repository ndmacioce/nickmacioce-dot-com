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
        <br className="mb-6 lg:hidden" /> I’m constantly breaking pipelines.
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
    <p>
            I made this website to learn what actually goes into web
            development. From planning, design, development, launch, and
            maintenance. For sure there are other things that I have yet to
            encounter, and I’m ready to learn them.
          </p>
          <p>
            This also serves a motivation for me to continue making projects
            because now I finally have a place to showcase them.
          </p>
          <h2>Why write a blog?</h2>
          <p>
            My{" "}
            <InlinePageLink to="/blog/welcome">first blog post</InlinePageLink>{" "}
            explained it. I'd be happy if you read it :)
          </p>
          <h2>What else?</h2>
          <p>
            When I’m not programming, I endlessly browse Reddit (
            <ExtLink link="https://www.reddit.com/r/gamedev/">
              /r/gamedev
            </ExtLink>
            ,{" "}
            <ExtLink link="https://www.reddit.com/r/webdev/">/r/webdev</ExtLink>
            ,{" "}
            <ExtLink link="https://www.reddit.com/r/animalsbeingderps/">
              /r/animalsbeingderps
            </ExtLink>
            ). I also love watching{" "}
            <ExtLink link="https://letterboxd.com/ndmacioce/">movies</ExtLink>{" "}
            and listening to{" "}
            <ExtLink link="https://open.spotify.com/user/ndmacioce">
              awesome music
            </ExtLink>
            . You can catch me playing games sometimes, I play as xKore, xKored,
            or xKoreddd.
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

export default IndexPage
