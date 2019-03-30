import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './dummy-store';

import MainPage from './MainPage/MainPage';
import FolderPage from './FolderPage/FolderPage'
import './App.css';

// import SideBar from './SideBar/SideBar';
// import NoteList from './NoteList/NoteList';
import Header from './Header/Header';
import dummyStore from './dummy-store';
import NotePage from './NotePage/NotePage';

class App extends Component {
  state = dummyStore


  render() {
    const { folders, notes } = this.state;

    return (
      <div className="NotefulApp">
        <Header />
        <main>
          <Route exact path ='/' render={() => <MainPage data={this.state} />} />
          <Route 
            path='/folder/:folderId'
            render={(routerProps) => <FolderPage folders={folders} notes={notes} path={routerProps.match.params.folderId}/>}
          />
          <Route 
            path='/note/:noteId'
            render={(routerProps) => {
              const note = notes.find(n =>
                  n.id === routerProps.match.params.noteId)
              const folder = folders.find(f => f.id === note.folderId)
             return  <NotePage 
                note={note}
                folder={folder}
                path={routerProps.match.params.noteId}
              />
              }
            }
          /> 
        </main>
      </div>
    );
  }
}

export default App;
