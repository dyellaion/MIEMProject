import {
  Container,
  List,
  Grid,
  Typography,
} from "@mui/material";
import axios, { AxiosError, AxiosResponse } from "axios";
import React from "react";
import { History } from "../../types/response";
import HistoryItem from "./HistoryItem";

type HistoryState = {
  scripts: History[],
}

const sampleHistory: History[] = [
  {
    id: 0,
    scriptName: "Script1",
    date: "Date"
  },
  {
    id: 1,
    scriptName: "Script2",
    date: "New date"
  },
]

class HistoryPage extends React.Component<{}, HistoryState> {
  constructor(props: {}) {
    super(props);

    this.state = {
      scripts: []
    }
  }

  componentDidMount() {
    axios.get("http://localhost:5000/ScriptsRunning")
      .then((res: AxiosResponse) => {
        const scripts = res.data;
        this.setState(scripts);
      })
      .catch((e: AxiosError) => {
        console.error(e.name);
      })
  }

  render(): React.ReactNode {
    return (
      <Container>
        <Grid item xs={12} md={6}>
          <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
            Scripts execution history
          </Typography>
          <List>
            {this.state.scripts.map((item) => {
              return <HistoryItem id={item.id} primary={item.scriptName} secondary={item.date}/>;
            })}
          </List>
        </Grid>
      </Container>
    );
  }
}

export default HistoryPage;
