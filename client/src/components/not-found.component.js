import React, {Component} from 'react';

export default class NotFound extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
				<div>
					<h3 align="Center" style={{backgroundColor: "#00908f", padding: "10px" , marginBottom: "0px"}}>
						Je nám ľúto, že táto stránka ešte neexistuje.</h3>
				</div>
		)
	}
}