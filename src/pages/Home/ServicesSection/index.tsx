import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Divider,
  Grid,
  Typography,
} from "@mui/material";
import { customStyles } from "./index.styles";

interface Props {
  id: string;
}

const serviceList = [
  {
    id: 1,
    name: "Office cleaning",
    image: `${process.env.PUBLIC_URL}/images/office.jpg`,
    description:
      "Office cleaning services encompass comprehensive upkeep tailored to maintain a professional and hygienic workspace environment. This includes dusting, vacuuming, mopping, sanitizing surfaces, and emptying trash bins. The aim is to enhance productivity, impress clients, and promote employee well-being by ensuring a tidy and organized office space.",
  },
  {
    id: 2,
    name: "Fitness Center cleaning",
    image: `${process.env.PUBLIC_URL}/images/fitness.jpg`,
    description:
      "Cleaning services for fitness centers focus on maintaining a clean and sanitized environment conducive to physical activity and wellness. This includes thorough cleaning of exercise equipment, locker rooms, showers, and common areas. Special attention is given to disinfecting surfaces prone to bacterial growth, such as mats, weights, and cardio machines. By ensuring cleanliness, these services contribute to the overall health and satisfaction of gym members.",
  },
  {
    id: 3,
    name: "Medical Center cleaning",
    image: `${process.env.PUBLIC_URL}/images/medical.jpg`,
    description:
      "Cleaning services for medical centers prioritize stringent sanitation and disinfection protocols to ensure the safety and health of patients, staff, and visitors. Special attention is paid to high-touch surfaces, waiting areas, examination rooms, and medical equipment. Adherence to healthcare industry standards and regulations is crucial in preventing the spread of infections and maintaining a sterile environment.",
  },
  {
    id: 4,
    name: "School cleaning",
    image: `${process.env.PUBLIC_URL}/images/school.jpg`,
    description:
      "School cleaning services encompass the comprehensive maintenance and sanitation of educational facilities, including classrooms, corridors, restrooms, and common areas. These services are tailored to meet the unique needs of educational environments, ensuring a clean, safe, and conducive atmosphere for learning. Tasks may include floor mopping, dusting, disinfecting surfaces, trash removal, and specialized cleaning of gymnasiums and laboratories.",
  },
  {
    id: 5,
    name: "Retail cleaning",
    image: `${process.env.PUBLIC_URL}/images/retail.jpg`,
    description:
      "Retail cleaning services are designed to uphold the cleanliness and hygiene standards of retail spaces such as stores, malls, boutiques, and shopping centers. With a focus on enhancing the customer experience, these services involve thorough cleaning of floors, shelves, display cases, fitting rooms, and other areas frequented by shoppers. Emphasis is placed on maintaining an inviting ambiance, removing debris, sanitizing high-touch surfaces, and ensuring a visually appealing environment.",
  },
  {
    id: 6,
    name: "Child Care cleaning",
    image: `${process.env.PUBLIC_URL}/images/child.jpg`,
    description:
      "Child care cleaning services cater to the unique needs of facilities dedicated to the care and safety of children, including daycare centers, preschools, and nurseries. These services prioritize the health and well-being of young occupants by implementing stringent sanitation protocols. Cleaning tasks encompass toy disinfection, floor sanitization, restroom cleaning, and meticulous attention to areas prone to germs and bacteria. Special consideration is given to using child-safe cleaning products to create a clean and nurturing environment conducive to children's development.",
  },
];

const ServicesSection = ({ id }: Props) => (
  <>
    <Box id={id} mt={6} px={4}>
      <Divider>
        <Typography variant="h3" sx={customStyles.text}>
          Our Services
        </Typography>
      </Divider>
    </Box>

    <Box px={4} display="flex" justifyContent="center">
      <Grid
        container
        spacing={6}
        mt={2}
        display="flex"
        justifyContent="center"
        width="80vw"
      >
        {serviceList.map((service, index) => (
          <Grid
            xs={12}
            sm={6}
            md={4}
            key={index}
            item
            display="flex"
            justifyContent="center"
          >
            <Card sx={customStyles.card}>
              <CardMedia component="img" height="200" image={service.image} />

              <CardContent>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                  sx={customStyles.cardHeading}
                >
                  {service.name}
                </Typography>

                <Typography variant="body2" color="text.secondary">
                  {service.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  </>
);

export default ServicesSection;
