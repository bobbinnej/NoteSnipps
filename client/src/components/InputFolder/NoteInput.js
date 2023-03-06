import React from "react";
import useStyles from './styles';
import { Button } from "@material-ui/core";
import InputBase from "@material-ui/core/InputBase";
import SendIcon from '@mui/icons-material/Send';
function NoteInput() {
  const classes=useStyles();
  return (
    <div className={classes.Container}>
      <InputBase 
        className={classes.Input}
        variant="outlined"
        disableUnderline={false}
        autoFocus
        multiline
        fullWidth
        rows={4}
        
        placeholder="Type to add snippet..."
      ></InputBase>

      <div className={classes.InputFooter} >
        <Button size="small" className={classes.InputButton} variant="none"><SendIcon/></Button>
      </div>
    </div>
  );
}

export default NoteInput;
