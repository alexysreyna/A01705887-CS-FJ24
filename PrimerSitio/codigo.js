// 1.
function calcularPotencias() {
    let numeroEntero = prompt("Ingrese un número:");

    document.write("<table border='1'>");
    document.write("<tr><th>Número</th><th>Cuadrado</th><th>Cubo</th></tr>");

    for (var i = 1; i <= numeroEntero; i++) {
        document.write("<tr>");
        document.write("<td>" + i + "</td>");
        document.write("<td>" + (i * i) + "</td>");
        document.write("<td>" + (i * i * i) + "</td>");
        document.write("</tr>");
    }

    document.write("</table>");
}

// 2.
function generarNumeroAleatorio() {
    return Math.floor(Math.random() * 10) + 1;
}

function sumaAleatoria() {
    const num1 = generarNumeroAleatorio();
    const num2 = generarNumeroAleatorio();
    const resultadoCorrecto = num1 + num2;

    const inicioTiempo = new Date();

    const respuestaUsuario = prompt(`¿Cuánto es ${num1} + ${num2}?`);

    const finTiempo = new Date();
    const tiempoTranscurrido = (finTiempo - inicioTiempo) / 1000;

    if (respuestaUsuario !== null) {
        const respuestaNumerica = parseInt(respuestaUsuario);

        if (!isNaN(respuestaNumerica)) {
            if (respuestaNumerica === resultadoCorrecto) {
                alert(`¡Respuesta Correcta! Tiempo: ${tiempoTranscurrido} segundos`);
            } else {
                alert(`Respuesta Incorrecta. Tiempo: ${tiempoTranscurrido} segundos`);
            }
        } else {
            alert('Por favor, ingresa un número válido.');
        }
    } else {
        alert('Has cancelado la operación.');
    }
}

// 3.
function contador() {
    const arregloEjemplo = [4, -23, 0, -12, 0, 0, -1, 0, -9, -7];

    let negativos = 0;
    let ceros = 0;
    let mayoresCero = 0;

    for (let i = 0; i < arregloEjemplo.length; i++) {
        if (arregloEjemplo[i] < 0) {
            negativos++;
        } else if (arregloEjemplo[i] === 0) {
            ceros++;
        } else {
            mayoresCero++;
        }
    }

    document.write(`
    <p><strong>Arreglo:</strong> [${arregloEjemplo.join(', ')}]</p>
    <p><strong>Cantidad de negativos:</strong> ${negativos}</p>
    <p><strong>Cantidad de ceros:</strong> ${ceros}</p>
    <p><strong>Cantidad de mayores a 0:</strong> ${mayoresCero}</p>
`);
}

//4.
function promedios(matriz) {
    const resultados = [];

    for (let i = 0; i < matriz.length; i++) {
        const renglon = matriz[i];
        const suma = renglon.reduce((total, numero) => total + numero, 0);
        const promedio = suma / renglon.length;
        resultados.push(promedio);
    }

    document.write('<p><strong>Matriz:</strong></p>');
    document.write('<table border="1">');

    for (let i = 0; i < matriz.length; i++) {
        document.write('<tr>');
        for (let j = 0; j < matriz[i].length; j++) {
            document.write(`<td>${matriz[i][j]}</td>`);
        }
        document.write('</tr>');
    }

    document.write('</table>');

    document.write('<p><strong>Promedio de cada línea:</strong></p>');
    document.write('<ul>');

    for (let i = 0; i < resultados.length; i++) {
        document.write(`<li>${resultados[i]}</li>`);
    }

    document.write('</ul>');

    return resultados;
}
// Matriz para el ejemplo
const matrizEjemplo = [
    [100, 2, 43],
    [90, 125, 3],
    [1, 86, 77]
];

//5.
function inverso(numero) {
    // Almacena el valor original antes de entrar en el bucle
    let numeroOriginal = numero;
    let resultado = 0;

    while (numero > 0) {
        resultado = resultado * 10 + (numero % 10);
        numero = Math.floor(numero / 10);
    }

    document.write(`<p><strong>Número original:</strong> ${numeroOriginal}</p>`);
    document.write(`<p><strong>Número con dígitos en orden inverso:</strong> ${resultado}</p>`);

    return resultado;
}
// Número para el ejemplo
const numeroEjemplo = 5372982120716;

//6.
function gestionarFlota() {
    const flotaCoches = [];

    function agregarCoche(marca, modelo, año, velocidadMaxima, consumoCombustible) {
        const nuevoCoche = { marca, modelo, año, velocidadMaxima, consumoCombustible };
        flotaCoches.push(nuevoCoche);
    }

    function mostrarCochesOrdenados(criterio) {
        const cochesOrdenados = [...flotaCoches];
        if (criterio === 'velocidadMaxima') {
            cochesOrdenados.sort((a, b) => b.velocidadMaxima - a.velocidadMaxima);
        } else if (criterio === 'consumoCombustible') {
            cochesOrdenados.sort((a, b) => a.consumoCombustible - b.consumoCombustible);
        }

        // De acuerdo con MDN, <pre></pre> sirve para que el texto ya tenga un formato y su visualización sea correcta.
        document.write(`<pre>${cochesOrdenados.map(coche => `${coche.marca} ${coche.modelo} - Año ${coche.año} - Velocidad Máxima: ${coche.velocidadMaxima} km/h - Consumo Combustible: ${coche.consumoCombustible} L/100km`).join('\n')}</pre>`);
    }

    return {
        agregarCoche,
        mostrarCochesOrdenados
    };
}



