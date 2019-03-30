import React, { Component } from 'react';
import Note from '../Note/Note';
import './NotePage.css'
import SideBar from '../SideBar/SideBar';

class NotePage extends Component {
    render() {

        return (
            <div className="NotePage">
                <SideBar folderName={this.props.folder.name} />
                <div className="active-note">
                    <Note key={this.props.note.id} {...this.props.note} />
                    <div className="note-description">{this.props.note.content}</div>
                </div>
            </div>
        );
    }
}

export default NotePage;