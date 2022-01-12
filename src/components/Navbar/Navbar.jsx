import React, { useState } from "react";
import {
  AppBar,
  Avatar,
  Badge,
  InputBase,
  Toolbar,
  Typography,
} from "@material-ui/core";
import { Mail, Search, Notifications, Cancel } from "@material-ui/icons";
import { useStyle } from "../../useStyle";
import bgProfile from "../../assets/img/mahmood.jpg";
function Navbar() {
  const [open, setOpen] = useState(false);
  const clasess = useStyle({ open });
  return (
    <AppBar position="static">
      <Toolbar className={clasess.toolbar}>
        <Typography variant="h6" className={clasess.logoLg}>
          Xander Dashboard
        </Typography>
        <Typography variant="h6" className={clasess.logoSm}>
          Xander
        </Typography>
        <div className={clasess.search}>
          <Search />
          <InputBase className={clasess.input} placeholder="Search..." />
          <Cancel className={clasess.cancel} onClick={() => setOpen(false)} />
        </div>
        <div className={clasess.icons}>
          <Search
            onClick={() => setOpen(true)}
            className={clasess.searchButton}
          />
          <Badge badgeContent={4} color="secondary" className={clasess.badge}>
            <Mail />
          </Badge>
          <Badge badgeContent={2} color="secondary" className={clasess.badge}>
            <Notifications />
          </Badge>
          <Avatar alt="profile" src={bgProfile} />
        </div>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
