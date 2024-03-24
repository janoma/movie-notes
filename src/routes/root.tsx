import {
  createTheme,
  CssBaseline,
  StyledEngineProvider,
  ThemeProvider,
} from "@mui/material";
import { ThemeOptions } from "@mui/material/styles";
import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { FC } from "react";
import { Outlet } from "react-router-dom";

import { useAppDispatch } from "../app/hooks";
import TopMenu from "../components/TopMenu";
import sessionSlice from "../features/session";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAY6z5sRBqCnU3hIF0aCSOM0oUnXshxMmw",
  appId: "1:474448258360:web:8f6acb6cbeb2a345ee0dcd",
  authDomain: "janoma-movie-notes.firebaseapp.com",
  measurementId: "G-SHDJ6B2CKR",
  messagingSenderId: "474448258360",
  projectId: "janoma-movie-notes",
  storageBucket: "janoma-movie-notes.appspot.com",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

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
  // Save the user to the store
  const dispatch = useAppDispatch();

  onAuthStateChanged(auth, (user) => {
    dispatch(sessionSlice.actions.setPhotoUrl(user?.photoURL));
    dispatch(sessionSlice.actions.setUserId(user?.uid));
    dispatch(sessionSlice.actions.setUserName(user?.displayName));
  });

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
