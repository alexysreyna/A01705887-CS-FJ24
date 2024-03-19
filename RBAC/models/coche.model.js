const db = require('../util/database');

  module.exports = class Coche {

    //Constructor de la clase. Sirve para crear un nuevo objeto, y en él se definen las propiedades del modelo.
    constructor(mi_nombre, mi_imagen, mi_texto) {
        this.nombre = mi_nombre;
        this.imagen = mi_imagen;
        this.texto = mi_texto
    }

    //Este método servirá para guardar de manera persistente el nuevo objeto. 
    save() {
        return db.execute(
            'INSERT INTO coche (nombre, imagen, username) VALUES (?, ?, "rommel49")',
            [this.nombre, this.imagen, this.texto]
        );
    }

    //Este método servirá para devolver los objetos del almacenamiento persistente.
    static fetchAll() {
        return db.execute('SELECT * FROM coche');
    }

    static fetchOne(id) {
        return db.execute('SELECT * FROM coche WHERE id=?', 
            [id]);
    }

    static fetch(id) {
        if (id) {
            return this.fetchOne(id);
        } else {
            return this.fetchAll();
        }
    }

}
