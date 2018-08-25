const fs = require('fs');
const colors = require('colors'); //Colors funciona con strings
let crearArchivo = async(base, limite) => {
    let contenido = "";
    if (!Number(base)) {
        return `No es un numero!`;
    }
    if (!Number(limite)) {
        return `Limite no es un numero`;
    }
    for (let index = 1; index <= limite; index++) {
        contenido += `${base} x ${index} = ${base*index}\n`;
    }
    fs.writeFile(`./tablas/tabla-${base}.txt`, contenido, (err) => {
        if (err) throw err;
    });
    return `El archivo ` + colors.green.bold(`tabla-${base}.txt`) + ` a sido creado!`;
}
let listarTabla = async(base, limite) => {
    let contenido = "";
    if (!Number(base)) {
        return `Base no es un numero!`;
    }
    if (!Number(limite)) {
        return `Limite no es un numero`;
    }
    for (let index = 1; index <= limite; index++) {
        contenido += colors.red(`${base} x ${index}`) + ` = ` + colors.green.bold(`${base*index}\n`);
    }
    return contenido;
}
module.exports = {
    crearArchivo,
    listarTabla
}