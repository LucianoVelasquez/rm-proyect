import { NavLink } from 'react-router-dom';
import style from './card.module.css' //Importando stilos.
import { addFav, removeFav } from '../../redux/actions';
import {connect} from 'react-redux'
import { useState,useEffect } from 'react';

function Card({onClose,personajes,addFav,removeFav,myFavorites}) {

   
   const [isFav,setFav] = useState(false);

   useEffect(() => {
      myFavorites.forEach((fav) => {
         if (fav.id === personajes.id) {
            setFav(true);
         }
      });
      
   },[myFavorites]); 

   const handleFavorite = () =>{
      if(isFav){
         setFav(false);
         removeFav(personajes.id);
         
      }else{
         setFav(true);
         addFav(personajes);
     
      }
   }

  return (
   <div className={style.card}>
      
      <div className={`${style.cardInner} p-${personajes.id}`}>
         <div className={style.icon}>
            {
               isFav ? (
                  <button className={style.buttonIcon} onClick={handleFavorite}>❤️</button>
               ) : (
                  <button className={style.buttonIcon} onClick={handleFavorite}>🤍</button>
               )
            }
         </div>
         <NavLink className={style.link}to={`/detail/${personajes.id}`}> 
            <div className="imga">
               <img className={style.cardImg} src={personajes.image} alt="un personaje" />
            </div>
            <h2 className={style.cardH2}>Name: {personajes.name} </h2>
            <h2 className={style.cardH2}>Status: {personajes.status}</h2>
            <h2 className={style.cardH2}>Specie: {personajes.species}</h2>
            <h2 className={style.cardH2}>Gender: {personajes.gender}</h2>
            <h2 className={style.cardH2}>Origin: {personajes.origin.name}</h2>
         </NavLink>
            <div className={style.divButton}>
               <button className={style.cardButton} onClick={()=>{onClose(personajes.id)}}>x</button>
            </div>
      </div>
   </div> 
  );
}

const mapDispatchToProps = (dispatch) =>{
   return{
      addFav:(character)=>{
         dispatch(addFav(character))
      },
      removeFav:(id)=>{
         dispatch(removeFav(id))
      }
   }
}
const mapStateToProps = (state) =>{
   return{
      myFavorites: state.myFavorites
   }
}

export default connect(mapStateToProps,mapDispatchToProps)(Card);