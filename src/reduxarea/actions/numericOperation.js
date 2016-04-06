/* @flow */
import * as type from '../constants/appconstant';

export function increment(value) {
    return {
        type: type.INCREMENT,
        value
    };
}


export function decrement() {
    return {
        type: type.DECREMENT,
    };
}