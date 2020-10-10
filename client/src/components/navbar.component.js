import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Nav from "react-bootstrap/Nav";

export default class Navbar extends Component {

    render(){
        return(
            <nav className="navbar navbar-dark navbar-expand-lg" style={{backgroundColor: '#111E6C' }}>
                <div className="navbar-collapse">
                    <ul className="navbar-nav mr-auto">
                        <li className="navbar-item">
                            <Link to="/" className="nav-link">Exercises</Link>
                        </li>
                        <li className="navbar-item">
                            <Link to="/create" className="nav-link">Create Exercise log</Link>
                        </li>
                        <li className="navbar-item">
                            <Link to="/user" className="nav-link">Create User</Link>
                        </li>
                        <li className="navbar-item">
                            <Link to="/articles" className="nav-link">List of Articles</Link>
                        </li>
                    </ul>
                </div>

            </nav>
        )
    }
}