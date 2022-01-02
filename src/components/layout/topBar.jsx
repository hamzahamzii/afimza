import React, { Component } from "react";

import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";

class TopBar extends Component {
  render() {
    return (
      <div>
        <AppBar position="fixed">
          <Toolbar sx={{ alignSelf: "center" }}>
            <Button color="inherit">Gallery</Button>
            <Button color="inherit">Thoughts</Button>
            <Button color="inherit">Upcoming</Button>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export default TopBar;
