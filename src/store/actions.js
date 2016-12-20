import sentimentService from '../services/sentiment';

export const SEND_TEXT = 'SEND_TEXT';
export const RECEIVED_RESPONSE = 'RECEIVED_RESPONSE';
export const FAILED_FETCH = 'FAILED_FETCH';


export function receivedScore(scoresJson){
    return {
        type: RECEIVED_RESPONSE,
        polarity: scoresJson.Response[0],
        certainty: scoresJson.Response[1]
    }
}

export function sendText(){
    return {
        type: SEND_TEXT,
    }
}


export function failedFetch(text){
    return {
        type: FAILED_FETCH,
    }
}


export function fetchScore(textBody) {
    
    return async(dispatch) => {
        dispatch(sendText());
        try {
            const scores = await sentimentService.getScores(textBody);
            console.log(scores);
            dispatch(receivedScore(scores));
            } 
            catch (error) {
                console.error(error);
                dispatch(failedFetch);
            }
    };

}
