import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import { customStyles } from "./index.styles";

const pages = ["Home", "Our Services", "About us"];

const Header = () => {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar sx={customStyles.appBar}>
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={customStyles.toolbar}>
          <Box sx={customStyles.mainBox}>
            <Box sx={customStyles.innerBox}>
              <Avatar
                alt="Remy Sharp"
                src={`${process.env.PUBLIC_URL}/images/logoCircle.png`}
              />

              <Typography sx={customStyles.title}>Hello</Typography>
            </Box>

            <Box sx={customStyles.pageButtonsBox}>
              {pages.map((page) => (
                <Button
                  key={page}
                  onClick={handleCloseNavMenu}
                  sx={customStyles.pageButton}
                >
                  {page}
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
                onClose={handleCloseNavMenu}
                sx={customStyles.menu}
              >
                {pages.map((page) => (
                  <MenuItem
                    sx={customStyles.menuItem}
                    key={page}
                    onClick={handleCloseNavMenu}
                  >
                    <Typography textAlign="center">{page}</Typography>
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
