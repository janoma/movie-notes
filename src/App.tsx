import { Container, Typography } from "@mui/material";
import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";
import { FC } from "react";
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
const analytics = getAnalytics(app);
console.log(analytics.app.name);

const App: FC = () => {
  return (
    <Container maxWidth="sm">
      <Typography>Well hello there</Typography>
    </Container>
  );
};

export default App;
