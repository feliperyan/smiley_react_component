import React, { PropTypes } from 'react';

const SmileyComponent = ({polarity, certainty}) => (
    <div>
        <p>Polairty: {polarity}</p>
        <p>Certainty: {certainty}</p>
    </div>
)


SmileyComponent.propTypes = {
    polarity: PropTypes.number,
    certainty: PropTypes.number
}


export default SmileyComponent