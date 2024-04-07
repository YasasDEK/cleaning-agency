import Carousel from "react-material-ui-carousel";
import Item from "./Item";

const carouselImages = [
  { url: `${process.env.PUBLIC_URL}/images/one.jpeg` },
  { url: `${process.env.PUBLIC_URL}/images/two.jpg` },
  { url: `${process.env.PUBLIC_URL}/images/three.jpg` },
];

const CustomCarousel = () => (
  <Carousel autoPlay navButtonsAlwaysVisible sx={{ mt: 8 }}>
    {carouselImages.map((image, index) => (
      <Item key={index} imageUrl={image.url} />
    ))}
  </Carousel>
);

export default CustomCarousel;
