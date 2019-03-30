import React, { Component } from 'react';
import SideBar from '../SideBar/SideBar';
import NoteList from '../NoteList/NoteList';

class MainPage extends Component {
    render() {
        const { folders, notes } = this.props.data;
        return (
            <div className="MainPage">
                <main>
                    <SideBar folders={folders} />
                    <NoteList notes={notes} />
                </main>
            </div>
        );
    }
}

export default MainPage;