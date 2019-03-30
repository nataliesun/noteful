import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './Folder.css';

class Folder extends Component {
    render() {
        return (
            <NavLink activeClassName="active" to={`/folder/${this.props.id}`}>
                <div className="Folder">
                    
                        {this.props.name}
                    
                </div>
            </NavLink>
        );
    }
}

export default Folder;