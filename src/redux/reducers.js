import { combineReducers } from 'redux'

const user = (state = null) => state

const listings = (state = [], action) => {
    return state

// const googleMaps = (state = [], action) => {
//             return state

}

export default combineReducers({ user, listings})