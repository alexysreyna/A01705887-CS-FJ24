const express = require('express');
const router = express.Router();

const cochesController = require('../controllers/coches.controller');

router.get('/agregar', cochesController.get_agregar);
router.get('/', cochesController.get_root);
router.get('/:coche_id', cochesController.get_root);
router.get('/preguntas', cochesController.get_preguntas);
router.get('/inicio', cochesController.get_inicio);
router.get('/acerca-de', cochesController.get_acercade);
router.post('/agregar', cochesController.post_agregar);

module.exports = router;