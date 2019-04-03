import React, { Component } from 'react';
import SideBar from '../SideBar/SideBar';
import NoteList from '../NoteList/NoteList';

class MainPage extends Component {
    render() {
        return (
            <div className="MainPage">
                <main>
                    <SideBar/>
                    <NoteList/>
                </main>
            </div>
        );
    }
}

export default MainPage;