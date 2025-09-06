import mongoose from "mongoose";

const noteSchema = new mongoose.Schema({
    subject: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    fileType: {
        type: String,
        required: false
    },
    fileName: {
        type: String,
        required: false
    },
    filePath: {
        type: String,
        required: false
    },
    fileSize: {
        type: Number,
        required: false
    }
},
{ timestamps: true} //createdAt and updatedAt
);

const Note = mongoose.model("Note", noteSchema);

export default Note;