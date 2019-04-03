import React, { Component } from 'react';
import './NoteList.css';
import Note from '../Note/Note';
import NotefulContext from '../NotefulContext';
import { withRouter } from 'react-router-dom'

class NoteList extends Component {
    static contextType = NotefulContext;
    render() {
        // const re = new RegExp("\s\S*")
        const { notes } = this.context.store;
        const { pathname } = this.props.history.location
        const allNotes = pathname === '/' 
            ? notes.map(note => <Note key={note.id} {...note} />)
            : notes.filter(note => `/folder/${note.folderId}` === pathname)
            .map(note => <Note key={note.id} {...note}/>)
        // const oneNote = pathname === `/note/${re}` ? <p>'it work'</p> : <p>'NOPE!'</p>
        return (
            <div className="NoteList">
                {/* {oneNote} */}
                {allNotes}
                <button type='button'>Add note</button>
            </div>
        );
    }
}

export default withRouter(NoteList);