import {
  createTheme,
  CssBaseline,
  StyledEngineProvider,
  ThemeProvider,
} from "@mui/material";
import { ThemeOptions } from "@mui/material/styles";
import { FC } from "react";
import { Outlet } from "react-router-dom";

import TopMenu from "../components/TopMenu";

const themeOptions: ThemeOptions = {
  palette: {
    mode: "light",
    primary: {
      main: "#1976d2",
    },
    secondary: {
      main: "#f50057",
    },
  },
};

const Root: FC = () => {
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={createTheme(themeOptions)}>
        <CssBaseline />
        <TopMenu />
        <Outlet />
      </ThemeProvider>
    </StyledEngineProvider>
  );
};

export default Root;
