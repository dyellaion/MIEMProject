import {
  Chip,
  Container,
  Button,
  Typography,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  SelectChangeEvent,
} from "@mui/material";
import axios, { AxiosError, AxiosResponse } from "axios";
import React, { ChangeEvent } from "react";
import { Script } from "../../types/response";

import styles from "./CreationPage.module.css";

class CreationPage extends React.Component<{}, Script> {
  state: Script = {
    id: 0,
    scriptName: "",
    path: "",
    lang: "",
  };

  submitHandler() {
    if (
      this.state.scriptName === "" ||
      this.state.path === "" ||
      this.state.lang === ""
    ) {
      alert("Something is empty");
    } else {
      alert(
        `${this.state.scriptName} : ${this.state.path} : ${this.state.lang}`
      );
const customConfig = {
    headers: {
    "Access-Control-Allow-Origin": "*",
    'Content-Type': 'application/json'
    }
};
      axios
        .post("http://localhost:5000/Scripts", JSON.stringify(this.state), customConfig)
          .then((res : AxiosResponse) => {
            console.log(res.status);
            console.log(res.data);
          })
          .catch((e :AxiosError) => {
            console.error(e.name);
          })
    }
  }

  changeHandler(e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) {
    switch (e.target.name) {
      case "name":
        console.log(this.state.scriptName);
        this.setState({
          scriptName: e.target.value,
        });
        break;
      case "path":
        this.setState({
          path: e.target.value,
        });
        break;
      case "lang":
        console.log(e.target.value);
        break;
    }
  }

  selectHandler(e: SelectChangeEvent<string>) {
    console.log(e.target.value);
    this.setState({
      lang: e.target.value,
    });
  }

  render(): React.ReactNode {
    return (
      <Container
        sx={{ textAlign: "center", mt: "25px" }}
        className={styles.containerLayout}
      >
        <Typography variant="h5" component="div" className={styles.typography}>
          Add new script
        </Typography>
        <form className={styles.formLayout}>
          <label className={styles.labelLayout}>
            <Chip label="Script name" color="info" />
            <TextField
              name="name"
              id="standard-basic"
              label="Script name"
              variant="standard"
              value={this.state.scriptName}
              onChange={(e) => this.changeHandler(e)}
            />
          </label>
          <label className={styles.labelLayout}>
            <Chip label="Script path" color="info" />
            <TextField
              name="path"
              id="standard-basic"
              label="Script path"
              variant="standard"
              value={this.state.path}
              onChange={(e) => this.changeHandler(e)}
            />
          </label>
          <label className={styles.labelLayout}>
            <Chip label="File extension" color="info" />
            <FormControl fullWidth sx={{ mt: "20px" }}>
              <InputLabel id="lang-label">Ext</InputLabel>
              <Select
                labelId="lang-label"
                name="lang"
                value={this.state.lang}
                label="Ext"
                onChange={(e) => this.selectHandler(e)}
              >
                <MenuItem value={"py"}>Python</MenuItem>
                <MenuItem value={"rb"}>Ruby</MenuItem>
                <MenuItem value={"c"}>C</MenuItem>
              </Select>
            </FormControl>
          </label>
          <Button
            variant="contained"
            sx={{ m: "10px" }}
            onClick={() => this.submitHandler()}
          >
            Save
          </Button>
        </form>
      </Container>
    );
  }
}

export default CreationPage;
