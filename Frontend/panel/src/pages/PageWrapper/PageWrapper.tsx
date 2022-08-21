import React from "react";

import { AppBar, Button, IconButton, Toolbar, Typography } from "@mui/material";
import { Link, Outlet } from "react-router-dom";
import { AccessibleForward, Menu } from "@mui/icons-material";

type WrapperState = {};

class PageWrapper extends React.Component<{}> {
  render(): React.ReactNode {
    return (
      <div>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <AccessibleForward />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ mr: "100px" }}>
              Scripts Configurator
            </Typography>
            <Link
              to="scripts"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <Button color="inherit" variant="outlined" sx={{ mr: "20px" }}>
                Scripts list
              </Button>
            </Link>
            <Link
              to="create"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <Button color="inherit" variant="outlined" sx={{ mr: "20px" }}>
                Add new script
              </Button>
            </Link>
            <Link
              to="history"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <Button color="inherit" variant="outlined" sx={{ mr: "20px" }}>
                Execution history
              </Button>
            </Link>
          </Toolbar>
        </AppBar>
        <Outlet />
      </div>
    );
  }
}

export default PageWrapper;
