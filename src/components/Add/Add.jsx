import React, { useState } from "react";
import {
  Tooltip,
  Fab,
  makeStyles,
  Modal,
  Container,
  TextField,
  MenuItem,
  Button,
  Typography,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  Snackbar,
} from "@material-ui/core";
import { Add as AddIcon } from "@material-ui/icons";
import MuiAlert from "@material-ui/lab/Alert";
const useStyles = makeStyles((theme) => ({
  fab: {
    position: "fixed",
    bottom: 20,
    right: 20,
  },
  container: {
    width: 500,
    height: 550,
    backgroundColor: "white",
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    margin: "auto",
    borderRadius: 10,
    [theme.breakpoints.down("sm")]: {
      width: "100vw",
      height: "100vh",
    },
  },
  form: {
    padding: theme.spacing(2),
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
  item: {
    marginBottom: theme.spacing(3),
    width: "100%",
    display: "flex",
    justifyContent: "center",
  },
}));

const Alert = (props) => {
  return <MuiAlert evelotion={6} variant="filled" {...props} />;
};

function Add() {
  const classess = useStyles();
  const [open, setOpen] = useState(false);
  const [openAlert, setOpenAlert] = useState(false);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpenAlert(false);
  };

  return (
    <>
      <Tooltip title="Add" aria-label="add" onClick={() => setOpen(true)}>
        <Fab color="primary" className={classess.fab}>
          <AddIcon />
        </Fab>
      </Tooltip>
      <Modal open={open}>
        <Container className={classess.container}>
          <form className={classess.form} autoComplete="off">
            <Typography>Create New Person</Typography>
            <div className={classess.item}>
              <TextField
                id="standard-basic"
                label="Title"
                size="small"
                style={{ width: "100%" }}
              />
            </div>
            <div className={classess.item}>
              <TextField
                id="outline-multiline-static"
                multiline
                rows={4}
                variant="outlined"
                label="Desciption"
                size="small"
                style={{ width: "100%" }}
              />
            </div>
            <FormLabel component="legend">Who can comment?</FormLabel>
            <div className={classess.item}>
              <RadioGroup>
                <FormControlLabel
                  value="Evrybody"
                  control={<Radio />}
                  label="Evrybody"
                />
                <FormControlLabel
                  value="My Friend"
                  control={<Radio />}
                  label="My Friend"
                />
                <FormControlLabel value="Ali" control={<Radio />} label="Ali" />
              </RadioGroup>
            </div>
            <div className={classess.item}>
              <Button
                variant="outlined"
                color="primary"
                onClick={() => setOpenAlert(true)}
                style={{ marginRight: 20 }}
              >
                Create{" "}
              </Button>
              <Button
                variant="contained"
                color="secondary"
                onClick={() => setOpen(false)}
              >
                Cancel{" "}
              </Button>
            </div>
          </form>
        </Container>
      </Modal>
      <Snackbar
        open={openAlert}
        autoHideDuration={3000}
        onClose={handleClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
      >
        <Alert>This is a success message</Alert>
      </Snackbar>
    </>
  );
}

export default Add;
