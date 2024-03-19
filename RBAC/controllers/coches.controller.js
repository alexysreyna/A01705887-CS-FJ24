const Coche = require('../models/coche.model');

exports.get_agregar = (request, response, next) => {
    response.render('agregar', {
        username: request.session.username || '',
        csrfToken: request.csrfToken(),
        permisos: request.session.permisos || [],
    }); 
};

exports.post_agregar = (request, response, next) => {
    console.log(request.body);
    const coche = 
        new Coche(request.body.nombre, request.body.imagen, request.body.texto);
    coche.save()

    .then(([rows, fieldData]) => {
        response.setHeader('Set-Cookie', 
            'ultimocoche=' + request.body.nombre + '; HttpOnly');
        response.redirect('/');
    })
    .catch((error) => {console.log(error)});

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

    Coche.fetch(request.params.coche_id).then(([rows, fieldData]) => {
        console.log(rows);
        response.render('coches', {
            construcciones: rows,
            ultimocoche: ultimocoche,
            username: request.session.username || '',
            permisos: request.session.permisos || [],
        });
    })
    .catch((error) => {
        console.log(error);
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