const Coche = require('../models/coche.model');

exports.get_agregar = (request, response, next) => {
    response.render('agregar', {
        username: request.session.username || '',
    }); 
};

exports.post_agregar = (request, response, next) => {
    console.log(request.body);
    const coche = 
        new Coche(request.body.nombre, request.body.imagen, request.body.texto);
    coche.save();

    response.setHeader('Set-Cookie', 
        'ultimocoche=' + request.body.nombre + '; HttpOnly');

    response.redirect('/');
};

exports.get_root = (request, response, next) => {
    console.log('Ruta /');

    let ultimocoche = request.get('Cookie');
    if (ultimocoche) {
        ultimocoche = ultimocoche.split('=')[1];
    } else {
        ultimocoche = '';
    }
    console.log(ultimocoche);

    response.render('coches', {
        coches: Coche.fetchAll(),
        ultimocoche: ultimocoche,
        username: request.session.username || '',
        
    });
}

exports.get_preguntas = (request, response, next) => {
    response.render('preguntas', {
        username: request.session.username || '',
    }); 
};

exports.get_inicio = (request, response, next) => {
    response.render('inicio', {
        username: request.session.username || '',
    }); 
};

exports.get_acercade = (request, response, next) => {
    response.render('acerca-de', {
        username: request.session.username || '',
    }); 
};