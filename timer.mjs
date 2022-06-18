// callback
// setInterval(() => {
//     console.info('Start time at ' + new Date);
// }, 1800);


// Promise

import tes from "timers/promises";

console.info(new Date);
const name = await tes.setTimeout(5000, "Dany");
console.info(name);
