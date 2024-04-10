import { colorPalette } from "../../../shared/utils/constants";

export const customStyles = {
  card: {
    boxShadow: 5,
    borderRadius: 4,
    mx: 12,
    mt: 6,
    display: {
      xs: "none",
      md: "block",
    },
  },
  text: {
    width: "100%",
    display: "flex",
    fontFamily: "'Bebas Neue', sans-serif",
    justifyContent: "center",
    flexWrap: "wrap",
    color: colorPalette.sectionTitle,
  },
  cardMedia: {
    width: "35vw",
    height: 400,
  },
  cardContent: {
    display: "flex",
    alignItems: "center",
  },
  textCard: {
    borderRadius: 4,
    mx: 5,
    mt: 6,
    display: {
      xs: "block",
      md: "none",
    },
  },
};
