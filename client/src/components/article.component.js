import React, {Component} from 'react';
import axios from 'axios';
import parse from 'html-react-parser';
import Button from "react-bootstrap/Button";
import {Link} from 'react-router-dom'


function LeftButton(props) {
    if(props.sortOrder){ // first article (prolog) must have sortOrder === 0
        return <Button href={'/articles/' + props.prevId} style={{marginRight: "20px"}}>Previous</Button>;
    }else{
        return "";
    }
}

export default class Article extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            content: '',
            sortOrder: 0,
            date: new Date(),
            nextId: "",
            prevId: ""
        }
    }

    componentDidMount() {
        axios.get('http://localhost:5000/articles/' + this.props.match.params.id)
            .then(response => {
                this.setState({
                    name: response.data.name,
                    content: response.data.content,
                    sortOrder: response.data.sortOrder,
                    date: response.data.date,
                });
                this.setPrevAndNextIds(this.state.sortOrder)
            }).catch(error => {
            console.log(error);
        });

    }

    setPrevAndNextIds(sortOrderId) {
        axios.get('http://localhost:5000/articles/sortorder/' + (sortOrderId + 1))
            .then(response => {
                this.setState({nextId: response.data[0]._id})
            }).catch(error => {
            console.log(error);
        });

        axios.get('http://localhost:5000/articles/sortorder/' + (sortOrderId - 1))
            .then(response => {
                this.setState({prevId: response.data[0]._id})
            }).catch(error => {
            console.log(error);
        });
    }

    render() {
        return (
            <div style={{backgroundColor: "#00908f"}}>
                <div style={{padding: "10px"}}>
                    <div className="text-center">
                        <h1>{this.state.name}</h1>
                    </div>
                    <div>
                        {parse(this.state.content)}
                    </div>
                    <div className="text-center" style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}  >
                        <LeftButton sortOrder={this.state.sortOrder} prevId={this.state.prevId}/>
                        <div >
                            {this.state.date.toString().substring(0, 10)}
                        </div>
                        <Button href={'/articles/' + this.state.nextId} style={{marginLeft: "20px"}}>Next</Button>
                    </div>
                </div>
            </div>
        )
    }
}