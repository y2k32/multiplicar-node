const options = {
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        default: 10,
        alias: 'l'
    }
}
const argv = require(`yargs`)
    .command(`listar`, `Imprime en consola la tabla multiplicar`, options)
    .command(`crear`, `Crea un archivo llamado tabla-{base}.txt`, options)
    .help().argv;
const colors = require('colors');
module.exports = {
    argv,
    colors
}