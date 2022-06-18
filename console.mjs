import { Console } from "console";
import fs from "fs";

const file = fs.createWriteStream("application.log")
const log = new Console({

    stdout: file,
    stderr: file,
});

log.info('Test Console');
log.error('tes Error')

const person = {
    firstname: "Wildany",
    lastname: "Sihab",
}

log.table(person);