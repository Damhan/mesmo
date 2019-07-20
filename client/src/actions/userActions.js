import {GET_USERS,ADD_USER,DEL_USER} from './../actions/types'

export const getUsers = () => {
    return {
        type:GET_USERS
    }
}

export const delUser = (id) => {
    return {
        type:DEL_USER,
        payload: id
    }
}

export const addUser = (user) => {
    return {
        type:ADD_USER,
        payload: user
    }
}