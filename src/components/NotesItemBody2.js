import React from "react";
import DeleteButton from "./DeleteButton";
import UnArchiveButton from "./UnArchiveButton";

function NotesItemBody2({id, title, body, createdAt, archived, onDelete, onUnArchive}){
    if(archived === true){
        return (
            <div className="note-item">
                <div className="note-item__content">
                    <h2 className="note-item__title">{title}</h2>
                    <p className="note-item__date">{createdAt}</p>
                    <p className="note-item__body">{body}</p>
                </div>
                <div className="note-item__action">
                    <DeleteButton id={id} onDelete={onDelete} />
                    <UnArchiveButton id={id} onUnArchive={onUnArchive} />
                </div>
            </div>
        );
    }
}

export default NotesItemBody2;