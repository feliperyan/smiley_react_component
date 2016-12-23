import React, { PropTypes } from 'react';

const StatusComponent = ({ polarity, certainty, status }) => {
    return (
        <div class="status_message">
            <p>polarity: {polarity} | certainty: {certainty} | status: {status}</p>
        </div>
    )
}

StatusComponent.propTypes = {
    polarity: PropTypes.number,
    certainty: PropTypes.number,
    status: PropTypes.text
}

export default StatusComponent