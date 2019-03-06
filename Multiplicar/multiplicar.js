// requiere
const fs = require('fs');

let listarTabla = (base, limite = 10) => {

    for (let i = 1; i <= limite; i++) {
        console.log(`${ base } * ${ i } = ${ base * i}`)
    }


}



let crearArchivo = (base, limite = 10) => {

    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`El valor ${ base } no es un número`);
            return;
        }

        let data = '';


        for (let i = 1; i <= limite; i++) {
            data += `${ base } * ${ i } = ${ base * i}\n`;
        }

        fs.writeFile(`tablas/Tabla-${ base }-al-${ limite }.txt`, data, (err) => {

            if (err)
                reject(err)
            else

                resolve(`Tabla-${ base }-al-${ limite }.txt`);

        });

    });

}


module.exports = {
    crearArchivo,
    listarTabla
}