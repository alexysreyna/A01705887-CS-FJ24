const express = require('express');
const router = express.Router();
const isAuth = require('../util/is-auth');
const canView = require('../util/can-view');
const canAdd = require('../util/can-add');
const cochesController = require('../controllers/coches.controller');

router.get('/agregar', isAuth, canAdd, cochesController.get_agregar);
router.get('/:coche_id', isAuth, canView, cochesController.get_root);
router.get('/', isAuth, canView, cochesController.get_root);
router.get('/preguntas', isAuth, canView, cochesController.get_preguntas);
router.get('/inicio', cochesController.get_inicio);
router.get('/acerca-de', cochesController.get_acercade);
router.post('/agregar', isAuth, canAdd, cochesController.post_agregar);
module.exports = router;;