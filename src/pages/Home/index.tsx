import { Box, Typography } from "@mui/material";
import CustomCarousel from "../../shared/components/CustomCarousel";
import Header from "../../shared/components/Header";

const Home = () => {
  return (
    <>
      <Header />

      <CustomCarousel />

      <Box
        sx={{
          position: "absolute",
          top: 100,
          display: "flex",
          width: "98%",
          justifyContent: "center",
          zIndex: 1,
          flexDirection: "column",
          mt: 16.5,
        }}
      >
        <Typography
          variant="h4"
          fontFamily="'Bebas Neue', sans-serif"
          sx={{ display: "flex", justifyContent: "center" }}
        >
          Welcome to
        </Typography>

        <Typography
          variant="h1"
          fontFamily="'Bebas Neue', sans-serif"
          sx={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            textAlign: "center",
          }}
        >
          Company
        </Typography>

        <Typography
          variant="h6"
          sx={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            textAlign: "center",
          }}
        >
          Sparkle & Shine: Your Premier Cleaning Solution
        </Typography>
      </Box>
    </>
  );
};

export default Home;
