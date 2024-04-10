import { colorPalette } from "../../utils/constants";

export const customStyles = {
  toolbar: {
    color: colorPalette.black,
  },
  mainBox: {
    width: "100vw",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  innerBox: {
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
    gap: 1,
  },
  menuButton: {
    display: {
      xs: "flex",
      sm: "none",
    },
  },
  menu: {
    display: {
      xs: "block",
      md: "none",
    },
  },
  menuItem: {
    width: "100vw",
    justifyContent: "center",
  },
  buttonBox: {
    display: {
      xs: "none",
      sm: "flex",
    },
  },
  button: {
    my: 2,
    display: "block",
    fontWeight: "bold",
  },
  title: {
    mt: 1,
    display: "block",
    color: colorPalette.title,
    fontSize: 22,
    fontFamily: "'Bebas Neue', sans-serif",
  },
  pageButtonsBox: {
    display: {
      xs: "none",
      sm: "flex",
    },
  },
  pageButton: {
    mt: 1,
    display: "block",
    color: colorPalette.white,
    fontSize: 22,
    fontFamily: "'Bebas Neue', sans-serif",
  },
  appBar: {
    background: colorPalette.headerBackground,
  },
  menuText: {
    fontSize: 22,
    fontFamily: "'Bebas Neue', sans-serif",
  },
  image: {
    borderRadius: 8,
  },
};
