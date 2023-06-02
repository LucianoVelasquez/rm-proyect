const { User } = require('../DB_connection');

const postUser = async (req,res) =>{
    try{
        const {email, password } = req.body;

        if(!email || !password) res.status(400).json({error: 'Faltan datos'})

        const [newUser,created] = await User.findOrCreate({where: {email,password}});
        console.log(created);

        if(created) res.status(200).json(newUser);
        else res.status(400).json({error:'El usuario ya existe'});
        
    }catch({message}){

        res.status(500).json({error:message});
    }
}

module.exports = postUser;

/* const postUser = async (req, res) => {
    try {
        const {email, password} = req.body
        if(email === '' || password === '') {
            throw Error('Faltan datos')
        } else {
            await User.findOrCreate({
                where: {email, password},
                defaults: {email, password}
            })
            res.status(200).json(await User.findAll())
        }
    }
catch (error) {
        return error.message.includes('Faltan')
        ?res.status(400).json({error: error.message})
        :res.status(500).json({error: error.message})
    }
} */