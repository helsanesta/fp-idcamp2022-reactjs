import React from "react";
import NotesItemBody from "./NotesItemBody";

function NotesItem({ notes, onDelete, onClick }){
    return(
        <div className="notes-list">
            {
                notes.filter((note) => note.archived===false).length > 0 ? (notes.map((note) => (
                    <NotesItemBody key={note.id} id={note.id}
                    onDelete={onDelete} onClick={onClick} {...note}/>
                ))) :
                (
                <p className="note-list__empty-message">Tidak Ada Catatan</p>
                )
                
            }

        </div>
    );
}

export default NotesItem;