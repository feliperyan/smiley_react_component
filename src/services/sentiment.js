
//const SENTIMENT_URL = 'https://sentiment-fryan.herokuapp.com/api/v1.0/sentiment';
const SENTIMENT_URL = 'http://127.0.0.1:5000/api/v1.0/sentiment'

class SentimentService {
    
    async getScores(text) {
        const response = await fetch(SENTIMENT_URL , {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({data: text})
        });

        if (!response.ok) {
            console.error(`Sentiment API - FAILED with status ${response.status}`);
        }

        const data = await response.json();

        return data;
    }
    
}


export default new SentimentService();