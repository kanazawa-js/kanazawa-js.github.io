/** @jsx jsx */
import { jsx } from "theme-ui"
import Layout from "./layout"
import Hero from "../../../components/hero"
import Title from "./title"

const Homepage = () => {
  return (
    <Layout>
      <section sx={{ p: { fontSize: [1, 2, 3], mt: 2 } }}>
        <Hero />
      </section>
      <section sx={{ p: { fontSize: [1, 2, 3], mt: 2 } }}>
        <Title text='イベント情報'/>
        直近の開催イベントはありません。
      </section>
    </Layout>
  )
}

export default Homepage
