const login = require('../controllers/login');
const postUser = require('../controllers/postUser');
const postFav = require('../controllers/postFav');
const deleteFav = require('../controllers/deleteFav');

const {getCharByid} = require('../controllers/getCharById');
const { Router } = require('express');

const router = Router();

router.get('/character/:id',getCharByid);

router.post('/login',postUser);
router.get('/login',login);
router.post('/fav',postFav);
router.delete('/fav/:id',deleteFav);

module.exports = router;