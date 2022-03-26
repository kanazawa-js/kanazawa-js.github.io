/** @jsx jsx */
import { jsx } from "theme-ui";
import { Heading, Image, Flex, Box, Link, Text } from "@theme-ui/components";

const Hero = () => (
  <Flex
    mt={[100, 150]}
    mb={[100, 150]}
    sx={{ flexWrap: "wrap", justifyContent: "center" }}
  >
    <Box
      sx={{
        flex: "0 0 200px",
        marginRight: [0, 4, 4],
        marginBottom: [3, 4, 0],
      }}
    >
      <Image src="/banner.png" alt="Kanazawa.js" />
    </Box>
    <Box>
      <Heading as="h1" mb={3} sx={{ fontSize: [6, 7, 8], textAlign: "center" }}>
        Kanazawa.js
      </Heading>
      <Heading as="h2" mb={2} sx={{ fontSize: [2, 3, 4], textAlign: "center" }}>
        石川県金沢市のJavaScriptコミュニティです🧑‍💻
      </Heading>
      <Text
        variant="heading"
        sx={{ fontSize: [2, 3, 4], mt: 2, textAlign: "center" }}
      >
        Web FrontendからNode.jsまで、
      </Text>
      <Text
        variant="heading"
        sx={{ fontSize: [2, 3, 4], mt: 2, textAlign: "center" }}
      >
        ゆるっと交流したい方は気軽に
        <Link href="https://join.slack.com/t/kanazawajshq/shared_invite/zt-zabel33o-MeumyD4pkypwTej9Y9YECg">
          Slack
        </Link>
        まで 🤝
      </Text>
    </Box>
  </Flex>
);

export default Hero;
