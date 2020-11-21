import React, {Component} from 'react';
import {Link} from 'react-router-dom';

export default class Footer extends Component {

    render(){
        return(
            <div className="text-center" style={{backgroundColor: '#000000'}}>
                <Link to="/" className="justify-content-center">ⓒ 2020 Michal696 All rights reserved.</Link>
                {/*//todo add link to email section*/}
            </div>
        )
    }
}