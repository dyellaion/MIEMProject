import { Card, CardContent, CardMedia, Grid, Typography, Chip, CardActions, Button } from "@mui/material";
import { minWidth } from "@mui/system";
import React from "react";
import { Script } from "../../types/response";

const RUBY: string =
  "https://media.geeksforgeeks.org/wp-content/uploads/20190925171314/ruby2.png";
const PYTHON: string =
  "https://media.geeksforgeeks.org/wp-content/cdn-uploads/20200711122552/Python-Programming-Language.png";
const C: string =
  "https://media.geeksforgeeks.org/wp-content/cdn-uploads/Clanguage-1024x341.png";

type CardProps = {
  data: Script;
};

class ScriptCard extends React.Component<CardProps> {
  render(): React.ReactNode {
    const URL =
      this.props.data.lang === "python"
        ? PYTHON
        : this.props.data.lang === "c"
        ? C
        : RUBY;
    return (
      <Card sx={{ width: "350px", m: "5px" }}>
        <CardMedia component="img" height="140" image={URL} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {this.props.data.scriptName}  
          </Typography>
          <Typography gutterBottom variant="h6" component="div">
            <Chip label="Path" variant="filled" color="info" sx={{mr: "5px"}}/>
            <Chip label={this.props.data.path} variant="outlined"/>
          </Typography>
          <Typography gutterBottom variant="h6" component="div">
            <Chip label="Language" variant="filled" color="info" sx={{mr: "5px"}}/>
            <Chip label={this.props.data.lang} variant="outlined"/>
          </Typography>
        </CardContent>
        <CardActions>
          <Button>Edit script</Button>
        </CardActions>
      </Card>
    );
  }
}

export default ScriptCard;
