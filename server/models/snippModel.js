import mongoose from 'mongoose';

const notesSchema=mongoose.Schema({
    message:String
});

const NoteData=mongoose.model('NoteData', notesSchema);

export default NoteData;