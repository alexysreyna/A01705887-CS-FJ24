const coches = [
    {nombre: "Porsche Taycan", imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Porsche_Taycan_4S_IMG_3526.jpg/1200px-Porsche_Taycan_4S_IMG_3526.jpg", texto: "El Porsche Taycan, líder en la revolución eléctrica, personifica la combinación perfecta entre elegancia y potencia. Su diseño aerodinámico y líneas fluidas anticipan su rendimiento excepcional, mientras que su interior, repleto de tecnología de vanguardia y detalles de lujo, ofrece una experiencia de conducción sin igual. Con una aceleración instantánea y una autonomía impresionante, el Taycan redefine los estándares de los automóviles eléctricos de alto rendimiento, marcando el comienzo de una nueva era en la industria automotriz."},
    {nombre: "Chevrolet Tahoe", imagen: "https://pluramotors.com.mx/site/wp-content/uploads/2023/07/Chevrolet_Tahoe_2019_Seminuevos_S-P_01.jpg", texto: "La Chevrolet Tahoe personifica la robustez y la versatilidad en su máxima expresión. Con su imponente presencia y su capacidad para conquistar cualquier terreno, la Tahoe es el epítome de la potencia y la confianza en la carretera. Diseñada para adaptarse a las demandas de la vida moderna, su interior espacioso y repleto de comodidades ofrece el espacio perfecto para toda la familia y sus aventuras. Ya sea en un viaje por carretera o en la exploración de terrenos agrestes, la Tahoe está lista para enfrentar cualquier desafío con estilo y elegancia incomparables."}
  ];

  module.exports = class Coche {

    //Constructor de la clase. Sirve para crear un nuevo objeto, y en él se definen las propiedades del modelo.
    constructor(mi_nombre, mi_imagen, mi_texto) {
        this.nombre = mi_nombre;
        this.imagen = mi_imagen;
        this.texto = mi_texto
    }

    //Este método servirá para guardar de manera persistente el nuevo objeto. 
    save() {
        coches.push({
            nombre: this.nombre,
            imagen: this.imagen,
            texto: this.texto,
        }); //es lo mismo que construcciones.push(this);
    }

    //Este método servirá para devolver los objetos del almacenamiento persistente.
    static fetchAll() {
        return coches;
    }

}