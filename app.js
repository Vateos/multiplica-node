const argv = require('./config/yargs').argv;

const { crearArchivo, listarTabla } = require('./Multiplicar/multiplicar');

let comando = argv._[0];

switch (comando) {

    case 'listar':
        listarTabla(argv.base, argv.limite)
        break;

    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado: ${ archivo }`))
            .catch(e => console.log(e));
        break;

    default:
        console.log('Comando no reconocido');
}


//console.log(process.argv);
//let argv2 = process.argv;

//console.log(argv.base);
//console.log('Límite', argv.limite);



// let parametro = argv[2];
// let base = parametro.split('=')[1]

// crearArchivo(base)
//     .then(archivo => console.log(`Archivo creado: ${ archivo }`))
//     .catch(e => console.log(e));





// FORMA DE HACER TABLAS DESDE UN SOLO JS

// // requiere
// const fs = require('fs');

// let data = '';



// // GUARDAR EN TXT CON FOR
// for (let i = 1; i <= 10; i++) {
//     data += `${ base } * ${ i } = ${ base * i}\n`;
// }

// fs.writeFile(`tablas/Tabla-${ base }.txt`, data, (err) => {

//     if (err) throw err;

//     console.log(`El archivo Tabla-${ base }.txt ha sido creado`);

// });

// FOR NORMAL
// for (let i = 1; i <= 10; i++) {
//     console.log(`${ base } * ${ i } = ${ base * i}`);
// }