import React from "react"
import NotesItemBody2 from "./NotesItemBody2";

function NotesItem2({ notes, onDelete, onUnArchive }){
    return(
        <div className="notes-list">
            {
                notes.filter((note) => note.archived===true).length > 0 ? (notes.map((note) => (
                    <NotesItemBody2 key={note.id} id={note.id}
                    onDelete={onDelete} onUnArchive={onUnArchive} {...note}/>
                ))) :
                (
                <p className="note-list__empty-message">Tidak Ada Catatan</p>
                )
                
            }

        </div>
    );
}

export default NotesItem2;