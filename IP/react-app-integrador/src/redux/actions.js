export const ADDFAV = 'ADD_FAV';
export const REMOVEFAV = 'REMOVE_FAV';


export const addFav = (character) =>{
    return {type: ADDFAV, playload: character}
}

export const removeFav = (id) =>{
    return {type: REMOVEFAV, playload:id}
}