import { connect } from "react-redux"
import Cards from "../Cards/Cards"
import { removeFav } from "../../redux/actions"

export function Favorite({myFavorites,removeFav}){
    const onClose = (id) =>{
        removeFav(id);
    }
    return(
        <>
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
            dispatch(removeFav(id))
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Favorite)