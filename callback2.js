
//Synchronus
// const orderCoffee = () => {

//     let coffee = null;
//     console.info("Sedang membuat coffe");

//     setTimeout(() => {
//         coffee = "coffe sudah jadi";
//     }, 3000);

//     return coffee;
// }

// const coffee = orderCoffee();

// console.log(coffee);

//Asynchronus

const orderCoffee = (callback) => {

    let coffee = null;
    console.log = "Sedang membuat coffee";

    setTimeout(() => {
        coffee = "Coffee sudah jadi";
        callback(coffee);
    }, 3000);
}

orderCoffee((coffee) => {

    console.info(coffee)
});