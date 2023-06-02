const { User } = require("../DB_connection");

const login = async (req, res) => {
  try {
    let { email,password} = req.query;

    if (!email || !password) res.status(400).json({ message: "Faltan datos" });

    const find = await User.findOne({where: email});
    
    if(!find) res.status(404).json({message: 'Usuario no encontrado'});

    const pass = await User.findOne({where: password});
    if(!pass) res.status(403).json({message:'Contraseña incorrecta'});

    return res.status(200).json({access:true});

  } catch ({ message }) {
    res.status(500).json({error:message});
  }
};

module.exports = login;
