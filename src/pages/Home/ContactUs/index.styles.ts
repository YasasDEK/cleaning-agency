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
  },
  submitButton: {
    borderRadius: 32,
  },
  divider: {
    display: {
      xs: "none",
      md: "inherit",
    },
  },
  mobileDivider: {
    display: {
      xs: "inherit",
      md: "none",
    },
  },
  button: {
    width: "80%",
    gap: 1,
    py: 1,
    borderRadius: 32,
    fontSize: 16,
    textTransform: "none",
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
  },
};
