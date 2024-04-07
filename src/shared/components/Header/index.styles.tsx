import { colorPalette } from "../../utils/constants";

export const customStyles = {
  container: {
    display: "flex",
    justifyContent: "center",
  },
  headerBox: {
    zIndex: 1,
    position: "fixed",
  },
  contentBox: {
    width: "90vw",
    flexWrap: "wrap",
  },
  logoButton: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    px: 8,
  },
  logo: {
    fontFamily: "'Bebas Neue', sans-serif",
    fontSize: 25,
  },
  buttonStack: {
    display: "flex",
  },
  emailButton: {
    border: "1px solid #fe6c0a",
    color: colorPalette.orangeColor,
    "&:hover": {
      border: "1px solid #fe6c0a",
      opacity: 0.8,
    },
  },
  ideasText: {
    fontWeight: "bold",
    fontSize: 12,
    mr: 1,
  },
  divider: {
    width: "100vw",
    background: "white",
  },

  // new
  toolbar: {
    color: "black",
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
    fontWeight: "bold",
  },
  pageButtonsBox: {
    display: {
      xs: "none",
      sm: "flex",
    },
  },
  pageButton: {
    my: 2,
    display: "block",
  },
  appBar: {
    background: "white",
  },
};
