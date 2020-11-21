import React, {Component} from 'react';
import axios from 'axios';
import parse from 'html-react-parser';
import Button from "react-bootstrap/Button";
import globalV from "./global-variables";
import Grid from "@material-ui/core/Grid";

function LeftButton(props) {
    if (props.sortOrder) {
        return <Button href={'/api/articles/' + props.prevId} style={{minWidth: "100px"}}>Previous</Button>;
    } else {
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
        if (this.props.match.params.id) {
            axios.get(globalV.DATABASE_URL + '/articles/' + this.props.match.params.id)
            .then(response => {
                this.setState({
                    name: response.data.name,
                    content: response.data.content,
                    sortOrder: response.data.sortOrder,
                    date: response.data.date
                });
                this.setPrevAndNextIds(this.state.sortOrder)
            }).catch(error => {
                console.log(error);
            });
        } else {
            axios.get(globalV.DATABASE_URL + '/articles/sortorder/' + 0)
            .then(response => {
                this.setState({
                    name: response.data[0].name,
                    content: response.data[0].content,
                    sortOrder: response.data[0].sortOrder,
                    date: response.data[0].date
                });
                this.setPrevAndNextIds(0)
            }).catch(error => {
                console.log(error);
            });
        }

    }

    setPrevAndNextIds(sortOrderId) {
        axios.get(globalV.DATABASE_URL + '/articles/sortorder/' + (sortOrderId + 1))
        .then(response => {
            this.setState({nextId: response.data[0]._id})
        }).catch(error => {
            console.log(error);
        });

        axios.get(globalV.DATABASE_URL + '/articles/sortorder/' + (sortOrderId - 1))
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
                    <Grid container justify="center">
                        <div>
                            {this.state.date.toString().substring(0, 10)}
                        </div>
                        <Grid container
                              direction="row"
                              justify="center"
                              alignItems="center">
                            <Grid>
                                <LeftButton sortOrder={this.state.sortOrder} prevId={this.state.prevId}/>
                            </Grid>
                            <Grid>
                                <Button href={'/api/articles/' + this.state.nextId} style={{minWidth: "100px"}}
                                >Next</Button>
                            </Grid>
                        </Grid>
                    </Grid>
                </div>
            </div>
        )
    }
}