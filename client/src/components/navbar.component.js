import React, {Component} from 'react';
import {Link} from 'react-router-dom';

export default class Navbar extends Component {

    render(){
        return(
            <nav className="navbar navbar-dark navbar-expand-lg" style={{backgroundColor: '#111E6C' }}>
                <div className="navbar-collapse">
                    <ul className="navbar-nav mr-auto">
                        <li className="navbar-item">
                            <Link to="/api/aboutme" className="nav-link">O mne</Link>
                        </li>
                        <li className="navbar-item">
                            <Link to="/api/prolog" className="nav-link">Prolog</Link>
                        </li>
                        <li className="navbar-item">
                            <Link to="/api/articles" className="nav-link">Zoznam článkov</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}