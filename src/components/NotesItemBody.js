import React from "react";
import DeleteButton from "./DeleteButton";
import ArchiveButton from "./ArchiveButton";

function NotesItemBody({id, title, body, createdAt, archived, onDelete, onClick}){
    if(archived === false){
        return (
            <div className="note-item">
                <div className="note-item__content">
                    <h2 className="note-item__title">{title}</h2>
                    <p className="note-item__date">{createdAt}</p>
                    <p className="note-item__body">{body}</p>
                </div>
                <div className="note-item__action">
                    <DeleteButton id={id} onDelete={onDelete} />
                    <ArchiveButton id={id} onClick={onClick} />
                </div>
            </div>
        );
    }
}

export default NotesItemBody;