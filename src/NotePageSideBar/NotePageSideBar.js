import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import './NotePageSideBar.css';
import Folder from '../Folder/Folder';
import NotefulContext from '../NotefulContext';


class NotePageSideBar extends Component {
    static contextType = NotefulContext;

  
    render() {
        const { folders, notes } = this.context.store;
        const currentNote = notes.find(note => `/note/${note.id}` === this.props.history.location.pathname);
        console.log(currentNote);
        const folderName = folders.find(folder => folder.id === currentNote.folderId).name
  
        return (
            <div className="NotePageSideBar">
               <button type='button'>Go Back</button>
               <h2>{folderName}</h2>
            </div>
        );
    }
}


export default withRouter(NotePageSideBar);