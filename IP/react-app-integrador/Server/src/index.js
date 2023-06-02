const server = require('./app');
const { conn } = require('./DB_connection');
const PORT = 3001;



server.listen(PORT, async () => {
  console.log(`Server listen on port ${PORT}`);
  await conn.sync({force:true});
});

//{force : true } => Drop (delete a tdas las tablas y vuelve a crear segun su config)
//{force: false} =? mantiene todo igual y persisten todos los datos.