import React from 'react';
import Cards from '../components/Cards/Cards.js'
import style from '../components/Card/card.module.css'
import container from '../styles/global.module.css'
import { useState } from 'react';
import axios from 'axios';
import Nav from '../components/Nav/nav.js'


export default function Home({data}) {

  const [characters,setCharacters] = useState([]); 

  function onSearch(id) {
    axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
       if (data.name) {
          setCharacters((oldChars) => [...oldChars, data]);          
       } else {
          window.alert('¡No hay personajes con este ID!');
       }
    });
  }
  const onClose = (id)=>{
    setCharacters(
      characters.filter((char)=>{
        return char.id !== Number(id)
      })
    )
  };



  return (
    
    <div className={container.main}>
      <Nav onSearch={onSearch}></Nav>
      <div className={style.containerCards}>
        <Cards info={characters} onClose={onClose} />
      </div>
    </div>
    
  );
}
