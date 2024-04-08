import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Divider,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { customStlyes } from "../ServicesSection/index.styles";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import CallIcon from "@mui/icons-material/Call";
import { Link } from "react-router-dom";

interface Props {
  id: string;
}

const ContactUs = ({ id }: Props) => (
  <Box id={id} mb={4}>
    <Box id={id} mt={6} px={4}>
      <Divider>
        <Typography variant="h3" sx={customStlyes.text}>
          Contact us
        </Typography>
      </Divider>
    </Box>

    <Card
      sx={{
        boxShadow: 5,
        borderRadius: 4,
        mx: { xs: 5, md: 12 },
        mt: 6,
        p: 4,
        gap: 2,
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
      }}
    >
      <Stack width={{ xs: "100%", md: "60%" }}>
        <form>
          <Stack spacing={2}>
            <TextField sx={{ borderRadius: 16 }} label="Name" />

            <TextField label="Email" />

            <TextField label="Contact no" />

            <TextField multiline rows={3} label="What do you want from us" />

            <Button variant="contained" sx={{ borderRadius: 32 }}>
              Submit
            </Button>
          </Stack>
        </form>
      </Stack>

      <Divider
        sx={{ display: { xs: "none", md: "inherit" } }}
        orientation="vertical"
        flexItem
      >
        OR
      </Divider>

      <Divider sx={{ display: { xs: "inherit", md: "none" } }}>OR</Divider>

      <Stack
        spacing={4}
        width={{ xs: "100%", md: "40%" }}
        justifyContent="center"
        alignItems="center"
        sx={{
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundImage: `url(${process.env.PUBLIC_URL}/images/call.png)`,
          py: 2,
        }}
      >
        <Button
          sx={{
            width: "80%",
            gap: 1,
            py: 1,
            borderRadius: 32,
            fontSize: 16,
            textTransform: "none",
          }}
          variant="contained"
        >
          <Link
            to="mailto:kavindaxyz@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none" }} // Add this line
          >
            <Stack
              direction="row"
              spacing={2}
              display="flex"
              alignItems="center"
              sx={{ color: "white" }}
            >
              <Typography>Send us an Email</Typography>

              <MailOutlineIcon />
            </Stack>
          </Link>
        </Button>

        <Button
          sx={{
            width: "80%",
            gap: 1,
            py: 1,
            borderRadius: 32,
            fontSize: 16,
            textTransform: "none",
          }}
          fullWidth
          variant="contained"
        >
          Call Us
          <CallIcon />
        </Button>
      </Stack>
    </Card>
  </Box>
);

export default ContactUs;
