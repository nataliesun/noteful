import React, { Component } from 'react';
import './Note.css';
import { Link } from 'react-router-dom';
import moment from 'moment';

class Note extends Component {
    render() {
        return (
            <Link to={`/note/${this.props.id}`} >
                <div className="Note">
                    <h2>{this.props.name}</h2>
                    <div className="note-info">
                        Date modified {moment(this.props.modified).format('Do MMM YYYY, h:mm a')}
                        <button 
                            type="button"
                        >Delete Note</button>
                    </div>
                </div>
            </Link>
        );
    }
}

export default Note;