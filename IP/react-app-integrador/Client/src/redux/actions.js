import axios from "axios";
export const ADDFAV = 'ADD_FAV';
export const REMOVEFAV = 'REMOVE_FAV';
export const FILTER = 'FILTER'
export const ORDER = 'ORDER'


export const addFav = (character) =>{
    const endpoint = 'http://localhost:3001/rickandmorty/fav';

    return async (dispatch) => {
      try {
         const { data } = await axios.post(endpoint, character);

         if(data){
            return dispatch({type: ADDFAV, payload: data});
         }else{
            throw Error();
         }

      } catch (error) {
         alert('Error al agregar a favoritos.');
      }
     };
}

export const removeFav = (id) =>{
   const endpoint = 'http://localhost:3001/rickandmorty/fav/' + id;

   return async (dispatch) => {
      try {
         const { data } = await axios.delete(endpoint);
         return dispatch({type:REMOVEFAV, payload: data});

      } catch (error) {
         console.log('Error al eliminar de favoritos.');
      }

   };
}

export const filterCards = (gender) =>{
    return {type:FILTER, payload: gender}
}

export const orderCards = (orden) =>{
    return {type:ORDER, payload: orden}
}