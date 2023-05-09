import React from "react";
import { Route, Routes, useLocation,useNavigate } from "react-router-dom";
import About from "./pages/About";
import Detail from "./components/Detail/Detail.js";
import Nav from "./components/Nav/nav";
import Cards from './components/Cards/Cards.js'
import container from './styles/global.module.css'
import { useState,useEffect } from 'react';
import axios from 'axios';
import Form from "./components/Form/Form";

export default function App() {

  let email = 'vel@gmail.com'; 
  let passwarod = '1234567';
  
  const [characters,setCharacters] = useState([]); 
  const [access,setAccess] = useState(false);
  const navigate = useNavigate();
  const { pathname } = useLocation();  /*Este hook es para capturar la ruta donde se encuentra el usuario. */
  
  useEffect(() => {
    if(localStorage.getItem('name') === email) {
      navigate('/home')
    } else navigate('/')
    // eslint-disable-next-line
  }, [access])
 /*  useEffect(() => {
    !access && navigate('/');
  }, [access]);
   */

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
 /*  const login = (userData) =>{
    if (userData.password === passwarod && userData.email === email) {
      setAccess(true);
      navigate('/home');
   }
  } */

  const login = (userData) => {
    if(email === userData.email && passwarod === userData.password) {
      localStorage.setItem('name', email)
      localStorage.setItem('pass', passwarod)
      setAccess(true);
    } else alert('Usuario invalido')
  }

  const logout = () => {
    localStorage.setItem('name', 0)
    localStorage.setItem('pass', 0)
    setAccess(false)
    navigate('/')
  }

  return (

    <div className={container.main}>
      { pathname !== '/' && <Nav onSearch={onSearch}  logout={logout}></Nav>}
      <Routes>
        <Route path="/" element={<Form login={login}/>}></Route>
        <Route path="/home" element={<Cards info={characters} onClose={onClose}/>}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/detail/:id" element={<Detail/>}></Route>
      </Routes>
      
    </div> 

  );
}
