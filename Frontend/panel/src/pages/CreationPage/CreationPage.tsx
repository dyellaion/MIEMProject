import { Badge, Chip, Container, Button } from "@mui/material";
import React, { ChangeEvent, FormEvent } from "react";
import { Script } from "../../types/response";

import styles from "./CreationPage.module.css";

class CreationPage extends React.Component<{}, Script> {
  state: Script = {
    id: 0,
    scriptName: "",
    path: "",
    lang: "",
  };

  submitHandler(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (this.state.scriptName === "" || this.state.path === "") {
      alert("Something is empty");
    }
  }

  changeHandler(e: ChangeEvent<HTMLInputElement>) {
    switch (e.target.name) {
      case "name":
        console.log(e.target.value);
        break;
      case "path":
        console.log(e.target.files?.[0] ?? "No files selected!");
        break;
      case "lang":
        console.log(e.target.value);
        break;
    }
  }

  render(): React.ReactNode {
    return (
      <Container>
        <form onSubmit={(e) => this.submitHandler(e)} className={styles.formLayout}>
          <label className={styles.labelLayout}>
            <Chip label="Script name" variant="filled" color="info" />
            <input type="text" name="name" value="" placeholder="Script maiden name" onChange={(e) => this.changeHandler(e)}/>
          </label>
          <label className={styles.labelLayout}>
            <Chip label="Script path" variant="filled" color="info" />
            <input type="file" name="path" onChange={(e) => this.changeHandler(e)}/>
          </label>
          <Button variant="contained" sx={{ m: "10px" }}>
            Save
          </Button>
        </form>
      </Container>
    );
  }
}

export default CreationPage;