//const fs = require('./Multiplicar/multiplicar');

//Destructuracion
const { crearArchivo, listarTabla } = require('./Multiplicar/multiplicar');
const { argv } = require(`./config/yargs-config`);
let commando = argv._[0];
switch (commando) {
    case 'listar':
        console.log('Listar');
        listarTabla(argv.base, argv.limite).then(mensaje => console.log(mensaje))
            .catch(err => console.log(err));
        break;
    case 'crear':
        console.log(`Creando Archivo ...`, argv.base);
        crearArchivo(argv.base, argv.limite).then(mensaje => console.log(mensaje))
            .catch(err => console.log(err));
        break;
    default:
        console.log('Comando no reconocido');
        break;
}
//console.log(process.argv);
/* crearArchivo(base).then(mensaje => console.log(mensaje))
    .catch(err => console.log(err)); */
/* let contenido = "";
for (let index = 1; index <= 10; index++) {
    contenido += `${base} x ${index} = ${base*index}\n`;
}
fs.writeFile(`tabla-${base}.txt`, contenido, (err) => {
    if (err) throw err;
    console.log('El archivo tabla-3.txt a sido creado!');
}); */