import { Box } from "@mui/material";
import { testFunction } from "../../shared/utils/helpers";

const Home = () => (
  <Box
    sx={{
      wordBreak: "break-word",
      fontSize: {
        xs: 30,
        sm: 50,
      },
      fontWeight: "bold",
    //   color: "white",
      textAlign: {
        xs: "center",
        md: "initial",
      },
    }}
  >
    Hello {testFunction()}
  </Box>
);

export default Home;
