import React from "react";
import NotesItem from "./NotesItem";
import NotesItem2 from "./NotesItem2";
import { getInitialData, showFormattedDate } from "../utils/index";
import NotesInput from "./NotesInput";

class NotesApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            notes: getInitialData(),
            dates: showFormattedDate(),
        }

        this.onAddNoteHandler = this.onAddNoteHandler.bind(this);
        this.onDeleteHandler = this.onDeleteHandler.bind(this);
        this.onArchiveHandler = this.onArchiveHandler.bind(this);
        this.onUnArchiveHandler = this.onUnArchiveHandler.bind(this);
    }

    onDeleteHandler(id) {
        const notes = this.state.notes.filter(note => note.id !== id);
        this.setState({ notes });
    }
    
    onArchiveHandler(id) {
        const data = this.state.notes;
        const newData = data.findIndex(note => note.id === id);
        data[newData].archived = true;
        this.setState((prevState) => {
            return{
                ...prevState,
                notes: data
            }
        });
        console.log(data);
    }

    onUnArchiveHandler(id) {
        const data = this.state.notes;
        const newData = data.findIndex(note => note.id === id);
        data[newData].archived = false;
        this.setState((prevState) => {
            return{
                ...prevState,
                notes: data
            }
        });
        console.log(data);
    }

    onAddNoteHandler({title, body}){
        this.setState((prevState) => {
            const current = new Date();
            return{
                notes: [
                    ...prevState.notes,
                    {
                        id: +new Date(),
                        title,
                        body,
                        createdAt: current.toISOString(),
                        archived: false,
                    }
                ]
            }
        })
    }

    render(){
        return (
            <div className="note-app__body">
                <h1 className="note-app__header">Aplikasi Notes</h1>
                <h2 className="note-input__title">Tambah Note</h2>
                <NotesInput addNote={this.onAddNoteHandler} />
                <h1>Catatan Aktif</h1>
                <NotesItem notes={this.state.notes} dates={this.state.dates} onDelete={this.onDeleteHandler} onClick={this.onArchiveHandler}/>
                <h1>Catatan Archive</h1>
                <NotesItem2 notes={this.state.notes} dates={this.state.dates} onDelete={this.onDeleteHandler} onUnArchive={this.onUnArchiveHandler} />
            </div>
        );
    }
}


// function NotesApp() {
//     const notes = getInitialData();
//     const dates = showFormattedDate();
    
//     return (
//       <div className="note-app__body">
//         <h1>Catatan Aktif</h1>
//         <NotesItem notes={notes} dates={dates} />
//       </div>
//     );
// }

export default NotesApp;