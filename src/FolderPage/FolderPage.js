import React, { Component } from 'react';
import './FolderPage.css';

import SideBar from '../SideBar/SideBar';
import NoteList from '../NoteList/NoteList';


class FolderPage extends Component {

    render() {      
        return (
            <div className="FolderPage">
                <SideBar/>
                <NoteList/>
            </div>
        );
    }
}

export default FolderPage;