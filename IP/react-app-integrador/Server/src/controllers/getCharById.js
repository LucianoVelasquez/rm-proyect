const axios = require('axios');

const getCharByid = (res,id) =>{
    axios.get(`https://rickandmortyapi.com/api/character/${id}`)
    .then(({ data }) => {
        return  {
            id,
            name: data.name,
            gender: data.gender,
            species: data.species,
            origin:{
                name: data.origin.name,
                url: data.origin.url
            },
            image: data.image,
            status: data.status
        } 
    })
    .then( data =>{
        res.writeHead(200, { "Content-Type": "aplication/json" }) 
        return res.end(JSON.stringify(data))
    }) 
    .catch((err)=>{ 
        res.writeHead(500, { "Content-Type": "text/plain" })
        return res.end({message: err})
    })
        
}

module.exports = {
    getCharByid
}