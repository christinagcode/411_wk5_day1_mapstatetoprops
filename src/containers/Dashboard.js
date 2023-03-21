import {connect} from 'react-redux';
import dashboard from '.Dashboard'

const mapStateToProps = (state) => {
    return {
        users,
        cars: state.cars
    }
};

export default connect(mapStateToProps)