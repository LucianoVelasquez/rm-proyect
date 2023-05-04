import { useState,useEffect } from "react";
const Contador1 = () =>{

   /*  const [counter,setCounter] = useState(0);
    const aumentHandle = () =>{
        setCounter(counter+1);
    }
    const decrementHandle = () =>{
        counter && setCounter(counter-1);
    }
    const zeroHabdle = () =>{
        setCounter(0);
    }

    useEffect(()=>{
        console.log('jola')
        return console.log('Se termino el componente')
    },['']) */
    let [characters,setCharacters] = useState([]);

    const onSearch = ()=>{
      let example = [{
        id: 1,
        name: 'Rick Sanchez',
        status: 'Alive',
        species: 'Human',
        gender: 'Male',
        origin: {
           name: 'Earth (C-137)',
           url: 'https://rickandmortyapi.com/api/location/1',
        },
        image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
      },
      {
        id: 1,
        name: 'Rick Sanchez',
        status: 'Alive',
        species: 'Human',
        gender: 'Male',
        origin: {
           name: 'Earth (C-137)',
           url: 'https://rickandmortyapi.com/api/location/1',
        },
        image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
      },{
        id: 1,
        name: 'Rick Sanchez',
        status: 'Alive',
        species: 'Human',
        gender: 'Male',
        origin: {
           name: 'Earth (C-137)',
           url: 'https://rickandmortyapi.com/api/location/1',
        },
        image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
      }]
    setCharacters(characters=example);
    console.log(characters);
    }
    return(
        <div>   
            <h1>Contador</h1>
            {characters.map((e)=>{
                return <div>{e.image}</div>
            })}
            <button onClick={onSearch}>Aumentar</button>
            <button onClick=''>Decrementar</button>
            <button onClick=''>Reiniciar</button>
        </div>
    );
}

export default Contador1;