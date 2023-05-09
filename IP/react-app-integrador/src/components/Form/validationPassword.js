export default function validationPaswword(userData, erro, setErro) {
  if (userData.password.length < 6 || userData.password.length > 10) {
    setErro({
      ...erro,
      password: "tiene que tener una longitud entre 6 y 10 caracteres.",
    });
  } else if (!/\d/.test(userData.password)) {
    setErro({ ...erro, password: "tiene que tener al menos un número." });
  } else {
    setErro({ ...erro, password: "" });
  }
}
