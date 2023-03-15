import React, {useEffect}  from 'react';
import NoteInput from './components/InputFolder/NoteInput';
import NotesList from './components/NotesFolder/NotesList';
import useStyles from './styles';
import { useDispatch } from 'react-redux';
import {getNotes} from './actions/noteActions';
function App() {
  const classes=useStyles();
  const dispatch =useDispatch();

  useEffect(()=>{
      dispatch(getNotes());
  },[dispatch]);
  return (
    <div className={classes.container} >
      <NoteInput/>
       <NotesList/>
    </div>
  );
}

export default App;
