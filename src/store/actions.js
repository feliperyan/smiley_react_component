import sentimentService from '../services/sentiment';

export const SCORE_FETCHED = 'SCORE_FETCHED';
export const SEND_TEXT = 'SEND_TEXT';

export function receiveScore(scores){
    return {
        type: SCORE_FETCHED,
        scores
    }
}

export function sendText(text){
    return {
        type: SEND_TEXT,
        text: text
    }
}


// export function fetchScore(textBody) {

//     return async(dispatch) => {
//         try {
//             const scores = await SentimentService.getScores();
//             } 
//             catch (error) {
//                 console.error(error);
//             }
//     };

// }
