const users = require('../utils/users')

const login = (req,res) =>{
    const {email , password} = req.query;
    
    users.forEach((user)=>{
        if(user.email === email && user.password === password){
            console.log('entro');
            return res.status(200).json({access:true})
        }else{
            console.log('no entro');
            return res.status(200).json({access:false})
        }
    })
}

module.exports = {
    login,
}