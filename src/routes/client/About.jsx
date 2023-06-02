import { GitHub, Instagram, Telegram, Twitter } from "@mui/icons-material";
import { Box, Container, IconButton, Typography } from "@mui/material";
import { Helmet } from "react-helmet-async";

const About = () => {
  return (
    <Container>
      <Helmet>
        <title>About</title>
      </Helmet>
      <Typography p={2} variant="h4">
        About Us
      </Typography>
      <Typography p={2} variant="h6">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea, aspernatur
        molestiae sint voluptas cumque illo ipsum neque mollitia sunt
        voluptatibus error officiis ratione deserunt ducimus voluptatum sapiente
        ullam aperiam consequatur. Beatae necessitatibus ipsum facilis!
        Blanditiis sint voluptate dolorem nemo praesentium, nisi incidunt alias
        similique doloremque quod numquam molestiae repellendus? Delectus
        consectetur, repellendus asperiores sequi reprehenderit voluptates
        perspiciatis ad eum consequatur. Quibusdam nihil unde rerum neque
        aperiam quas quam libero voluptatem incidunt. Eaque commodi autem magni
        est ex at vitae saepe amet, velit nulla, mollitia maxime doloremque
        quam, maiores similique ipsam! Sit, mollitia omnis! Ad reiciendis
        deleniti repellat. Minus enim a reprehenderit placeat molestiae libero
        sequi accusamus praesentium tempora eius adipisci, fugit quis odio. A,
        necessitatibus sed explicabo error blanditiis pariatur. Fugit incidunt
        quam est ducimus voluptatem facilis consequatur veritatis, eius
        reprehenderit doloremque blanditiis perspiciatis quos rem veniam nulla
        sint perferendis aperiam laborum debitis odio neque enim! Est
        consequuntur atque deleniti. Eveniet non mollitia modi earum nihil esse
        sit ipsam consequatur, cumque hic cum illum assumenda harum possimus,
      </Typography>
      <Box mb={3} display="flex">
        <IconButton target="_blank"
          href="https://instagram.com/henryallen.dev"
          size="large"
          color="primary"
        >
          <Instagram fontSize="inherit" />
        </IconButton>
        <IconButton target="_blank"
          href="https://t.me/HenryAllen_Dev"
          size="large"
          color="primary"
        >
          <Telegram fontSize="inherit" />
        </IconButton>
        <IconButton target="_blank" disabled size="large" color="primary">
          <Twitter fontSize="inherit" />
        </IconButton>
        <IconButton target="_blank" href="https://github.com/HenryAllen-dev"  size="large" color="primary">
          <GitHub fontSize="inherit" />
        </IconButton>
      </Box>
    </Container>
  );
};

export default About;
