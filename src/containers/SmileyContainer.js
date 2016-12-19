import { connect } from 'react-redux';
import SmileyComponent from '../components/SmileyComponent';
import { sentimentScoreSelector } from '../store/reducer';


const mapStateToProps = (state) => {
    const vals = sentimentScoreSelector(state);
    return {
        polarity: vals.pola,
        certainty: vals.cert
    }
}


const SmileyContainer = connect(mapStateToProps)(SmileyComponent);

export default SmileyContainer;