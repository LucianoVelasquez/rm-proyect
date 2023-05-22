export const ADDFAV = 'ADD_FAV';
export const REMOVEFAV = 'REMOVE_FAV';
export const FILTER = 'FILTER'
export const ORDER = 'ORDER'

export const addFav = (character) =>{
    return {type: ADDFAV, payload: character}
}

export const removeFav = (id) =>{
    return {type: REMOVEFAV, payload:id}
}

export const filterCards = (gender) =>{
    return {type:FILTER, payload: gender}
}

export const orderCards = (orden) =>{
    return {type:ORDER, payload: orden}
}