/** @jsx jsx */
import { jsx } from "theme-ui"
import { Heading, Image, Flex, Box, Link, Text } from "@theme-ui/components"

const Hero = () => (
  <Flex mt={[100, 150]} mb={[100, 150]} sx={{ flexWrap: 'wrap', justifyContent: 'center' }}>
    <Box sx={{ flex: '0 0 200px', marginRight: [0, 5, 5], marginBottom: [3, 4, 0] }}>
      <Image
        src='/banner.png'
        alt='kanazawa.js'
      />
    </Box>
    <Box>
        <Heading as='h1' mb={3} sx={{ fontSize: [6, 7, 8] }}>kanazawa.js</Heading>
        <Heading as='h2' mb={2} sx={{ fontSize: [2, 3, 4] }}>石川県金沢市のJavaScriptコミュニティ</Heading>
        <Text variant='heading' sx={{ fontSize: [2, 3, 4], mt: 2 }}>最新情報は<Link href='https://twitter.com/knzw_js'>Twitter</Link>で発信中！</Text>
    </Box>
  </Flex>
)

export default Hero