import React from 'react';
import Note from './Note/Note';
import useStyles from './styles';
import {useSelector} from 'react-redux';

function NotesList() {
  const classes=useStyles();
  const noteReducers=useSelector((state)=>state.noteReducers);
  console.log(noteReducers);
  return (
    <div className={classes.NotesList}>
        <Note/>
        <Note/>
        <Note/>
    </div>
  )
}

export default NotesList