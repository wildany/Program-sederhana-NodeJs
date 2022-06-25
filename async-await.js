const getCoffee = () => {
    return new Promise((resolve, reject) => {
        const seeds = 10;
        setTimeout(() => {
            if (seeds >= 10) {
                resolve("Kopi didapatkan!");
            } else {
                reject("Biji kopi habis!");
            }
        }, 1000);
    })
}

// function makeCoffee() {
//     getCoffee().then(coffee => {
//         console.log(coffee);
//     });
// }

async function makeCoffee() {

    try {
        const coffee = await getCoffee();
        console.log(coffee);
    } catch (rejectedReason) {
        console.info(rejectedReason);
    }

}

makeCoffee();

// async function makeEspresso() {
//     try {
//         await checkAvailability();
//         await checkStock();
//         await Promise.all([boilWater(), grindCoffeeBeans()]);
//         const coffee = await brewCoffee();
//         console.log(coffee);
//     } catch (rejectedReason) {
//         console.log(rejectedReason);
//     }
// }
 
// makeEspresso();