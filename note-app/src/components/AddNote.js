import { useState } from "react";

const AddNote = ({ handleAddNote }) => {
    const [noteText, setNotetext] = useState('');
    const characterLimit = 250;

    const handleChange = (event) => {
        if (characterLimit - event.target.value.length >= 0) {
            setNotetext(event.target.value);
        }
    };

    const handleSaveClick = () => {
        if (noteText.trim().length > 0) {
            handleAddNote(noteText);
            setNotetext('');
        }

    };


    return (
        <div className="note new">
            <textarea
                rows='8'
                cols='10'
                placeholder="Write your desire..."
                value={noteText}
                onChange={handleChange}
            ></textarea>
            <div className="note-footer">
                <small>{characterLimit - noteText.length} remaining</small>
                <button className="save" onClick={handleSaveClick}>Save</button>
            </div>
        </div>

    );
};


export default AddNote;