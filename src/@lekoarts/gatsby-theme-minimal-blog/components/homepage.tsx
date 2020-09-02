/** @jsx jsx */
import { jsx } from "theme-ui"
import Layout from "./layout"
import Hero from "../../../components/hero"
import Events from "../../../components/events"
import Title from "./title"
import useConnpassEvents from "../hooks/use-connpass-events"

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
  const events = useConnpassEvents()
  return (
    <Layout>
      <section sx={{ p: { fontSize: [1, 2, 3], mt: 2 } }}>
        <Hero />
      </section>
      <section sx={{ p: { fontSize: [1, 2, 3], mt: 2 } }}>
        <Title text='Event Information'/>
        <Events events={events}/>
      </section>
    </Layout>
  )
}

export default Homepage
