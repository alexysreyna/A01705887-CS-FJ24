module.exports = (request, response, next) => {

    let can_add = false;
    for (let permiso of request.session.permisos) {
        if(permiso.funcion == 'agregar') {
            can_add = true;
        }
    }

    if (can_add) {
        next();
        
    } else {
        return response.redirect('/users/logout');
    }
    
}