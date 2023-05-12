import { ADDFAV,REMOVEFAV } from "./actions"

const initialState ={
    myFavorites: []
}

export default function reducer(state=initialState,action){
    switch(action.type){
        case ADDFAV:
            return{
                ...state, 
                myFavorites: [...state.myFavorites,action.playload]
            }
        case REMOVEFAV:
            return{
                ...state,
                myFavorites: state.myFavorites.filter( (character) => character.id !== action.playload)
            }    
        default:
         return {...state}
    }
}