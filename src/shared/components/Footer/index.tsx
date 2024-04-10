import { Box, Typography } from "@mui/material";
import { customStyles } from "./index.styles";
import { colorPalette } from "../../utils/constants";

const Footer = () => (
  <Box sx={customStyles.mainBox}>
    <Box sx={customStyles.innerBox}>
      <img
        alt="logo"
        width={120}
        style={customStyles.image}
        src={`${process.env.PUBLIC_URL}/images/logo.png`}
      />

      <Typography sx={customStyles.title}>cleaning services</Typography>
    </Box>

    <Box>
      <Typography mt={0.5} color={colorPalette.white}>
        {`Contact number: +61 480 319 262  |  Email: kavindaxyz@gmail.com`}
      </Typography>
    </Box>

    <Box>
      <Typography mt={0.5} color={colorPalette.title}>
        ©2024 Optimum Cleaning Solutions
      </Typography>
    </Box>
  </Box>
);

export default Footer;
