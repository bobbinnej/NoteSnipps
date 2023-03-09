import * as api from '../api';

//action creators
export const getNotes = () => async (dispatch) =>{
    try {
       const data = await api.fetchNotes();

       dispatch({type:'FETCH_ALL_NOTES', payload:data});
    } catch (error) {
        console.log(error.message);
    }
}