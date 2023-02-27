import React from 'react';
import Note from './Note/Note';
import useStyles from './styles';

function NotesList() {
  const classes=useStyles();
  return (
    <div className={classes.NotesList}>
        <Note/>
        <Note/>
        <Note/>
    </div>
  )
}

export default NotesList