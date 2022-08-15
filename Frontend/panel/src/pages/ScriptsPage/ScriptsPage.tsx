import React from "react";
import ScriptCard from "../../layout/ScriptCard/ScriptCard";
import { Script } from "../../types/response";

type CreationPageState = {
  scripts: Script[];
};

const response = [
  {
    id: 4,
    scriptName: "Sample script",
    path: "string",
    lang: "py"
  },
];

class ScriptsPage extends React.Component {
  render(): React.ReactNode {
    return <div>
      {
        response.map(item => {
          return <ScriptCard data={item}/>
        }) 
      }
    </div>;
  }
}

export default ScriptsPage;
