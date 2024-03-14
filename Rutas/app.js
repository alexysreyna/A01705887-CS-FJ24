const header = `
    <!DOCTYPE html>
    <html>
        <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1">
            <title>GARAGE LX</title>
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css">
        </head>
        <body>
            <nav class="navbar" role="navigation" aria-label="main navigation">
                <div class="navbar-brand">
                  <a class="navbar-item" href="/">
                    <img src="https://media.revistagq.com/photos/5d89c9335d07090008d92dd6/16:9/w_2560%2Cc_limit/2020-mclaren-senna-mmp-1545234547.jpg" width="112" height="28">
                  </a>
              
                  <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                  </a>
                </div>
              
                <div id="navbarBasicExample" class="navbar-menu">
                  <div class="navbar-start">
                    <a class="navbar-item" href="/">
                      Garage principal
                    </a>
              
                    <a class="navbar-item" href="/agregar">
                      Agregar coche
                    </a>
                    
                    <a class="navbar-item" href="/acerca-de">
                      Acerca de
                    </a>
                  </div>
              
                  <div class="navbar-end">
                    <div class="navbar-item">
                      <div class="buttons">
                        <a class="button is-primary">
                          <strong>Registrarse</strong>
                        </a>
                        <a class="button is-light">
                          Iniciar sesión
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </nav>
            <section class="section">
                <div class="container">
    `;

const footer = `
      </div>
    </section>
    <footer class="footer">
      <div class="content has-text-centered">
        <p>
          <strong>By: Alexys</strong> with <a>Estudiante del Tecnológico de Monterreys</a>. The source code is licensed
          <a href="http://opensource.org/licenses/mit-license.php">MIT</a>. The website content
          is licensed <a href="http://creativecommons.org/licenses/by-nc-sa/4.0/">CC BY NC SA 4.0</a>.
        </p>
      </div>
    </footer>
  </body>
</html>
`;

const coches = [
  {nombre: "Porsche Taycan", imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Porsche_Taycan_4S_IMG_3526.jpg/1200px-Porsche_Taycan_4S_IMG_3526.jpg", texto: "El Porsche Taycan, líder en la revolución eléctrica, personifica la combinación perfecta entre elegancia y potencia. Su diseño aerodinámico y líneas fluidas anticipan su rendimiento excepcional, mientras que su interior, repleto de tecnología de vanguardia y detalles de lujo, ofrece una experiencia de conducción sin igual. Con una aceleración instantánea y una autonomía impresionante, el Taycan redefine los estándares de los automóviles eléctricos de alto rendimiento, marcando el comienzo de una nueva era en la industria automotriz."},
  {nombre: "Chevrolet Tahoe", imagen: "https://pluramotors.com.mx/site/wp-content/uploads/2023/07/Chevrolet_Tahoe_2019_Seminuevos_S-P_01.jpg", texto: "La Chevrolet Tahoe personifica la robustez y la versatilidad en su máxima expresión. Con su imponente presencia y su capacidad para conquistar cualquier terreno, la Tahoe es el epítome de la potencia y la confianza en la carretera. Diseñada para adaptarse a las demandas de la vida moderna, su interior espacioso y repleto de comodidades ofrece el espacio perfecto para toda la familia y sus aventuras. Ya sea en un viaje por carretera o en la exploración de terrenos agrestes, la Tahoe está lista para enfrentar cualquier desafío con estilo y elegancia incomparables."}
];

const http = require('http');

const server = http.createServer((request, response) => {    
    console.log(request.url);
    
    if (request.url == "/") {
        response.setHeader('Content-Type', 'text/html');
        response.write(header);
        response.write(`<h1 class="title">¡Bienvenido a <strong>LX GARAGE!<strong></h1><div class="columns">`);

        let coche_tarjeta = '';
        for (let coche of coches) {
            coche_tarjeta += `<div class="column">
            <div class="card">
            <div class="card-image">
            <figure class="image is-4by3">
            <img src="${coche.imagen}" alt="Placeholder image">
            </figure>
            </div>
            <div class="card-content">
            <div class="media">
            <div class="media-left">
            <figure class="image is-48x48">
            <img src="${coche.imagen}" alt="Placeholder image">
            </figure>
            </div>
            <div class="media-content">
            <p class="title is-4">${coche.nombre}</p>
            <p class="subtitle is-6">@alexysreyna</p>
            </div>
            </div>
            <div class="content">
            ${coche.texto}
            <br>
            <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
            </div>
            </div>
            </div>
            </div>`;
        }
        response.write(coche_tarjeta);
        response.write(`</div>`);
        response.write(footer);
        response.end();
    } else if (request.url == "/agregar" && request.method == "GET") {
        response.write(header);
        response.write(`<h1 class="title">Agrega un vehículo</h1>
        <form action="/agregar" method="POST">
        <label class="label" for="nombre">Nombre</label>
        <input name="nombre" id="nombre" type="text" class="input">
        <br>
        <label class="label" for="imagen">Imagen</label>
        <input name="imagen" id="imagen" type="text" class="input">
        <br>
        <label class="label" for="texto">Descripción</label>
        <input name="texto" id="texto" type="text" class="input">
        <br>
        <br>
        <input class="button is-success" type="submit" value="Agregar">
        </form>`);
        response.write(footer);
        response.end();
    } else if (request.url == "/agregar" && request.method == "POST") {
        const datos = [];
        request.on('data', (dato) => {
            datos.push(dato);
        });
        return request.on('end', () => {
            const datos_completos = Buffer.concat(datos).toString();
            const nombre = datos_completos.split('&')[0].split('=')[1];
            const imagen = datos_completos.split('&')[1].split('=')[1];
            const texto = datos_completos.split('&')[2].split('=')[1];
            coches.push({nombre: nombre, imagen: imagen, texto: texto});
            response.statusCode = 302;
            response.setHeader('Location', '/');
            return response.end();
        });
    } else if (request.url == "/acerca-de" && request.method == "GET") {
        response.write(header);
        response.write(`<h1 class="title">Acerca de LX GARAGE</h1>
        <div class="content"><p>LX GARAGE es un sitio web diseñado para mostrar una colección de coches.
        Desarrollado por Alexys Reyna, un estudiante del Tecnológico de Monterrey.
        Este sitio web utiliza Node.js para el backend y Bulma CSS para el diseño.</p>
        <h2>Patrocinadores</h2>
        <img src="https://cdn-3.expansion.mx/dims4/default/1fac795/2147483647/resize/1280x/quality/90/?url=https%3A%2F%2Fcherry-brightspot.s3.amazonaws.com%2Fmedia%2F2014%2F08%2F15%2Ftec-de-monterrey.jpg" width="112" height="28">
        <img src="https://midu.dev/images/tags/node.png" width="112" height="28">
        <img src="https://miro.medium.com/v2/1*-rRVJ7pa3DUFN4Bul4e_CA.png" width="112" height="28">
        </div>`);
        response.write(footer);
        response.end();
    } else {
        response.statusCode = 404;
        response.setHeader('Content-Type', 'text/html');
        response.write(header);
        response.write(`<h1 class="title">El garage que buscas no existe</h1>`);
        response.write(footer);
        response.end();
    }
});

server.listen(3000);
