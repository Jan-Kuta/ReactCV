import {FETCH_CV} from '../actions/index';

export default function(state = null, action) {
    switch (action.type) {
      case FETCH_CV:
        return action.payload.data;
      default:
        return state;
    }
  }