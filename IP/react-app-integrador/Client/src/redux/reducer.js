import { ADDFAV,REMOVEFAV,FILTER,ORDER } from "./actions"

const initialState ={
    myFavorites: [],
    allCharacters: [],
}

export default function reducer(state=initialState,action){
    switch(action.type){
        case ADDFAV:
            /* return{
                ...state, 
                myFavorites: [...state.allCharacters,action.payload],
                allCharacters: [...state.allCharacters,action.payload],
            } */
            return { ...state, myFavorites: action.payload, allCharacters: action.payload };
        case REMOVEFAV:
            /* return{
                ...state,
                myFavorites: state.myFavorites.filter(fav => fav.id !== action.payload)
            }   */ 
            return { ...state, myFavorites: action.payload};
        case FILTER:   
              /* action.payload === 'Todos'? state.allCharacters :  
            state.allCharacters.filter((character) =>  action.payload === 'unknown' ? character.origin.name === 'unknown' :
                                                                                  character.gender === action.payload) */
            const newFilter = state.allCharacters.filter((ch) => ch.gender === action.payload);                                                                       
            return{
                ...state,
                myFavorites: newFilter,
            }     
        case ORDER:
            const newOrder = [...state.allCharacters];
            return{
                ...state,
                myFavorites: action.payload === 'A'? newOrder.sort((a,b)=> a.id - b.id) : newOrder.sort((a,b)=>b.id - a.id),
            }     
        default:
         return {...state}
    }
}