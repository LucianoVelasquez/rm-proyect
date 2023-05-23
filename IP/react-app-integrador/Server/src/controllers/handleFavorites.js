let myFavorites = [];

const postFav = (req,res)=>{
    const char = req.body;
    myFavorites.push(char);

    res.status(200).json(myFavorites);
}

const deleteFav = (req,res)=>{
    const {id} = req.params;
    myFavorites = myFavorites.filter(char=> char.id !== id);

    res.status(200).json(myFavorites);
}

module.exports = {
    postFav,
    deleteFav,
}