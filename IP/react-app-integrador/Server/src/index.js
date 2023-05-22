const http = require("http");
const { getCharByid } = require('./controllers/getCharById')

const server = http.createServer((req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  const { url } = req;
  

  //Rutas
  ///rickandmorty/character/
  if(url.includes('/rickandmorty/character/')){
    const id = url.split("/")[3];
    getCharByid(res,id);
  }




  /* if(url.includes(`/rickandmorty/character/`)) {
    const id = url.split("/")[3];
    const newData = data.find((char) => char.id === Number(id));
    console.log(newData);

    if(newData) {
      res.writeHead(200, { "Content-Type": "aplication/json" });
      return res.end(JSON.stringify(newData));
    }else{
        res.writeHead(404, { "Content-Type": "aplication/json" });
        return res.end(JSON.stringify({error: 'Character not found'}))
    } 

  } */
  
});

server.listen(3001, () => {
  console.log("Servidor escuchando en el purto 3001");
});
