import {connect} from 'react-redux';
import car from '.Car'

const mapStateToProps = (state) => {
    return {
        cars: state.cars
    }
};

export default connect(mapStateToProps)