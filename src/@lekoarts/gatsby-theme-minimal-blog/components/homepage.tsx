/** @jsx jsx */
import { jsx } from "theme-ui"
import { Box, Text, Link } from "@theme-ui/components"
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
        <div sx={{ fontSize: [1, 2] }}>
          <Link sx={{ fontSize: [2, 3]}} href={'https://kanazawajs.connpass.com/event/175040/'}>Kanazawa.js Remote Meetup #03</Link>
          <Text>日時: 2020/05/23（土） - 13:00 〜 17:00</Text>
          <Text>会場: オンライン</Text>
          <Text>住所: オンライン</Text>
        </div>
      </section>
    </Layout>
  )
}

export default Homepage
