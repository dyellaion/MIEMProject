import React from "react";
import { Script } from "../../types/response";

type CardProps = {
  data: Script
}

class ScriptCard extends React.Component<CardProps> {
  render(): React.ReactNode {
      return (
        <div style={{border: "1px solid black"}}>
          {this.props.data.id}
          <br/>
          {this.props.data.path}
          <br/>
          {this.props.data.scriptName}
          <button onClick={() => alert(this.props.data.id)}>Show script id</button>
        </div>
      )
  }
}

export default ScriptCard;