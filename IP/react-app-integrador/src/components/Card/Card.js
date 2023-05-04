import style from './card.module.css' //Importando stilos.

export default function Card({ personajes, onClose}) {
  return (

   <div className={style.card}>
      <div className={`${style.cardInner} p-${personajes.id}`}>
         <div className="imga">
            <img className={style.cardImg} src={personajes.image} alt="un personaje" />
         </div>
         <h2 className={style.cardH2}>Name: {personajes.name} </h2>
         <h2 className={style.cardH2}>Status: {personajes.status}</h2>
         <h2 className={style.cardH2}>Specie: {personajes.species}</h2>
         <h2 className={style.cardH2}>Gender: {personajes.gender}</h2>
         <h2 className={style.cardH2}>Origin: {personajes.origin.name}</h2>
         <section className={style.divButton}>
            <button className={style.cardButton} onClick={()=>{onClose(personajes.id)}}>x</button>
         </section>
      </div>
   </div>
    
  );
}
