const filesystem = require('fs');
const http = require('http');

// Ejercicio 1
function calcularPromedio(arreglo) {
  let suma = 0;
  for (let i = 0; i < arreglo.length; i++) {
      suma += arreglo[i];
  }
  let promedio = suma / arreglo.length;
  return promedio;
}

const numerosprom = [234, 1, 5, 32, 98, 76, 88, 33, 2, 9];
const promedio = calcularPromedio(numerosprom);
console.log("El arreglo está compuesto por los siguientes números:")
for (let item of numerosprom) {
  console.log(item);
}
console.log(`El promedio es: ${promedio}`);

// Ejercicio 2
const textoUsuario = 'Este es el texto que se escribe en el archivo nuevo'
filesystem.writeFileSync('textousuario.txt', textoUsuario);

// Ejercicio 3 - Fibonacci
function fibonacci(n) {
    const fibonacciArray = [0, 1];
    for (let i = 2; i < n; i++) {
        fibonacciArray[i] = fibonacciArray[i - 1] + fibonacciArray[i - 2];
    }
    return fibonacciArray;
}

const nFibonacci = 7;
const resultadoFibonacci = fibonacci(nFibonacci);
console.log(`Fibonacci de los primeros ${nFibonacci} números:`, resultadoFibonacci);

const server = http.createServer((request, response) => {
    console.log(request.url);
    response.setHeader('Content-Type', 'text/html');
    response.write(`
    <!DOCTYPE html>
<html>

  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Bulma X Alexys</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css">
  </head>
  
  <body>
    <nav class="navbar is-transparent">
      <div class="navbar-brand">
        <a class="navbar-item" href="https://tec.mx/es">
          <img src="https://international.udemedellin.edu.co/wp-content/uploads/2021/07/monterrey-1.jpg" alt="Bulma: Free, open source, and modern CSS framework based on Flexbox" width="112" height="28">
        </a>
        <div class="navbar-burger" data-target="navbarExampleTransparentExample">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    
      <div id="navbarExampleTransparentExample" class="navbar-menu">
        <div class="navbar-start">
          <a class="navbar-item" href="https://bulma.io/">
            Home
          </a>
          <div class="navbar-item has-dropdown is-hoverable">
            <a class="navbar-link" href="https://bulma.io/documentation/overview/start/">
              Docs
            </a>
            <div class="navbar-dropdown is-boxed">
              <a class="navbar-item" href="https://bulma.io/documentation/overview/start/">
                Overview
              </a>
              <a class="navbar-item" href="https://bulma.io/documentation/overview/modifiers/">
                Modifiers
              </a>
              <a class="navbar-item" href="https://bulma.io/documentation/columns/basics/">
                Columns
              </a>
              <a class="navbar-item" href="https://bulma.io/documentation/layout/container/">
                Layout
              </a>
              <a class="navbar-item" href="https://bulma.io/documentation/form/general/">
                Form
              </a>
              <hr class="navbar-divider">
              <a class="navbar-item" href="https://bulma.io/documentation/elements/box/">
                Elements
              </a>
              <a class="navbar-item is-active" href="https://bulma.io/documentation/components/breadcrumb/">
                Components
              </a>
            </div>
          </div>
        </div>
    
        <div class="navbar-end">
          <div class="navbar-item">
            <div class="field is-grouped">
              <p class="control">
                <a class="bd-tw-button button" data-social-network="Twitter" data-social-action="tweet" data-social-target="https://bulma.io" target="_blank" href="https://twitter.com/intent/tweet?text=Bulma: a modern CSS framework based on Flexbox&amp;hashtags=bulmaio&amp;url=https://bulma.io&amp;via=jgthms">
                  <span class="icon">
                    <i class="fab fa-twitter"></i>
                  </span>
                  <span>
                    Tweet
                  </span>
                </a>
              </p>
              <p class="control">
                <a class="button is-primary" href="https://github.com/jgthms/bulma/releases/download/0.9.4/bulma-0.9.4.zip">
                  <span class="icon">
                    <i class="fas fa-download"></i>
                  </span>
                  <span>Download</span>
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </nav>

    <section class="section">
      <div class="container">
        <h1 class="title is-1">
          ¡Bienvenido a la página de Alexys usando Bulma!
        </h1>
        <p class="subtitle">
          A01705887
        </p>

        <div class="box">
          <strong>TIP:</strong> Si haces clic en el logo del TEC te manda a la página oficial.
        </div>

        <article class="message is-primary">
          <div class="message-header">
            <p>Algunas de las cosas que quisiera hacer en los próximos años ...</p>
            <button class="delete" aria-label="delete"></button>
          </div>
          <div class="message-body">
            - Correr un medio maratón.
            <br>
            - Poner mi emprendimiento de comida o software.
            <br>
            - Aprender un idioma oriental.
          </div>
        </article>

        <article class="message is-info">
          <div class="message-header">
            <p>Este es un pequeño CV:</p>
            <button class="delete" aria-label="delete"></button>
          </div>
          <div class="message-body">
            - B2+ en Inglés.
            <br>
            - B1+ en Francés.
            <br>
            - He programado en lenguajes como C++ y Python.
            <br>
            - He participado en varios proyectos con Wikipedia y la biblioteca Cervantina del ITESM.
            <br>
            - En el Verano de 2023 participé en el desarrollo de una página web para una tienda de productos artesanales en Chiapas, México.
          </div>
        </article>

        <button class="button is-info m-3">
          Botón de información
        </button>

        <button class="button is-primary is-light m-3">
          Botón primario claro
        </button>

        <button class="button is-half m-3">
          Botón vacío
        </button>

        <button class="button is-danger m-3">
          Botón de peligro
        </button>

        <button class="button is-warning m-3">
          Botón de alerta
        </button>
      </div>
      
      <br>
      
      <h2><strong>¿RICKROLLEADO?</strong></h2>
      <br>
      <figure class="image is-16by9">
        <iframe class="has-ratio" width="640" height="360" src="https://youtu.be/xvFZjo5PgG0?si=9tYTYNdq-RX1fU2E" frameborder="10" allowfullscreen></iframe>
      </figure><br>

      <article class="message is-dark">
        <div class="message-body">
          <strong>Opinión del Framework:</strong><br>
          Bulma es bastante fácil de usar, originalmente había intentado trabajar con Tailwind, no obstante, 
          me fue muy complicado puesto que cobraban para dejarte acceder al código y también la instalación 
          se me hizo un poco complicada. Por otro lado, en la página de Bulma, la información está muy completa 
          y te permite de forma sencilla desarrollar una página básica, asimismo, tiene una gran variedad de colores
          y documentación sobre todo tipo de íconos, links, mensajes, barras de navegación, texto, etc. cuya presencia
          en una página web es vital.

        </div>
      </article>

      <article class="message is-info">
        <div class="message-body">
          <strong>Material Design:</strong><br>
          Esta página te brinda paletas de colores conforme los vas seleccionado, siendo esto muy útil para personas
          que a lo mejor no tienen buena percepción de la combinación de colores, esto es importante, principalmente
          para el diseño en todos sus campos.

        </div>
      </article>

      <div class="dropdown is-active">
        <div class="dropdown-trigger">
          <button class="button" aria-haspopup="true" aria-controls="dropdown-menu">
            <span>Varias opciones</span>
            <span class="icon is-small">
              <i class="fas fa-angle-down" aria-hidden="true"></i>
            </span>
          </button>
        </div>
      
        <div class="dropdown-menu" id="dropdown-menu" role="menu">
          <div class="dropdown-content">
            <a href="#" class="dropdown-item">
              Selecciona una opción
            </a>
            <a class="dropdown-item">
              Excelente página
            </a>
            <a  class="dropdown-item">
              Página promedio
            </a>
            <a href="#" class="dropdown-item">
              Esta opción vuelve arriba
            </a>
          </div>
        </div>

    </section>
  </body>

  <footer class="footer">
    <div class="content has-text-centered">
      <p>
        <strong>Bulma</strong> by <a href="https://jgthms.com">Jeremy Thomas</a>. The source code is licensed
        <a href="http://opensource.org/licenses/mit-license.php">MIT</a>. The website content
        is licensed <a href="http://creativecommons.org/licenses/by-nc-sa/4.0/">CC BY NC SA 4.0</a>.
      </p>
    </div>
  </footer>

</html> 
    `);
    response.end();
});

server.listen(3000);