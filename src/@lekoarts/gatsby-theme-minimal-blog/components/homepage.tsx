/** @jsx jsx */
import { jsx } from "theme-ui"
import { Link } from "gatsby"
import Layout from "./layout"
import Hero from "../../../components/hero"
import Title from "./title"
import Listing from "./listing"
import List from "./list"
import useSiteMetadata from "../hooks/use-site-metadata"
import replaceSlashes from "../utils/replaceSlashes"

type PostsProps = {
  posts: {
    slug: string
    title: string
    date: string
    tags?: {
      name: string
      slug: string
    }[]
  }[]
}

const Homepage = ({ posts }: PostsProps) => {
  const { basePath, blogPath } = useSiteMetadata()

  return (
    <Layout>
      <section sx={{ p: { fontSize: [1, 2, 3], mt: 2 } }}>
        <Hero />
      </section>
    </Layout>
  )
}

export default Homepage
