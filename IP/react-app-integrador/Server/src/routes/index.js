const {login} = require('../controllers/login');
const {postFav,deleteFav } = require('../controllers/handleFavorites');
const {getCharByid} = require('../controllers/getCharById');
const { Router } = require('express');

const router = Router();

router.get('/character/:id',getCharByid);
router.get('/login',login);

router.post('/fav',postFav);
router.delete('/fav/:id',deleteFav);

module.exports = router;