import MovieRoundedIcon from "@mui/icons-material/MovieRounded";
import { Avatar, Box, Button, Grid, Paper, Typography } from "@mui/material";
import { FC } from "react";

const Landing: FC = () => {
  const landingBgs = Object.keys(
    import.meta.glob("../../public/landing/*.jpg"),
  ).map((f) => f.replace("../../public", ""));
  const randomBg = landingBgs[Math.floor(Math.random() * landingBgs.length)];

  return (
    <Grid component="main" container sx={{ height: "50vh" }}>
      <Grid
        component={Paper}
        elevation={6}
        item
        md={8}
        square
        sx={{
          backgroundColor: (t) =>
            t.palette.mode === "light"
              ? t.palette.grey[50]
              : t.palette.grey[900],
          backgroundImage: `url(${randomBg})`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      />
      <Grid component={Paper} elevation={6} item md={4} square>
        <Box
          sx={{
            alignItems: "center",
            display: "flex",
            flexDirection: "column",
            mx: 4,
            my: 8,
          }}
        >
          <Avatar sx={{ bgcolor: "secondary.main", m: 1 }}>
            <MovieRoundedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Movie Notes
          </Typography>
          <Typography align="center" sx={{ my: 4 }}>
            Share comments, observations and opinions about movies you watch.
          </Typography>
          <Button sx={{ mb: 2 }} type="submit" variant="contained">
            Sign In With Google
          </Button>
          <Typography align="center" color="text.secondary" variant="body2">
            Created by janoma
          </Typography>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Landing;
