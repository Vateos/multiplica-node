const opts = {
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        alias: 'l',
        default: 10
    }
}


const argv = require('yargs')
    .command('listar', 'Imprime en consola la Tabla de Multiplicar', opts)
    .command('crear', 'Genera archivo con la Tabla de Multiplicar', opts)
    .help()
    .argv;


module.exports = {
    argv
}