import { makeStyles } from "@material-ui/core";

export default makeStyles({
    NotesList:{
         display:'grid',
         gridGap:'1rem',
         gridTemplateColumns:'repeat(auto-fit, minmax(250px, 1fr))'
    }
})