import React from "react";
import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  makeStyles,
  Typography,
} from "@material-ui/core";
import picProfile from "../../assets/img/mahmood.jpg";
const useStyles = makeStyles((theme) => ({
  media: {
    height: 250,
    [theme.breakpoints.down("sm")]: {
      height: 150,
    },
  },
  card: {
    marginBottom: theme.spacing(5),
  },
}));

function Post() {
  const classess = useStyles();
  return (
    <Card className={classess.card}>
      <CardActionArea>
        <CardMedia
          className={classess.media}
          image={picProfile}
          title="My Post "
        />
        <CardContent>
          <Typography gutterBottom variant="h5">
            My First Post{" "}
          </Typography>
          <Typography variant="body2">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Voluptatibus, libero. Lorem ipsum dolor sit amet consectetur,
            adipisicing elit. Voluptatibus, libero.{" "}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
}

export default Post;
