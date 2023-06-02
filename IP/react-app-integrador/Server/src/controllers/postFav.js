const { Favorite } = require("../DB_connection");

const postFav = async (req, res) => {
  try {
    const {id, name, origin, status, image, species, gender } = req.body;
    
    if(!id || !name || !origin || !status || !image || !species || !gender) res.status(401).json({message:'Faltan datos'});

    await Favorite.findOrCreate({where: {id,name, origin, status, image, species, gender} , defaults:{id,name, origin, status, image, species, gender}});
    const allFav = await Favorite.findAll();

    return res.status(200).json(allFav);
  } catch (error) {
    res.status(500).json({error:error.message});
  }
};

module.exports = postFav;
