import React, {Component} from 'react';
import {Link} from 'react-router-dom';

export default class Logo extends Component {

    render(){
        return(
            // <nav className="navbar navbar-dark navbar-expand-lg" style={{backgroundColor: '#000000'}}>
            <div className="text-center" style={{backgroundColor: '#000000'}}>
                <Link to="/" className="navbar-brand justify-content-center">Nazov blogu</Link>
            </div>
            // </nav>
        )
    }
}