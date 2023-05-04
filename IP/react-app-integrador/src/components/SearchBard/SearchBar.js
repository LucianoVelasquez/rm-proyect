import style from './search.module.css';
import { useState } from "react";


export default function SearchBar({onSearch}) {
   const [id,setId] = useState('');  //estado para guardar los Id del input
   
   const handleChange = (e) =>{    //Manejador para tomar el valor del input
      setId(e.target.value);  //Seteamos el valor del input en el estado.
   }

   return (
      <div className={style.containerSearch}>
        <input className={style.inputSearch} type="search" onChange={handleChange} value={id}></input>
        <button className={style.cardButton} onClick={() => {onSearch(id);setId('')}}>Add</button>
      </div>
   );
}
