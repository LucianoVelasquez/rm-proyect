import { connect, useDispatch } from "react-redux"
import Cards from "../Cards/Cards"
import { removeFav,filterCards,orderCards } from "../../redux/actions"
import { useState } from "react";


export function Favorite({myFavorites,removeFav}){
    const onClose = (id) =>{
        removeFav(id);
    }
    const dispatch = useDispatch();
    const [aux,setAux] = useState(false);

    const handleOrder = (e) =>{
        let value = e.target.value;
        dispatch(orderCards(value));
        
    }

    const handleFilter = (e) =>{
        let value = e.target.value;
       dispatch(filterCards(value));
       /* setAux({...aux,filtro:value}) */
    }

    return(
        <>
        <select onChange={handleOrder}  >
            <option  value="A">Ascendente</option>
            <option value="D">Descendente</option>
        </select>
        <select onChange={handleFilter} >
            <option value='Todos'>Todos</option>
            <option value='Male'>Male</option>
            <option value='Female'>Female</option>
            <option value='Genderless'>Genderless</option>
            <option  value='unknown'>unknown</option>
        </select>
         <Cards info={myFavorites} onClose={onClose}></Cards>
        </>
    )
};

const mapStateToProps = (state) =>{
    return{
       myFavorites: state.myFavorites
    }
 }
const mapDispatchToProps = (dispatch) =>{
    return{
        removeFav: (id)=>{
            dispatch(removeFav(id));
        },
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Favorite)