import { Folder } from "@mui/icons-material";
import {
  Container,
  List,
  Grid,
  ListItemText,
  Typography,
  ListItem,
  ListItemIcon,
} from "@mui/material";
import axios from "axios";
import React from "react";
import { History } from "../../types/response";
import HistoryItem from "./HistoryItem";

type HistoryState = {
  scripts: History[],
}

class HistoryPage extends React.Component<{}, HistoryState> {
  componentDidMount() {
    axios.get("localhost:5000/scripts_running")
    .then(res => {
      const scripts = res.data;
      this.setState(scripts);
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
