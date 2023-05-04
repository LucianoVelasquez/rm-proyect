import Card from '../Card/Card.js';

export default function Cards({info,onClose}) {
   return(
      <>
         {
           info.map((personaje)=>{
               return <Card personajes={personaje} onClose={onClose} key={personaje.id} />
            })
         }
      </>
   ) 

   
}
