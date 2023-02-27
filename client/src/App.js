import NotesList from './components/NotesFolder/NotesList';
import useStyles from './styles';
function App() {
  const classes=useStyles();
  return (
    <div className={classes.container} >
       <NotesList/>
    </div>
  );
}

export default App;
