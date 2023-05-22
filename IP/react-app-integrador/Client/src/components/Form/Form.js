import { useState } from 'react';
import style from './Form.module.css'
import validationEmail from './validationEmail';
import validationPaswword from './validationPassword';


export default function Form({login}) {

  const [userData,setData] = useState({
    email: '',
    password: ''
  });

  const [erro,setErro] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e) =>{
    let propery = e.target.name;
    let value = e.target.value;
    
    setData({...userData, [propery]: value});
    propery === 'email'? validationEmail({...userData, [propery]: value},erro,setErro) : validationPaswword({...userData, [propery]: value},erro,setErro);
  }

  const submitHanlde = (e) =>{
    e.preventDefault();  /* Evita actualizar la pagina una ves le damos a submit */
    login(userData);
  }

  return (
    <form onSubmit={submitHanlde} className={style.mainForm}>
      <div className={style.divForm}>
        <label htmlFor="">Email </label>
        <input className={style.inputForm} name='email' type="text" value={userData.email} onChange={handleChange}></input>
        <p>{erro.email}</p>
        <label  htmlFor="">Password</label>
        <input className={style.inputForm} name='password' type="password" value={userData.password} onChange={handleChange}></input>
        <p>{erro.password}</p>
      <button className={style.buttonForm}>Submit</button>
      </div>
    </form>
  );
}
