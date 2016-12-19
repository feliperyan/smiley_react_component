import React, { PropTypes } from 'react';
import unsure from './img/unsure.png';
import happy from './img/happy.png';
import sad from './img/sad.png';

const SmileyComponent = ({polarity, certainty}) => {
    
        if(certainty <= 0.2 && certainty >= -0.2){
            return <img src={unsure} />;
        }
        else if (polarity >=0 ) {
            return <img src={happy} />
        }
        else if (polarity <=0 ) {
            return <img src={sad} />
        }
        else {
            return <img src='./img/neutral.png' />
        }               
}


SmileyComponent.propTypes = {
    polarity: PropTypes.number,
    certainty: PropTypes.number
}


export default SmileyComponent