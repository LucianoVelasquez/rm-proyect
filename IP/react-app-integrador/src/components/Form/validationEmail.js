export default function validationEmail(userData,erro,setErro){
    // eslint-disable-next-line    

    if(!userData.email){
        setErro({...erro,email: 'Porfavor llena el campo'});
    }else if(userData.email.length > 35){
        setErro({...erro,email: 'Email demasiado largo'})
    }else if(!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{3})+$/.test(userData.email)){
        setErro({...erro,email: 'Email invalido'})
    }else{
        setErro({...erro,email:''});
    }

    

}