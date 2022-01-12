import React from "react";
import {
  Avatar,
  Container,
  ImageList,
  ImageListItem,
  makeStyles,
  Typography,
  Link,
  Divider,
} from "@material-ui/core";
import { AvatarGroup } from "@material-ui/lab";
import picProfile from "../../assets/img/mahmood.jpg";

const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: theme.spacing(5),
    position: "sticky",
    top: 0,
  },
  title: {
    fontSize: 16,
    fontWeight: 500,
    color: "#555",
  },
  imageList: {},
  link: {
    marginRight: theme.spacing(2),
    color: "#555",
    fontSidze: 16,
  },
}));

function Rightbar() {
  const classess = useStyles();
  return (
    <Container className={classess.container}>
      <Typography gutterBottom variant="h6" className={classess.title}>
        Online Friedns
      </Typography>
      <AvatarGroup max={4} style={{ marginBottom: 20 }}>
        <Avatar alt="mahmoud" src={picProfile} />
        <Avatar alt="mahmoud" src={picProfile} />
        <Avatar alt="mahmoud" src={picProfile} />
        <Avatar alt="mahmoud" src={picProfile} />
        <Avatar alt="mahmoud" src={picProfile} />
        <Avatar alt="mahmoud" src={picProfile} />
      </AvatarGroup>
      <Typography gutterBottom variant="h6" className={classess.title}>
        Gallery
      </Typography>
      <ImageList
        rowHeight={100}
        className={classess.imageList}
        cols={3}
        style={{ marginBottom: 20 }}
      >
        <ImageListItem>
          <img src={picProfile} alt="mahmoud" />
        </ImageListItem>
        <ImageListItem>
          <img src={picProfile} alt="mahmoud" />
        </ImageListItem>
        <ImageListItem>
          <img src={picProfile} alt="mahmoud" />
        </ImageListItem>
        <ImageListItem>
          <img src={picProfile} alt="mahmoud" />
        </ImageListItem>
      </ImageList>
      <Typography gutterBottom variant="h6" className={classess.title}>
        Category
      </Typography>
      <Link href="#" className={classess.link} variant="body2">
        Sport
      </Link>
      <Link href="#" className={classess.link} variant="body2">
        Food
      </Link>
      <Link href="#" className={classess.link} variant="body2">
        Movies
      </Link>
      <Link href="#" className={classess.link} variant="body2">
        Movies
      </Link>
      <Divider flexItem style={{ marginBottom: 10 }} />
      <Link href="#" className={classess.link} variant="body2">
        Videos
      </Link>
      <Link href="#" className={classess.link} variant="body2">
        Movies
      </Link>
      <Link href="#" className={classess.link} variant="body2">
        Science
      </Link>
    </Container>
  );
}

export default Rightbar;
