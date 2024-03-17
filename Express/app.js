const express = require('express');
const app = express();

const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: false}));

const coches = [
  {nombre: "Porsche Taycan", imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Porsche_Taycan_4S_IMG_3526.jpg/1200px-Porsche_Taycan_4S_IMG_3526.jpg", texto: "El Porsche Taycan, líder en la revolución eléctrica, personifica la combinación perfecta entre elegancia y potencia. Su diseño aerodinámico y líneas fluidas anticipan su rendimiento excepcional, mientras que su interior, repleto de tecnología de vanguardia y detalles de lujo, ofrece una experiencia de conducción sin igual. Con una aceleración instantánea y una autonomía impresionante, el Taycan redefine los estándares de los automóviles eléctricos de alto rendimiento, marcando el comienzo de una nueva era en la industria automotriz."},
  {nombre: "Chevrolet Tahoe", imagen: "https://pluramotors.com.mx/site/wp-content/uploads/2023/07/Chevrolet_Tahoe_2019_Seminuevos_S-P_01.jpg", texto: "La Chevrolet Tahoe personifica la robustez y la versatilidad en su máxima expresión. Con su imponente presencia y su capacidad para conquistar cualquier terreno, la Tahoe es el epítome de la potencia y la confianza en la carretera. Diseñada para adaptarse a las demandas de la vida moderna, su interior espacioso y repleto de comodidades ofrece el espacio perfecto para toda la familia y sus aventuras. Ya sea en un viaje por carretera o en la exploración de terrenos agrestes, la Tahoe está lista para enfrentar cualquier desafío con estilo y elegancia incomparables."}
];

//Middleware
app.use((request, response, next) => {
  console.log('Middleware!');
  next(); //Le permite a la petición avanzar hacia el siguiente middleware
});


app.get('/agregar', (request, response, next) => {
  response.send(`
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
                  <a class="navbar-item" href="/inicio">
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

                  <a class="navbar-item" href="/preguntas">
                      Preguntas
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
                </div>
    </section>

    <div class="container">
    <h1 class="title">Agrega un vehículo</h1>
    <form action="/agregar" method="POST">
        <div class="field">
            <label class="label" for="nombre">Nombre</label>
            <div class="control">
                <input name="nombre" id="nombre" type="text" class="input" style="width: 90%;">
            </div>
        </div>
        <div class="field">
            <label class="label" for="imagen">Imagen</label>
            <div class="control">
                <input name="imagen" id="imagen" type="text" class="input" style="width: 90%;">
            </div>
        </div>
        <div class="field">
            <label class="label" for="texto">Descripción</label>
            <div class="control">
                <textarea name="texto" id="texto" class="textarea" style="width: 90%;" rows="5"></textarea>
            </div>
        </div>
        <div class="field">
            <div class="control">
                <input class="button is-success" type="submit" value="Agregar">
            </div>
        </div>
    </form>
</div>

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
</html>`); 
});

app.post('/agregar', (request, response, next) => {
  console.log(request.body);
  coches.push(request.body);
  response.redirect('/');
});

app.get('/', (request, response, next) => {
  console.log('Ruta /');
  let html_respuesta = `
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
                  <a class="navbar-item" href="/inicio">
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

                  <a class="navbar-item" href="/preguntas">
                      Preguntas
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
                <div class="container">`;

  for (let coche of coches) {
    
    html_respuesta += `
    <div class="column">
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

  html_respuesta += `
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
  response.send(html_respuesta);
});

app.get('/acerca-de', (request, response, next) => {
  console.log('Ruta /');
  let html_respuesta = `
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
                  <a class="navbar-item" href="/inicio">
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

                  <a class="navbar-item" href="/preguntas">
                      Preguntas
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
                <div class="container">`;

    html_respuesta += `
    <h1 class="title">Acerca de LX GARAGE</h1>
        <div class="content"><p>LX GARAGE es un sitio web diseñado para mostrar una colección de coches.
        Desarrollado por Alexys Reyna, un estudiante del Tecnológico de Monterrey.
        Este sitio web utiliza Node.js para el backend y Bulma CSS para el diseño.</p>
        <h2>Patrocinadores</h2>
        <img src="https://cdn-3.expansion.mx/dims4/default/1fac795/2147483647/resize/1280x/quality/90/?url=https%3A%2F%2Fcherry-brightspot.s3.amazonaws.com%2Fmedia%2F2014%2F08%2F15%2Ftec-de-monterrey.jpg" width="112" height="28">
        <img src="https://midu.dev/images/tags/node.png" width="112" height="28">
        <img src="https://miro.medium.com/v2/1*-rRVJ7pa3DUFN4Bul4e_CA.png" width="112" height="28">
        </div>`;

  html_respuesta += `
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
  response.send(html_respuesta);
});

app.get('/inicio', (request, response, next) => {
  console.log('Ruta /');
  let html_respuesta = `
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
                  <a class="navbar-item" href="/inicio">
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

                  <a class="navbar-item" href="/preguntas">
                      Preguntas
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
                <div class="container">`;

    html_respuesta += `
    <div class="container">
    <h1 class="title">¡Descubre la Inspiradora Historia de LX GARAGE!</h1>
    <div class="content">
        <h2>¡Bienvenido!</h2>
        <p>¡Bienvenido a LX GARAGE, el destino definitivo para los amantes de los automóviles de alto rendimiento y el lujo sobre ruedas! Sumérgete en nuestra fascinante colección de vehículos que desafían los límites de la ingeniería y la elegancia automotriz.</p>
        <p>Descubre los últimos modelos, conoce los secretos detrás de los diseños más emblemáticos y embárcate en un viaje lleno de emociones a través de la historia del automóvil.</p>
        <h2>¡Únete a Nuestra Comunidad!</h2>
        <p>En LX GARAGE, no solo encontrarás coches excepcionales, sino también una comunidad apasionada de entusiastas automotrices que comparten tu amor por la velocidad, la innovación y el estilo.</p>
        <p>Únete a nosotros en LX GARAGE y sé parte de una comunidad vibrante de entusiastas automotrices que comparten tu amor por la velocidad, la innovación y el estilo. Juntos, continuamos la legendaria historia de Santiago y su visión de crear un mundo donde los coches son más que simples máquinas: son obras de arte sobre ruedas.</p>
        <h2>Figuras importantes que apoyan nuestra iniciativa</h2>
        <div class="columns">
            <div class="column">
                <img src="https://upload.wikimedia.org/wikipedia/commons/d/d7/Cristiano_Ronaldo_playing_for_Al_Nassr_FC_against_Persepolis%2C_September_2023_%28cropped%29.jpg" width="200" height="28" alt="CR7">
            </div>
            <div class="column">
                <img src="https://www.elpais.com.co/resizer/3IcxihEqrMKYdBgUQVSTmcoiWc0=/1280x720/smart/filters:format(jpg):quality(80)/cloudfront-us-east-1.images.arcpublishing.com/semana/KPT3SXR5VBCZHITCTMVVUD7F5Q.jpg" width="200" height="280" alt="Bukele">
            </div>
            <div class="column">
                <img src="https://imagenes.elpais.com/resizer/HcgLMnq5VzePQhwS76XUglrCUqk=/1960x1470/filters:focal(961x908:971x918)/cloudfront-eu-central-1.images.arcpublishing.com/prisa/YD2MDU4UESD2QIKEJV6CFF27KY.jpg" width="200" height="28" alt="Balotelli">
            </div>
        </div>
    </div>
</div>
`;

  html_respuesta += `
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
  response.send(html_respuesta);
});

app.get('/preguntas', (request, response, next) => {
  console.log('Ruta /');
  let html_respuesta = `
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
                  <a class="navbar-item" href="/inicio">
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

                  <a class="navbar-item" href="/preguntas">
                      Preguntas
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
                <div class="container">`;

    html_respuesta += `
    <div class="container">
    <h1 class="title">Preguntas de los laboratorios</h1>
    <div class="content">
    </div>
</div>
`;

  html_respuesta += `
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
  response.send(html_respuesta);
});

app.use((request, response, next) => {
  response.status(404);
  response.send(`
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
                  <a class="navbar-item" href="inicio">
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

                  <a class="navbar-item" href="/preguntas">
                      Preguntas
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
          <section class="section">
              <div class="container">
                  <h1 class="title">El garage que buscas no existe</h1>
              </div>
          </section>
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
  `);
});

app.listen(3000);
