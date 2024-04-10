import { colorPalette } from "../../../shared/utils/constants";

export const customStyles = {
  card: {
    boxShadow: 5,
    borderRadius: 4,
    mx: {
      xs: 5,
      md: 12,
    },
    mt: 6,
    p: 4,
    gap: 2,
    display: "flex",
    flexDirection: {
      xs: "column",
      md: "row",
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
  submitButton: {
    borderRadius: 32,
    background: colorPalette.headerBackground,
    fontSize: 20,
    fontFamily: "'Bebas Neue', sans-serif",
    "&:hover": {
      backgroundColor: colorPalette.title,
    },
  },
  divider: {
    fontSize: 24,
    color: colorPalette.headerBackground,
    fontFamily: "'Bebas Neue', sans-serif",
    display: {
      xs: "none",
      md: "inherit",
    },
  },
  mobileDivider: {
    fontSize: 24,
    color: colorPalette.headerBackground,
    fontFamily: "'Bebas Neue', sans-serif",
    display: {
      xs: "inherit",
      md: "none",
    },
  },
  button: {
    width: "80%",
    gap: 1,
    borderRadius: 32,
    fontSize: 20,
    fontFamily: "'Bebas Neue', sans-serif",
    textTransform: "none",
    background: colorPalette.headerBackground,
    "&:hover": {
      backgroundColor: colorPalette.title,
    },
  },
  mailStack: {
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    py: 2,
  },
  link: {
    textDecoration: "none",
  },
  formLabel: {
    fontFamily: "'Bebas Neue', sans-serif",
    mb: "-15px !important",
    color: colorPalette.sectionTitle,
  },
};
