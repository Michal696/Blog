import React, {Component} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom'
import globalV from "./global-variables";

const ArticleLink = props => (
    <div style={{backgroundColor: props.backgroundColor}}>
        <div>
            {<Link to={"/api/articles/" + props.article._id}
                   className="nav-link text-black-50">{props.article.name}</Link>}
        </div>

        {/*<div>*/}
        {/*    {props.article.content}*/}
        {/*</div>*/}

        {/*<div>*/}
        {/*    {props.article.date}*/}
        {/*</div>*/}
    </div>

);

export default class Articles extends Component {
    constructor(props) {
        super(props);
        this.state = {articles: []}
    }

    componentDidMount() {
        axios.get(globalV.DATABASE_URL + '/articles/')
        .then(response => {
            this.setState({
                articles: response.data
            })
        }).catch(error => {
            console.log(error);
        });
    }

    getArticles() {
        var i = 0;
        return this.state.articles.map(article => {
            i++;
            var backgroundColor;
            if (i % 2) {
                backgroundColor = "#008080";
            } else {
                backgroundColor = "#20B2AA";
            }
            return <ArticleLink article={article} backgroundColor={backgroundColor} key={article._id}/>
        })
    }

    render() {
        return (
            <div style={{backgroundColor: "#708090"}}>
                <div style={{paddingLeft: "10px"}}>
                    <h3>Articles list:</h3>
                </div>
                {this.getArticles()}
            </div>
        )
    }
}