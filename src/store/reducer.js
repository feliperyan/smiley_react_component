import Immutable from 'seamless-immutable';
import {SEND_TEXT, RECEIVED_RESPONSE, FAILED_FETCH } from './actions';


const initialState = Immutable(
    {
        polarity: 0.0,
        certainty: 0.0,
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

export function getStatus(state){
    return state.status;
}