import Immutable from 'seamless-immutable';
import {SEND_TEXT, RECEIVED_RESPONSE, FAILED_FETCH } from './actions';

// Shape of the state:
//  {
//      polarity: 0.5,
//      certainty: 0.3,
//      status: "done" or "fetching"
//  }

const initialState = Immutable(
    {
        polarity: 0.5,
        certainty: 0.5,
        status: "done"
    }
)

const scores = (state = initialState, action = {}) => {
    switch (action.type){
        case SEND_TEXT:
            return state.merge({status: "fetching"});
        case FAILED_FETCH:
            return state.merge({status: "failed"});
        case RECEIVED_RESPONSE:
            return state.merge({ 
                polarity: action.polarity,
                certainty: action.certainty,
                status: "done"
            });            
        default:
            return state;
    }
}

export default scores

// Selectors:

export function sentimentScoreSelector(state){
    return {
        pola: state.polarity,
        cert: state.certainty
    }
}