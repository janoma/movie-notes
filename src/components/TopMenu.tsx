import AccountCircle from "@mui/icons-material/AccountCircle";
import MoreIcon from "@mui/icons-material/MoreVert";
import SearchIcon from "@mui/icons-material/Search";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import InputBase from "@mui/material/InputBase";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { alpha, styled } from "@mui/material/styles";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { FC, useState } from "react";
import { useHotkeys } from "react-hotkeys-hook";

const Search = styled("div")(({ theme }) => ({
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  borderRadius: theme.shape.borderRadius,
  marginLeft: 0,
  marginRight: theme.spacing(2),
  position: "relative",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
  width: "100%",
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  alignItems: "center",
  display: "flex",
  height: "100%",
  justifyContent: "center",
  padding: theme.spacing(0, 2),
  pointerEvents: "none",
  position: "absolute",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
    transition: theme.transitions.create("width"),
    width: "100%",
  },
  color: "inherit",
}));

const TopMenu: FC = () => {
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] =
    useState<HTMLElement | null>(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  useHotkeys("mod+k", () => {
    document.getElementById("search")?.focus();
  });

  const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        horizontal: "right",
        vertical: "top",
      }}
      id={menuId}
      keepMounted
      onClose={handleMenuClose}
      open={isMenuOpen}
      transformOrigin={{
        horizontal: "right",
        vertical: "top",
      }}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        horizontal: "right",
        vertical: "top",
      }}
      id={mobileMenuId}
      keepMounted
      onClose={handleMobileMenuClose}
      open={isMobileMenuOpen}
      transformOrigin={{
        horizontal: "right",
        vertical: "top",
      }}
    >
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          aria-label="account of current user"
          color="inherit"
          size="large"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

  // Might need revisiting in the future due to deprecated value
  const mod = window.navigator.platform.includes("Mac") ? "⌘" : "Ctrl";

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography
            component="div"
            noWrap
            sx={{ display: { sm: "block", xs: "none" } }}
            variant="h6"
          >
            Movie Notes
          </Typography>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              id="search"
              inputProps={{ "aria-label": "search" }}
              placeholder={`Search… (${mod}+K)`}
            />
          </Search>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { md: "flex", xs: "none" } }}>
            <IconButton
              aria-controls={menuId}
              aria-haspopup="true"
              aria-label="account of current user"
              color="inherit"
              edge="end"
              onClick={handleProfileMenuOpen}
              size="large"
            >
              <AccountCircle />
            </IconButton>
          </Box>
          <Box sx={{ display: { md: "none", xs: "flex" } }}>
            <IconButton
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              aria-label="show more"
              color="inherit"
              onClick={handleMobileMenuOpen}
              size="large"
            >
              <MoreIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </Box>
  );
};

export default TopMenu;
