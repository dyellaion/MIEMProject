import React, { ChangeEvent, FormEvent } from "react";
import { Script } from "../../types/response";

class CreationPage extends React.Component<{}, Script> {

  state: Script = {
    id: 0,
    scriptName: "",
    path: "",
    lang: "",
  }

  submitHandler(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (this.state.scriptName === "" || this.state.path === "") {
      console.log("Something is empty");
    }
  }

  inputHandler(e: ChangeEvent<HTMLInputElement>) {
    switch(e.target.name) {
      case "name":
        break;
      case "path":
        console.log("Path changed!");
        break;
      case "lang":
        console.log("Path changed");
        break;
    }
  }

  render(): React.ReactNode {
      return(
        <form onSubmit={(e) => this.submitHandler(e)}>
          <input type="submit" value="Add script"/>
        </form>
      )
  }
}
