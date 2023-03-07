import NoteData from "../models/snippModel.js";

// get all note snipps
export const getNotes = async(req,res)=>{
   try {
    const notesData= await NoteData.find();

    res.status(200).json(notesData);
   } catch (error) {
    res.status(404).json({message:error.message})
    
   }
}

// add a new note snip
export const createNote=async (req,res)=>{
    const note = req.body;
    const newNote = new NoteData(note);
    try {
       await newNote.save();
       res.status(201).json(newNote);
    } catch (error) {
        res.status(409).json({message: error.message});
    }
}