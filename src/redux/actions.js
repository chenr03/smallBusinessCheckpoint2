

export const addListing = (listing) => {
    return {
        type: 'ADD_LISTING',
        value: listing
    }
}

export const removeListing = (id) => {
    return {
        type: 'REMOVE_LISTING',
        value: id
    }
}

export const login = () => {
    return {
        type: 'LOGIN'

    }
}

export const logout = () => {
    return {
        type: 'LOGOUT'
    }
}
