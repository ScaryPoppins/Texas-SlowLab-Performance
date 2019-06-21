import axios from 'axios';

const initialState = {
    loading: false,
    user: [], 

    //Not sure if need these yet!?!?!?!?!?!?!

    // currentProduct: [],
    // products: []
}

const GET_USER = 'GET_USER';
// const ADD_TO_CART = 'ADD_TO_CART';
// const REMOVE_FROM_CART = 'REMOVE_FROM_CART';


//Gets user object from auth controller
export function getUser(userInfo) {
    console.log(userInfo)
    return {
        type: GET_USER,
        payload: userInfo

        // payload: axios.get('/auth/user')
        // .catch((error) => error)
    }
}


export default function reducer(state = initialState, action) {
    console.log(state)
    switch(action.type) {
        // case `${GET_USER}_FULFILLED`:
        //     console.log(action.payload)
        // return {
        //     ...state,
        //     loading: false,
        //     user: action.payload
        // }
        case GET_USER:
            console.log(action.payload)
        return {
            ...state,
            user: action.payload
        }

        // case `${GET_USER}_PENDING`:
        // return {
        //     ...state,
        //     loading: true
        // }
        
        default: return state;
    }
}