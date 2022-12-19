import { combineReducers } from 'redux'

const user = (state = null) => state

const listings = (state = [], action) => {
    switch (action.type) {
        case 'REMOVE_LISTING':
            const newListing = state.filter((listing) => {
                return listing.id !== action.value
            })
            return newListing
    }
    return state
}

const online = (state = null, action) => {
    console.log('State in reducer', state);
    switch (action.type) {
        case 'LOGIN':
            console.log('State in reducer', state);
            return state = true

        default:
            return state

    }

}



export default combineReducers({ user, listings, online})