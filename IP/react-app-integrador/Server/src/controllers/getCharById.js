const axios = require('axios');
const URL = 'https://rickandmortyapi.com/api/character'


const getCharByid = (req,res) =>{
    let id  = req.params.id

    axios.get(`${URL}/${id}`)
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
        !data? 
        res.status(404).json('Not Fount'):
        res.status(200).json(data)
    }) 
    .catch((err)=>{ 
        res.status(500).json({error: err.message});
    })
        
}

module.exports = {
    getCharByid
}