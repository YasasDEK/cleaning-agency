import { Box, Typography, Button, Stack, Grid } from "@mui/material";
import { customStyles } from "./index.styles";
import { handleNavigation } from "../../../../shared/utils/helpers";
import AssignmentOutlinedIcon from "@mui/icons-material/AssignmentOutlined";
import InsertEmoticonOutlinedIcon from "@mui/icons-material/InsertEmoticonOutlined";
import GroupsOutlinedIcon from "@mui/icons-material/GroupsOutlined";
import StarBorderOutlinedIcon from "@mui/icons-material/StarBorderOutlined";

const CarouselText = () => (
  <Stack sx={customStyles.mainBox}>
    <Stack direction="column" justifyContent="center">
      <Grid
        container
        direction="row"
        spacing={2}
        justifyContent="center"
        alignItems="center"
      >
        <Grid item sx={customStyles.imageGrid}>
          <img
            alt="logo"
            style={customStyles.image}
            src={`${process.env.PUBLIC_URL}/images/logo.png`}
          />
        </Grid>

        <Grid item>
          <Typography sx={customStyles.text}>Cleaning Services</Typography>
        </Grid>
      </Grid>

      <Grid item>
        <Typography sx={customStyles.description}>
          Commercial cleaning experts
        </Typography>
      </Grid>

      <Box width="100%" display="flex" justifyContent="center">
        <Grid
          container
          spacing={1}
          mt={2}
          justifyContent="center"
          width={{ xs: 400, sm: 610 }}
        >
          <Grid xs={6} item sx={customStyles.iconGrid}>
            <Box sx={customStyles.iconBox}>
              <Typography sx={customStyles.iconText}>
                Satisfactory Work
              </Typography>

              <StarBorderOutlinedIcon sx={customStyles.icon} />
            </Box>
          </Grid>

          <Grid xs={6} item sx={customStyles.iconGrid}>
            <Box sx={customStyles.iconBox}>
              <Typography sx={customStyles.iconText}>
                Professional Team
              </Typography>

              <GroupsOutlinedIcon sx={customStyles.icon} />
            </Box>
          </Grid>

          <Grid xs={6} item sx={customStyles.iconGrid}>
            <Box sx={customStyles.iconBox}>
              <Typography sx={customStyles.iconText}>
                Happy Customers
              </Typography>

              <InsertEmoticonOutlinedIcon sx={customStyles.icon} />
            </Box>
          </Grid>

          <Grid xs={6} item sx={customStyles.iconGrid}>
            <Box sx={customStyles.iconBox}>
              <Typography sx={customStyles.iconText}>
                Flexible contracts
              </Typography>

              <AssignmentOutlinedIcon sx={customStyles.icon} />
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Stack>

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
