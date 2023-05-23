const axios = require("axios");
const URL = "https://rickandmortyapi.com/api/character";

const getCharByid = async (req, res) => {
 
  try {
    const { id } = req.params;
    const { data } = await axios.get(`${URL}/${id}`);

    if (!data.name) throw Error(`No existe el personaje con id ${id}`);

    const character = {
      id,
      name: data.name,
      gender: data.gender,
      species: data.species,
      origin: {
        name: data.origin.name,
        url: data.origin.url,
      },
      image: data.image,
      status: data.status,
    };
    return res.status(200).json(character);

  } catch (error) {

    return error.message.includes("id")
      ? res.status(404).json({ error: error.message })
      : res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getCharByid,
};
