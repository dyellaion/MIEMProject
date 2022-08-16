import { Container, Grid } from "@mui/material";
import React from "react";
import ScriptCard from "../../layout/ScriptCard/ScriptCard";

import { Script } from "../../types/response";
import styles from "./ScriptsPage.module.css";

type CreationPageState = {
  scripts: Script[];
};

const response = [
  {
    id: 0,
    scriptName: "SQL Map",
    path: "home/usr/SQL/SQLmap.py",
    lang: "python",
  },
  {
    id: 1,
    scriptName: "NTDp injection",
    path: "home/usr/NTDp/Inj1.rb",
    lang: "ruby",
  },
  {
    id: 2,
    scriptName: "Wordpress escalation",
    path: "home/usr/Wordpress/WPEsc.py",
    lang: "python",
  },
  {
    id: 3,
    scriptName: "Wordpress xss",
    path: "home/usr/Wordpress/XSS.c",
    lang: "c",
  }
];

class ScriptsPage extends React.Component {
  render(): React.ReactNode {
    return (
      <Container style={{display: "flex"}} className={styles.scriptPageLayout}>
        {response.map((item) => {
          return <ScriptCard key={item.id} data={item} />;
        })}
      </Container>
    );
  }
}

export default ScriptsPage;
