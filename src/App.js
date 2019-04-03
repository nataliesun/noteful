import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './dummy-store';
import NotefulContext from './NotefulContext'

import MainPage from './MainPage/MainPage';
import FolderPage from './FolderPage/FolderPage'
import './App.css';

// import SideBar from './SideBar/SideBar';
// import NoteList from './NoteList/NoteList';
import Header from './Header/Header';
import dummyStore from './dummy-store';
import NotePage from './NotePage/NotePage';

class App extends Component {
  static contextType = NotefulContext;
  state = {store:this.context.store}


  render() {

    return (
      <div className="NotefulApp">
        <Header />
        <main>
          <Route exact path ='/' 
          component={MainPage} />
          <Route 
            path='/folder/:folderId'
            component={FolderPage}
          />
          <Route 
            path='/note/:noteId'
            component={NotePage}
          /> 
        </main>
      </div>
    );
  }
}

export default App;
