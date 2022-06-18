import util from "util";

const name = 'Dany';
const lastname = 'Sihab';
console.info(`Hello ${name} ${lastname}`);

const person = {

    firstname: "Wildany",
    lastname: "Sihab"
};

console.info(`Person : ${JSON.stringify(person)}`);
console.info(`Person : %j`, person);