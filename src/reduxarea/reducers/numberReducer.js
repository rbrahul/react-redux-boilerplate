import * as type from '../constants/appconstant';

export function number(state=0,action){
	switch(action.type){
		case type.INCREMENT:
			return  state + 1;
		case type.DECREMENT:
			return state-1;
		default:
			return state;
	}
}

export default number;