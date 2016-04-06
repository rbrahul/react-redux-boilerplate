import React, { Component } from 'react';
import { connect ,Provider} from 'react-redux';
import { render } from 'react-dom';
import NumericArea from './reduxarea/components/number.js';
import {increment,decrement} from './reduxarea/actions/numericOperation.js'
import store from './reduxarea/stores/appStore.js'
 
class App extends Component {

constructor(){
super(...arguments);


}

render(){
	console.log(this.props.score)
return (
	<NumericArea score={this.props.score} inc={this.props.inc} dec={this.props.dec}/>
 
);
}
}
function connectStore(store){
		return {
			score: store.number,
		};

}

function connectDispatch(dispatch){
		return {
			inc : () => {

				dispatch(increment(1))
			},
			dec:()=>{
				dispatch(decrement());
			}
		}
}

App = connect(connectStore, connectDispatch)(App);

const Root = () => {
return (
	<Provider store={store}>
	<App />
	</Provider>
)

}

render(<Root />, document.getElementById('app'));