import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import './SideBar.css';
import Folder from '../Folder/Folder';


class SideBar extends Component {
    render() {
        const folders = this.props.folders.map(folder => {
            return <Folder key={folder.id} {...folder} />
        })
  
        return (
            <div className="SideBar">
                {folders}
                {!this.props.folders && <button type='button'>Add folder</button>}
                {
                    !!this.props.folderName 
                        && <button 
                                type='button'
                                onClick={this.props.history.goBack}
                            >
                                Go back
                        </button>
                }
                {!!this.props.folderName && <div>{this.props.folderName}</div>}
            </div>
        );
    }
}

SideBar.defaultProps = {
    folders: [],
    folderName: ''
}

export default withRouter(SideBar);