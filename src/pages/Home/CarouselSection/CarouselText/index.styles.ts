import { colorPalette } from "../../../../shared/utils/constants";

export const customStyles = {
  mainBox: {
    position: "absolute",
    top: 100,
    width: "100%",
    justifyContent: "center",
    zIndex: 1,
    mt: 10,
  },
  text: {
    mt: {
      xs: -2,
      md: 0.5,
    },
    fontSize: {
      xs: 60,
      sm: 90,
    },
    display: "flex",
    fontFamily: "'Bebas Neue', sans-serif",
    justifyContent: "center",
    flexWrap: "wrap",
    textAlign: "center",
    color: colorPalette.sectionTitle,
  },
  description: {
    mt: {
      xs: -2,
      md: 0.5,
    },
    fontSize: {
      xs: 30,
      sm: 50,
    },
    display: "flex",
    fontWeight: "bold",
    opacity: 0.8,
    fontFamily: "'Licorice', cursive",
    justifyContent: "center",
    flexWrap: "wrap",
    textAlign: "center",
    color: colorPalette.sectionTitle,
  },
  buttonBox: {
    display: "flex",
    justifyContent: "center",
    mt: 4,
  },
  button: {
    width: 200,
    borderRadius: 32,
    fontSize: 20,
    fontFamily: "'Bebas Neue', sans-serif",
    background: colorPalette.headerBackground,
    "&:hover": {
      backgroundColor: colorPalette.title,
    },
  },
  icon: {
    fontSize: {
      xs: 20,
      sm: 28,
    },
    color: colorPalette.white,
  },
  iconText: {
    fontSize: {
      xs: 12,
      sm: 28,
    },
    display: "flex",
    fontFamily: "'Bebas Neue', sans-serif",
    justifyContent: "center",
    flexWrap: "wrap",
    textAlign: "center",
    color: colorPalette.white,
  },
  iconGrid: {
    display: "flex",
    justifyContent: "center",
  },
  iconBox: {
    opacity: 0.8,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 2,
    px: 4,
    background: colorPalette.headerBackground,
    height: 40,
    width: {
      xs: 100,
      sm: 800,
    },
    pt: 0.5,
    borderLeft: `4px solid ${colorPalette.title}`,
  },
  imageGrid: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    mb: 1,
  },
  image: {
    borderRadius: 8,
    width: 350,
  },
};
