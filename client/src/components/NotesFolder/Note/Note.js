import React from "react";
import useStyles from "./styles";
import {
  Card,
  CardContent,
  CardActions,
  Typography,
  Button,
} from "@material-ui/core";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
function Note() {
  const classes = useStyles();
  return (
    <Card className={classes.Note}>
      <CardContent className={classes.Message}>
        <Typography variant="h6">This is my first note</Typography>
      </CardContent>
      <CardActions className={classes.Footer}>
        <Typography variant="h6">12/02/2023</Typography>
        <div>
          <Button size="small"><DeleteIcon fontSize="small" /></Button>
           <Button size="small"><EditIcon fontSize="small" /></Button>
        
        </div>
       
      </CardActions>
    </Card>
  );
}

export default Note;
