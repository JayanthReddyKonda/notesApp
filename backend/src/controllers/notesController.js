export const getAllNotes = (req,res)=>{
    res.status(200).send("Note Retrieved")
}

export const createNote = (req,res)=>{
    res.status(201).json({message:"Notes Taken"})
}

export const updateNote = (req,res)=>{
    res.status(200).send("Note Updated ")
}

export const deleteNote = (req,res)=>{
    res.status(200).send("Note Deleted")
}
