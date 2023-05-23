import axios from "axios";
export const ADDFAV = 'ADD_FAV';
export const REMOVEFAV = 'REMOVE_FAV';
export const FILTER = 'FILTER'
export const ORDER = 'ORDER'


export const addFav = (character) =>{
    const endpoint = 'http://localhost:3001/rickandmorty/fav';
    /* return {type: ADDFAV, payload: character} */
    return (dispatch) => {
        axios.post(endpoint, character)
        .then(({ data }) => {
           return dispatch({
              type: ADDFAV,
              payload: data,
           });
        });
     };
}

export const removeFav = (id) =>{
    /* return {type: REMOVEFAV, payload:id} */
   const endpoint = 'http://localhost:3001/rickandmorty/fav/' + id;
   return (dispatch) => {
      axios.delete(endpoint)
      .then(({ data }) => {
         return dispatch({
            type: 'REMOVE_FAV',
            payload: data,
      });
      });
   };
}

export const filterCards = (gender) =>{
    return {type:FILTER, payload: gender}
}

export const orderCards = (orden) =>{
    return {type:ORDER, payload: orden}
}