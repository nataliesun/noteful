import React, { Component } from 'react';
import './FolderPage.css';

import SideBar from '../SideBar/SideBar';
import NoteList from '../NoteList/NoteList';


class FolderPage extends Component {

    render() {
        const notes = this.props.notes.filter(n => {
            return (n.folderId === this.props.path)
        });
        
        return (
            <div className="FolderPage">
                <SideBar folders={this.props.folders}/>
                <NoteList notes={notes} />
            </div>
        );
    }
}

export default FolderPage;