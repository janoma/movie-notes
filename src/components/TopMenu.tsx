import AccountCircle from "@mui/icons-material/AccountCircle";
import SearchIcon from "@mui/icons-material/Search";
import { Avatar } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import { deepOrange } from "@mui/material/colors";
import IconButton from "@mui/material/IconButton";
import InputBase from "@mui/material/InputBase";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { alpha, styled } from "@mui/material/styles";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithRedirect,
  signOut,
} from "firebase/auth";
import { FC, useState } from "react";
import { useHotkeys } from "react-hotkeys-hook";

import { useAppSelector } from "../app/hooks";
import sessionSlice from "../features/session";

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

  const isMenuOpen = Boolean(anchorEl);

  const photoUrl = useAppSelector(sessionSlice.selectors.photoUrl);
  const userId = useAppSelector(sessionSlice.selectors.userId);
  const userName = useAppSelector(sessionSlice.selectors.userName);

  useHotkeys("mod+k", () => {
    document.getElementById("search")?.focus();
  });

  const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        horizontal: "right",
        vertical: "bottom",
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
      {userId ? (
        [
          <MenuItem key="profile" onClick={handleMenuClose}>
            Profile
          </MenuItem>,
          <MenuItem key="account" onClick={handleMenuClose}>
            My account
          </MenuItem>,
          <MenuItem key="sign-out" onClick={() => signOut(getAuth())}>
            Sign out
          </MenuItem>,
        ]
      ) : (
        <MenuItem
          onClick={() =>
            signInWithRedirect(getAuth(), new GoogleAuthProvider())
          }
        >
          Sign in
        </MenuItem>
      )}
    </Menu>
  );

  // Might need revisiting in the future due to deprecated value
  const mod = window.navigator.platform.includes("Mac") ? "⌘" : "Ctrl";

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar elevation={0} position="static" role="toolbar">
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
              {photoUrl ? (
                <Avatar
                  alt={userName ?? ""}
                  src={photoUrl}
                  sx={{ bgcolor: deepOrange[300] }}
                />
              ) : (
                <AccountCircle />
              )}
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {renderMenu}
    </Box>
  );
};

export default TopMenu;
