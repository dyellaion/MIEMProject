import { Button, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import styles from "./IndexPage.module.css";

class IndexPage extends React.Component {
  render(): React.ReactNode {
    return (
      <div className={styles.layout}>
        <Typography variant="h4" component="div">
          Switch to page
        </Typography>
        <div className={styles.switch}>
          <Link to="scripts" className={styles.nulledLink}>
            <Button variant="contained" sx={{ m: "10px" }}>
              Scripts list
            </Button>
          </Link>
          <Link to="create" className={styles.nulledLink}>
            <Button variant="contained" sx={{ m: "10px" }}>
              Create new script
            </Button>
          </Link>
        </div>
      </div>
    );
  }
}

export default IndexPage;
