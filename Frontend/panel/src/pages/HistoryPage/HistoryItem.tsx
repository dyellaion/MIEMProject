import React from "react";
import { Folder } from "@mui/icons-material";
import {
  ListItemText,
  ListItem,
  ListItemIcon,
} from "@mui/material";

type ItemProps = {
  id: number;
  primary: string;
  secondary: string;
}

class HistoryItem extends React.Component<ItemProps> {
  render(): React.ReactNode {
    return (
      <ListItem key={this.props.id}>
        <ListItemIcon>
          <Folder />
        </ListItemIcon>
        <ListItemText primary={this.props.primary} secondary={this.props.secondary} />
      </ListItem>
    );
  }
}

export default HistoryItem;
