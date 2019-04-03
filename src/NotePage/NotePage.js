import React, { Component } from 'react';
import Note from '../Note/Note';
import './NotePage.css'
import NotePageSideBar from '../NotePageSideBar/NotePageSideBar';


class NotePage extends Component {
    render() {

        return (
            <div className="NotePage">
                <NotePageSideBar/>
                <div className="active-note">
                    <Note/>
                </div>
            </div>
        );
    }
}

export default NotePage;