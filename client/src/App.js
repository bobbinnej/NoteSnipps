import NoteInput from './components/InputFolder/NoteInput';
import NotesList from './components/NotesFolder/NotesList';
import useStyles from './styles';
function App() {
  const classes=useStyles();
  return (
    <div className={classes.container} >
      <NoteInput/>
       <NotesList/>
    </div>
  );
}

export default App;
