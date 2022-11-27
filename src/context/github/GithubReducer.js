import { Action } from "@remix-run/router";

const { useActionData } = require("react-router-dom");

const githubReducer =(state, action) => {
    switch (Action.type){
        case 'GET_USERS':
        return{
            ...state,
            users: Action.payload,
            loading: false, 
        }
        case 'GET_USER':
            return{
                ...state,
                user:action.payload,
                loading:false
            }
        case 'SET_LOADING':
            return {
                ...state, 
                loading:true
            }

        case 'CLEAR_USERS':
            return {
                ...state,
                users: [],
            }


        default:
            return state

    }
}

export default githubReducer

