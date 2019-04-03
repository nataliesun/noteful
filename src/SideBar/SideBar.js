import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import './SideBar.css';
import Folder from '../Folder/Folder';
import NotefulContext from '../NotefulContext';


class SideBar extends Component {
    static contextType = NotefulContext;

  
    render() {
        const { folders } = this.context.store;
        const allFolders = folders.map(folder => {
            return <Folder key={folder.id} {...folder} />
        })
  
        return (
            <div className="SideBar">
                {allFolders}
               <button type='button'>Add folder</button>
            </div>
        );
    }
}


export default withRouter(SideBar);