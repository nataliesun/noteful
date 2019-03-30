import React, { Component } from 'react';
import './NoteList.css';
import Note from '../Note/Note';

class NoteList extends Component {
    render() {
        const notes = this.props.notes.map(note => <Note key={note.id} {...note} />)
        return (
            <div className="NoteList">
                {notes}
                <button type='button'>Add note</button>
            </div>
        );
    }
}

export default NoteList;