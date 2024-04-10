import { colorPalette } from "../../utils/constants";

export const customStyles = {
  mainBox: {
    background: colorPalette.headerBackground,
    py: 4,
    px: {
      xs: 4,
      sm: 12,
    },
    display: "flex",
    alignItems: "center",
    justifyContent: {
      xs: "center",
      md: "space-between",
    },
  },
  innerBox: {
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
    gap: 1,
  },
  title: {
    mt: 1,
    display: "block",
    color: colorPalette.title,
    fontSize: 22,
    fontFamily: "'Bebas Neue', sans-serif",
  },
  image: {
    borderRadius: 8,
  },
};
