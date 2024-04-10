import Footer from "../../shared/components/Footer";
import Header from "../../shared/components/Header";
import AboutUs from "./AboutUs";
import CarouselSection from "./CarouselSection";
import ContactUs from "./ContactUs";
import ServicesSection from "./ServicesSection";

const Home = () => {
  return (
    <>
      <Header />

      <CarouselSection id="home" />

      <ServicesSection id="services" />

      <AboutUs id="about" />

      <ContactUs id="contact" />

      <Footer />
    </>
  );
};

export default Home;
