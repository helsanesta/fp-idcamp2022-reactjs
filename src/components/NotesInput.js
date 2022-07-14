import React from "react";

class NotesInput extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            title: '',
            body: '',
            charlimit: 50,
        }

        this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
        this.onBodyChangeEventHandler = this.onBodyChangeEventHandler.bind(this);
        this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
    }

    onTitleChangeEventHandler(event){
        this.setState((prevState) => {
            return {
                ...prevState,
                title: event.target.value,
            }
        });
    }

    onBodyChangeEventHandler(event){
        this.setState((prevState) => {
            return {
                ...prevState,
                body: event.target.value,
            }
        });
        if(event.target.value.length===this.state.charlimit){ 
            window.alert("Username shouldn't exceed 50 characters")
        }
    }

    onSubmitEventHandler(event) {
        event.preventDefault();
        this.props.addNote(this.state);
    }

    render(){
        return (
            <form className="note-input" onSubmit={this.onSubmitEventHandler}>
                <div className="note-input__body">
                    <input type="text" placeholder="Judul Catatan" value={this.state.title} onChange={this.onTitleChangeEventHandler}/>
                    <textarea type="text" placeholder="Deskripsi"  value={this.state.body} onChange={this.onBodyChangeEventHandler}/>
                    <p className="note-input__title__char-limit">Remaining Characters = {this.state.charlimit - this.state.body.length}</p>
                    <button type="submit" disabled={this.state.body.length > this.state.charlimit ? true:false}>Buat</button>
                </div>
            </form>
        )
    }
}

export default NotesInput;