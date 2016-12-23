import { connect } from 'react-redux';
import StatusComponent from '../components/StatusComponent';
import { sentimentScoreSelector, getStatus } from '../store/reducer';


const mapStateToProps = (state) => {
    const vals = sentimentScoreSelector(state);
    return {
        polarity: vals.pola,
        certainty: vals.cert,
        status: getStatus(state)
    }
}


const StatusContainer = connect(mapStateToProps)(StatusComponent);

export default StatusContainer;