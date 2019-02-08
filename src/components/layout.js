import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { Link } from "gatsby";

export default ({ children }) => (
  <div style={{ margin: `3rem auto`, maxWidth: 650, padding: `0 1rem1` }}>
    <div className="bookwormBar">
      <AppBar position="static">
        <Toolbar>
          <IconButton
            className="bookwormButton"
            color="inherit"
            aria-label="Menu"
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" color="inherit" className="bookwormFont">
            Bookworm
          </Typography>
          <Button color="inherit">
            <Link to="/about/" style={{ color: "white" }}>
              About
            </Link>
          </Button>
          <Button color="inherit">
            <Link to="/contact/" style={{ color: "white" }}>
              Contact
            </Link>
          </Button>
        </Toolbar>
      </AppBar>
    </div>
    {children}
  </div>
);
