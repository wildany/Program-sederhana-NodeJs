


// function halo(test) {

//     return console.info("Halo" + test);
// }

// function tampilkanNama(callback) {

//     const nama = "Dany";

//     callback(nama);
// }

// console.info(tampilkanNama(halo));



function luasPersegi(sisi) {

    return console.info(sisi * sisi);
}

function sisi(panggilFungsiLuas) {

    const panjangSisi = 4;

    panggilFungsiLuas(panjangSisi);
}

console.info(sisi(luasPersegi));