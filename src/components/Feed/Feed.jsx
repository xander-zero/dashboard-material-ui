import React from "react";
import { Container, makeStyles } from "@material-ui/core";
import Post from "../Post/Post";

const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: theme.spacing(5),
  },
}));

function Feed() {
  const classess = useStyles();
  return (
    <Container className={classess.container}>
      <Post />
      <Post />
      <Post />
      <Post />
    </Container>
  );
}

export default Feed;
