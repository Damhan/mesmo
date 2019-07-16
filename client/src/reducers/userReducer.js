import uuid from 'uuid';
import {GET_USERS,ADD_USER,DEL_USER} from './../actions/types'

const initialState = {
    users: [
        {id: uuid(), email: 'damhanrichardson@gmail.com'},
        {id: uuid(), email: 'damhan@gmail.com'},
        {id: uuid(), email: 'danklootthrowaway@gmail.com'}
    ]
}

export default function(state=initialState, action) {
    switch(action.type) {
        case GET_USERS:
            return {
                ...state
            }
        case DEL_USER:
            return {
                ...state,
                users: state.users.filter(user=> user.id != action.payload) 
            }
        default:
            return state;
    }

}
