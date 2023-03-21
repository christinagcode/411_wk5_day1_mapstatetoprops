import {connect} from 'react-redux';
import home from '.Home'

const mapStateToProps = (state) => {
    return {
        cars: state.cars
    }
};

export default connect(mapStateToProps)