import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import { customStyles } from "./index.styles";
import { handleNavigation } from "../../utils/helpers";
import { useState } from "react";
import { colorPalette } from "../../utils/constants";

const pages = [
  { id: "home", name: "Home" },
  { id: "services", name: "Our Services" },
  { id: "about", name: "About us" },
  { id: "contact", name: "Contact us" },
];

const Header = () => {
  const [option, setOption] = useState<string | null>("home");
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleMenuSelect = (sectionId: string) => {
    setOption(sectionId);

    handleNavigation(sectionId);

    setAnchorElNav(null);
  };

  return (
    <AppBar sx={customStyles.appBar}>
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={customStyles.toolbar}>
          <Box sx={customStyles.mainBox}>
            <Box sx={customStyles.innerBox}>
              <img
                alt="logo"
                width={120}
                style={customStyles.image}
                src={`${process.env.PUBLIC_URL}/images/logo.png`}
              />

              <Typography sx={customStyles.title}>cleaning services</Typography>
            </Box>

            <Box sx={customStyles.pageButtonsBox}>
              {pages.map((page, index) => (
                <Button
                  key={index}
                  onClick={() => handleMenuSelect(page.id)}
                  sx={[
                    customStyles.pageButton,
                    {
                      color:
                        option === page.id
                          ? colorPalette.title
                          : colorPalette.white,
                    },
                  ]}
                >
                  {page.name}
                </Button>
              ))}
            </Box>

            <Box sx={customStyles.menuButton}>
              <IconButton
                size="large"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>

              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                keepMounted
                open={Boolean(anchorElNav)}
                onClick={() => setAnchorElNav(null)}
                sx={customStyles.menu}
              >
                {pages.map((page, index) => (
                  <MenuItem
                    sx={customStyles.menuItem}
                    key={index}
                    onClick={() => handleMenuSelect(page.id)}
                  >
                    <Typography textAlign="center" sx={customStyles.menuText}>
                      {page.name}
                    </Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
