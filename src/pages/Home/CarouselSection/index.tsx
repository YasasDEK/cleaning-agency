import Carousel from "react-material-ui-carousel";
import { Box } from "@mui/material";
import { customStyles } from "./index.styles";
import CarouselText from "./CarouselText";

interface Props {
  id: string;
}

const carouselImages = [
  { url: `${process.env.PUBLIC_URL}/images/one.jpeg` },
  { url: `${process.env.PUBLIC_URL}/images/two.jpg` },
  { url: `${process.env.PUBLIC_URL}/images/three.jpg` },
];

const CarouselSection = ({ id }: Props) => (
  <Box id={id}>
    <Carousel autoPlay navButtonsAlwaysVisible sx={customStyles.carousel}>
      {carouselImages.map((image, index) => (
        <Box
          key={index}
          sx={[customStyles.mainBox, { backgroundImage: `url(${image.url})` }]}
        />
      ))}
    </Carousel>

    <CarouselText />
  </Box>
);

export default CarouselSection;
