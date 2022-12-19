import { connect } from 'react-redux'
import Listing from '../components/Listing'
import { removeListing } from'../redux/actions'


const mapStateToProps = (state) => {
    return {
        listings: state.listings,
        online: state.online
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        removeListing: (id) => dispatch(removeListing(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Listing)