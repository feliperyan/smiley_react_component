import Immutable from 'seamless-immutable';
import { SCORE_FETCHED, SEND_TEXT } from './actions';

// Shape of the state:
//  {
//      polarity: 0.5,
//      certainty: 0.3,
//      status: "done" or "fetching"
//  }

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
            if (action.text.includes('happy')){
                return state.merge({
                    polarity: 1,
                    certainty: 1
                })
            }
            else if (action.text.includes('sad')) {
                return state.merge({
                    polarity: -1,
                    certainty: 1
                })
            }
            else {
                return state.merge({
                    polarity: 0,
                    certainty: 0
                })
            }

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