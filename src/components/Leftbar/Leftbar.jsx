import { Container, List, makeStyles, Typography } from "@material-ui/core";
import {
  Apps,
  Camera,
  Collections,
  ExitToApp,
  Home,
  ListAlt,
  Person,
  Settings,
  Storefront,
  VideocamSharp,
} from "@material-ui/icons";
import React from "react";

const useStyle = makeStyles((theme) => ({
  container: {
    height: "100vh",
    position: "sticky",
    top: 0,
    color: "white",
    paddingTop: theme.spacing(5),
    backgroundColor: theme.palette.primary.main,
    [theme.breakpoints.up("sm")]: {
      backgroundColor: "white",
      color: "#555",
      border: "1px solid #ece7e7",
    },
  },
  item: {
    display: "flex",
    alignItems: "center",
    marginBottom: theme.spacing(4),
    [theme.breakpoints.up("sm")]: {
      marginBottom: theme.spacing(3),
      cursor: "pointer",
    },
  },
  icon: {
    marginRight: theme.spacing(1),
    [theme.breakpoints.up("sm")]: {
      fontSize: "24px",
    },
  },
  text: {
    fontWeight: "500",
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
}));

function Leftbar() {
  const clasess = useStyle();
  return (
    <Container className={clasess.container}>
      <div className={clasess.item}>
        <Home className={clasess.icon} />
        <Typography className={clasess.text}>Homepage</Typography>
      </div>
      <div className={clasess.item}>
        <Person className={clasess.icon} />
        <Typography className={clasess.text}>Friends</Typography>
      </div>
      <div className={clasess.item}>
        <ListAlt className={clasess.icon} />
        <Typography className={clasess.text}>Lists</Typography>
      </div>
      <div className={clasess.item}>
        <Camera className={clasess.icon} />
        <Typography className={clasess.text}>Camera</Typography>
      </div>
      <div className={clasess.item}>
        <VideocamSharp className={clasess.icon} />
        <Typography className={clasess.text}>Videos</Typography>
      </div>
      <div className={clasess.item}>
        <Apps className={clasess.icon} />
        <Typography className={clasess.text}>Apps</Typography>
      </div>
      <div className={clasess.item}>
        <Collections className={clasess.icon} />
        <Typography className={clasess.text}>Collections</Typography>
      </div>
      <div className={clasess.item}>
        <Storefront className={clasess.icon} />
        <Typography className={clasess.text}>Market Place</Typography>
      </div>
      <div className={clasess.item}>
        <Settings className={clasess.icon} />
        <Typography className={clasess.text}>Settings</Typography>
      </div>
      <div className={clasess.item}>
        <ExitToApp className={clasess.icon} />
        <Typography className={clasess.text}>Logout</Typography>
      </div>
    </Container>
  );
}

export default Leftbar;
