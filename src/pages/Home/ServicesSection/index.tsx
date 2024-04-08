import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Divider,
  Grid,
  Typography,
} from "@mui/material";
import { customStlyes } from "./index.styles";

interface Props {
  id: string;
}

const serviceList = [
  {
    id: 1,
    name: "Floor cleaning",
    image: `${process.env.PUBLIC_URL}/images/one.jpeg`,
    description:
      "As a floor cleaner, your primary responsibilities include cleaning floors and ensuring the safety and security of the location. Your duties include working with tile, wood, carpet, and other flooring materials. You need to vacuum, mop, steam, and sweep to make sure the floors get cleaned.",
  },
  {
    id: 2,
    name: "Floor cleaning",
    image: `${process.env.PUBLIC_URL}/images/one.jpeg`,
    description:
      "As a floor cleaner, your primary responsibilities include cleaning floors and ensuring the safety and security of the location. Your duties include working with tile, wood, carpet, and other flooring materials. You need to vacuum, mop, steam, and sweep to make sure the floors get cleaned.",
  },
  {
    id: 3,
    name: "Floor cleaning",
    image: `${process.env.PUBLIC_URL}/images/one.jpeg`,
    description:
      "As a floor cleaner, your primary responsibilities include cleaning floors and ensuring the safety and security of the location. Your duties include working with tile, wood, carpet, and other flooring materials. You need to vacuum, mop, steam, and sweep to make sure the floors get cleaned.",
  },
  {
    id: 4,
    name: "Floor cleaning",
    image: `${process.env.PUBLIC_URL}/images/one.jpeg`,
    description:
      "As a floor cleaner, your primary responsibilities include cleaning floors and ensuring the safety and security of the location. Your duties include working with tile, wood, carpet, and other flooring materials. You need to vacuum, mop, steam, and sweep to make sure the floors get cleaned.",
  },
];

const ServicesSection = ({ id }: Props) => (
  <Box id={id} mt={6} px={4}>
    <Divider>
      <Typography variant="h3" sx={customStlyes.text}>
        Our Services
      </Typography>
    </Divider>

    <Grid container spacing={4} mt={2} justifyContent="center">
      {serviceList.map((service, index) => (
        <Grid key={index} item>
          <Card sx={customStlyes.card}>
            <CardActionArea>
              <CardMedia component="img" height="200" image={service.image} />

              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {service.name}
                </Typography>

                <Typography variant="body2" color="text.secondary">
                  {service.description}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
      ))}
    </Grid>
  </Box>
);

export default ServicesSection;
