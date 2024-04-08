import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Divider,
  Stack,
  Typography,
} from "@mui/material";
import { customStlyes } from "../ServicesSection/index.styles";

interface Props {
  id: string;
}

const AboutUs = ({ id }: Props) => (
  <Box id={id}>
    <Box id={id} mt={6} px={4}>
      <Divider>
        <Typography variant="h3" sx={customStlyes.text}>
          About us
        </Typography>
      </Divider>
    </Box>

    <Card
      sx={{
        boxShadow: 5,
        borderRadius: 4,
        mx: 12,
        mt: 6,
        display: { xs: "none", md: "block" },
      }}
    >
      <Stack direction={{ xs: "column", md: "row" }}>
        <CardMedia
          component="img"
          sx={{ width: "35vw", height: 400 }}
          image={`${process.env.PUBLIC_URL}/images/about.png`}
        />

        <CardContent sx={{ display: "flex", alignItems: "center" }}>
          <Stack spacing={2}>
            <Typography>
              Welcome to [Your Cleaning Agency Name], where cleanliness meets
              convenience. We are a dedicated team of professionals committed to
              delivering top-notch cleaning services tailored to meet your
              needs. With years of experience in the industry, we understand the
              importance of a clean and healthy environment for both homes and
              businesses.
            </Typography>

            <Typography>
              At [Your Cleaning Agency Name], we pride ourselves on our
              attention to detail and commitment to customer satisfaction. Our
              skilled cleaners undergo rigorous training and utilize the latest
              techniques and eco-friendly products to ensure exceptional results
              every time.
            </Typography>

            <Typography>
              Whether you need regular house cleaning, deep cleaning, office
              cleaning, or specialized services, we've got you covered. We
              prioritize transparency, reliability, and professionalism in every
              interaction, striving to exceed your expectations with every
              visit.
            </Typography>

            <Typography>
              Choose [Your Cleaning Agency Name] for a spotless space and peace
              of mind. Let us handle the dirty work while you focus on what
              matters most. Contact us today to schedule your cleaning
              appointment!
            </Typography>
          </Stack>
        </CardContent>
      </Stack>
    </Card>

    <Card
      sx={{
        borderRadius: 4,
        mx: 5,
        mt: 6,
        display: { xs: "block", md: "none" },
      }}
    >
      <CardMedia
        component="img"
        image={`${process.env.PUBLIC_URL}/images/about.png`}
      />

      <CardContent>
        <Stack spacing={2}>
          <Typography>
            Welcome to [Your Cleaning Agency Name], where cleanliness meets
            convenience. We are a dedicated team of professionals committed to
            delivering top-notch cleaning services tailored to meet your needs.
            With years of experience in the industry, we understand the
            importance of a clean and healthy environment for both homes and
            businesses.
          </Typography>

          <Typography>
            At [Your Cleaning Agency Name], we pride ourselves on our attention
            to detail and commitment to customer satisfaction. Our skilled
            cleaners undergo rigorous training and utilize the latest techniques
            and eco-friendly products to ensure exceptional results every time.
          </Typography>

          <Typography>
            Whether you need regular house cleaning, deep cleaning, office
            cleaning, or specialized services, we've got you covered. We
            prioritize transparency, reliability, and professionalism in every
            interaction, striving to exceed your expectations with every visit.
          </Typography>

          <Typography>
            Choose [Your Cleaning Agency Name] for a spotless space and peace of
            mind. Let us handle the dirty work while you focus on what matters
            most. Contact us today to schedule your cleaning appointment!
          </Typography>
        </Stack>
      </CardContent>
    </Card>
  </Box>
);

export default AboutUs;
