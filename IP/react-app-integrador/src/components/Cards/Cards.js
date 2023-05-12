import Card from '../Card/Card.js';
import style from '../Card/card.module.css'

export default function Cards({info,onClose}) {
   console.log(info);
   return(
      <div className={style.containerCards}>
         {
           info.map( (character)=>{
               return(
               <Card personajes={character} onClose={onClose} key={character.id} />
               )
            })
         }
      </div>
   ) 
}
