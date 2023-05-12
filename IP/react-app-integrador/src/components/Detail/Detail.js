import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import style from './Detail.module.css';


export default function Detail(){
    const {id} = useParams();

    const [character,setCharacter] = useState({});
    
    useEffect(() => {
        /* Ciclo de vida montaje */
        axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
           if (data.name) {
              setCharacter(data);
           } else {
              window.alert('No hay personajes con ese ID');
           }
        });
        return setCharacter({}); /* Ciclo de vida desmonte, cada ves que se desmonte se borra la informacion. */
     }, [id]); /* Ciclo de vida de actualizacion: (quedarse atento al estado ID) */

    return(
        <div className={style.div}>
            <div className={style.divInner}>
           {/*  <Link className={style.Button}to={'/home'}>Home</Link> */}
                <section className={style.sectionImg}>
                    <img className={style.imga}src={character.image}></img> 
                </section>
                <section className={style.sectionText}>
                    <h1>Nro:{character.id}</h1>
                    <h2>Name:{character.name} </h2>
                    <h2>Status: {character.status}</h2>
                    <h2>Specie: {character.species}</h2>
                    <h2>Gender: {character.gender}</h2>
                    <h2>Origin: {character.origin?.name}</h2> {/* ? -> ese signo es para prevenir errores a la hora de hacer peticiones. */}
                    
                </section>
            </div>
        </div>    
    );
}