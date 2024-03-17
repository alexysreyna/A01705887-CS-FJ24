const Coche = require('../models/coche.model');

exports.get_agregar = (request, response, next) => {
    response.render('agregar'); 
};

exports.post_agregar = (request, response, next) => {
    console.log(request.body);
    const coche = 
        new Coche(request.body.nombre, request.body.imagen, request.body.texto);
    coche.save();
    response.redirect('/');
};

exports.get_root = (request, response, next) => {
    console.log('Ruta /');
    response.render('coches', {
        coches: Coche.fetchAll(),
    });
}

exports.get_preguntas = (request, response, next) => {
    response.render('preguntas'); 
};

exports.get_inicio = (request, response, next) => {
    response.render('inicio'); 
};

exports.get_acercade = (request, response, next) => {
    response.render('acerca-de'); 
};