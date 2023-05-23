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
import Favorite from "./components/Favorites/Favorites";


export default function App() {

  /* let userEmail = 'vel@gmail.com';  */ 
   
  const [characters,setCharacters] = useState([]); 
  const [access,setAccess] = useState(false);
  const navigate = useNavigate();
  const { pathname } = useLocation();  /*Este hook es para capturar la ruta donde se encuentra el usuario. */
  
  /* useEffect(() => {
    console.log(userEmail);
    if(localStorage.getItem('name') === userEmail) {
      navigate('/home')
    } else navigate('/')
    // eslint-disable-next-line
  }, [access]) */

  useEffect(() => {
    !access && navigate('/home');   //  cambiar '/home' por -> '/' para que el login ande normalmente.
  }, [access]);
  

  async function onSearch(id) {
    try{
      const { data }  = await axios.get(`http://localhost:3001/rickandmorty/character/${id}`);;
      setCharacters((oldChars)=>[...oldChars,data]); 
    }catch(error){
      alert('Algo salio mal');
    }
  }

  const onClose = (id) =>{
   
    setCharacters(
      characters.filter( (char)=> char.id !== id )
    )
  };

  const login = async (userData) => {
    try{
     const { email, password } = userData;
     const URL = 'http://localhost:3001/rickandmorty/login/';
     const { data } = await axios.get(URL + `?email=${email}&password=${password}`); 
     
     if(data.access){
      setAccess(data.access);
      data.access && navigate('/home');
     }else{
      throw Error('Usuario invalido')
     }

    }catch(error){
      alert(error.message);
    }
  
  }

  const logout = () => {
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
        <Route path="/favorites" element={<Favorite/>}></Route>
      </Routes>
      
    </div> 

  );
}
