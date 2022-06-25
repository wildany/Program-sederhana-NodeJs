
const state = {
    stock: {
        coffeeBeans: 250,
        water: 1000,
    },
    isCoffeeMachineBusy: false,
}


function makeEkspresso() {

    checkAvailability()
        .then((value) => {

            console.info(value);
            return checkStock();
        })
        .then((value) => {

            console.log(value);
            return brewCoffee();

        })
        .then((value) => {

            console.log(value);
        })
        .catch((rejectedReason) => {

            console.log(rejectedReason);

        })
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

makeEkspresso();