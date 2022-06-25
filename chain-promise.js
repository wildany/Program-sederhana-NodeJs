
const state = {
    stock: {
        coffeeBeans: 250,
        water: 1000,
    },
    isCoffeeMachineBusy: false,
}


// function makeEkspresso() {

//     checkAvailability()
//         .then((value) => {

//             console.info(value);
//             return checkStock();
//         })
//         .then((value) => {

//             console.info(value);

//             const promises = [boilWater(), grindCoffeeBeans()];

//             return Promise.all(promises);
//         })
//         .then((value) => {

//             console.log(...value);
//             return brewCoffee();

//         })
//         .then((value) => {

//             console.log(value);
//         })
//         .catch((rejectedReason) => {

//             console.log(rejectedReason);

//         })
// }

async function makeEkspresso() {
    try {
        await checkAvailability();
        await checkStock();
        await Promise.all([boilWater(), grindCoffeeBeans()]);
        const coffee = await brewCoffee();
        console.log(coffee);
    } catch (rejectedReason) {
        console.log(rejectedReason);
    }
}

const checkAvailability = () => {

    return new Promise((resolve, reject) => {

        setTimeout(() => {
            if (!state.isCoffeeMachineBusy) {
                resolve("Mesin kopi siap digunakan");
            } else {
                reject("Maaf, mesin sedang sibuk");
            }
        }, 1000);
    })
}

const checkStock = () => {
    return new Promise((resolve, reject) => {

        state.isCoffeeMachineBusy = true;

        setTimeout(() => {
            if (state.stock.coffeeBeans >= 16 && state.stock.water >= 250) {
                resolve("stok cukup. Bisa membuat kopi");
            } else {
                reject("stock tidak cukup!");
            }
        }, 2000);
    })

}


const brewCoffee = () => {

    console.info("membuat kopi...");

    return new Promise((resolve, reject) => {

        setTimeout(() => {

            resolve("kopi sudah siap");
        }, 2000);
    })
}

const boilWater = () => {
    return new Promise((resolve, reject) => {
        console.log("Memanaskan air...");
        setTimeout(() => {
            resolve("Air panas sudah siap!");
        }, 2000);
    })
}

const grindCoffeeBeans = () => {
    return new Promise((resolve, reject) => {
        console.log("Menggiling biji kopi...");
        setTimeout(() => {
            resolve("Kopi sudah siap!");
        }, 1000);
    })
}

makeEkspresso();