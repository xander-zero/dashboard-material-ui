import { Grid, makeStyles } from "@material-ui/core";
import React from "react";
import { Feed, Leftbar, Navbar, Rightbar } from "./components";
import Add from "./components/Add/Add";

const useStyles = makeStyles((theme) => ({
  right: {
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
}));

const App = () => {
  const classess = useStyles();
  return (
    <div>
      <Navbar />
      <Grid container>
        <Grid item sm={2} xs={2}>
          <Leftbar />
        </Grid>
        <Grid item sm={7} xs={10}>
          <Feed />
        </Grid>
        <Grid item sm={3} className={classess.right}>
          <Rightbar />
        </Grid>
      </Grid>
      <Add />
    </div>
  );
};
export default App;
