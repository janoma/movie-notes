import {
  StyledEngineProvider,
  ThemeProvider,
  CssBaseline,
  createTheme,
} from "@mui/material";
import { FC } from "react";
import App from "../App";

import { ThemeOptions } from "@mui/material/styles";

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
        <App />
      </ThemeProvider>
    </StyledEngineProvider>
  );
};

export default Root;
