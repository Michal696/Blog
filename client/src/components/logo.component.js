import React, {Component} from 'react';
import {Link} from 'react-router-dom';

export default class Logo extends Component {

    render(){
        return(
            <div className="text-center" style={{backgroundColor: '#000000'}}>
                <Link to="/" className="navbar-brand justify-content-center" style={{fontSize: '45px'}}>Denník  "demotivovanej" sestry</Link>
            </div>
        )
    }
}