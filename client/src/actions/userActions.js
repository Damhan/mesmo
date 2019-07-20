import {GET_USERS,ADD_USER,DEL_USER, USERS_LOADING} from './../actions/types'
import axios from 'axios';

export const getUsers = () => dispatch => {
    dispatch(setUsersLoading());
    axios
        .get('/api/users')
        .then(res => 
            dispatch({
                type:GET_USERS,
                payload:res.data
            }))
}

export const delUser = id => dispatch => {
    axios
        .delete(`api/users/${id}`)
        .then(res=>
            dispatch(
                {
                    type:DEL_USER,
                    payload:id
                }
            ))
}

export const addUser = (user) => dispatch => {
    axios
        .post('/api/users', user)
        .then(res=> 
            dispatch({
                type:ADD_USER,
                payload: res.data
            }))
}

export const setUsersLoading = () => {
    return {
        type:USERS_LOADING
    }
}