const {Router} = require('express');
const { usuarioGet, usuarioPut, usuarioPost, usuarioDelete, usuarioPatch } = require('../controllers/user.controller');

const router = Router();

require('../controllers/user.controller')

router.get('/', usuarioGet);
router.put('/:id', usuarioPut);
router.patch('/', usuarioPatch);
router.post('/', usuarioPost);
router.delete('/', usuarioDelete);


  module.exports = router;