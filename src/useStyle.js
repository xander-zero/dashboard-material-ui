import { alpha, makeStyles } from "@material-ui/core";

export const useStyle = makeStyles((theme) => ({
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  logoLg: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  logoSm: {
    display: "block",
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  search: {
    display: "flex",
    alignItems: "center",
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    borderRadius: theme.shape.borderRadius,
    width: "50%",
    [theme.breakpoints.down("sm")]: {
      display: ({ open }) => (open ? "flex" : "none"),
      width: "70%",
    },
  },
  cancel: {
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  input: {
    color: "white",
    marginLeft: theme.spacing(1),
  },
  icons: {
    display: ({ open }) => (open ? "none" : "flex"),
    alignItems: "center",
  },
  badge: {
    marginRight: theme.spacing(2),
  },
  searchButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
}));
