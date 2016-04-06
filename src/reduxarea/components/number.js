import React, {Component} from 'react';
export default class NumberField extends Component{
	constructor(props){
		super(props);
	}

	render(){
		return(
			<div>
			<h1>Current Value: {this.props.score}</h1>
		<div className="btn-group" role="group" aria-label="...">
  <button type="button" className="btn btn-default" onClick={this.props.inc}>Increment</button>
  <button type="button" className="btn btn-default" onClick={this.props.dec}>Decrement</button>
</div>
			</div>);
	}
}