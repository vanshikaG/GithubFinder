//import { Action } from "@remix-run/router";

//const { useActionData } = require("react-router-dom");

const githubReducer =(state, action) => {
    switch (action.type){
        case 'GET_USERS':
            return{
                ...state,
                users: action.payload,
                repos: action.payload,
                loading: false, 
            }
            

        case 'GET_USERS_AND_REPOS':
        return{
            ...state,
            users: action.payload.user,
            repos: action.payload.repos,
            loading: false, 
        }
        
        case 'SET_LOADING':
            return {
                ...state, 
                loading:true
            }

        case 'CLEAR_USERS':
            return {
                ...state,
                users:[],
            }

        default:
            return state

    }
}

export default githubReducer

