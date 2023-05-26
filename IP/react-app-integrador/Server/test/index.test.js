const app = require('../src/app');
const users = require('../src/utils/users')
const session = require('supertest');
const agent = session(app);

describe('Test de RUTAS',()=>{
    xdescribe('GET /rickandmorty/character/:id',()=>{
        it('Responde con status: 200', async ()=>{
            await agent.get('/rickandmorty/character/1').expect(200);
        });

        it('Responde un objeto con las propiedades: "id", "name", "species", "gender", "status", "origin" e "image"',async ()=>{
            const {body} = await agent.get('/rickandmorty/character/1').expect(200);
            expect(body).toHaveProperty("id", "name", "species", "gender", "status", "origin", "image");
        })

        it('Si hay un error responde con status: 500', async ()=>{
            await agent.get('/rickandmorty/character/999').expect(500);
            await agent.get('/rickandmorty/character/10000').expect(500);
        })

    })

    xdescribe('GET /rickandmorty/login',()=>{
        it('Validacion login', async ()=>{
            
        await agent.get(`/rickandmorty/login?email=${users[0].email}&password=${users[0].password}`).expect({access: true});
        await agent.get(`/rickandmorty/login?email=marzamo&password=saraza`).expect({access: false});
        })
    })

     describe('POST /rickandmorty/fav',()=>{
        it('validacion', async ()=>{
            const {data} = await agent.get(`/rickandmorty/fav/:id`).expect(200);
            console.log(data);
        })
    }) 

    xdescribe('/rickandmorty/fav/:id',()=>{
        it('Delete', async ()=>{
            
        })
    })



})