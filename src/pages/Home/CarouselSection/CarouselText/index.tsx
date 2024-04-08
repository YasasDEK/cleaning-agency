import { Box, Typography, Button, Stack } from "@mui/material";
import { customStyles } from "./index.styles";
import { handleNavigation } from "../../../../shared/utils/helpers";

const CarouselText = () => (
  <Stack sx={customStyles.mainBox}>
    <Typography variant="h4" sx={customStyles.text}>
      Welcome to
    </Typography>

    <Typography variant="h1" sx={customStyles.text}>
      Company
    </Typography>

    <Typography variant="h6" sx={customStyles.text}>
      Sparkle & Shine: Your Premier Cleaning Solution
    </Typography>

    <Box sx={customStyles.buttonBox}>
      <Button
        onClick={() => handleNavigation("contact")}
        variant="contained"
        sx={customStyles.button}
      >
        Contact Us
      </Button>
    </Box>
  </Stack>
);

export default CarouselText;
