import process from "process";

process.addListener("exit", (exitCode) => {

    console.info('nodeJS exit with code ' + exitCode);
})

console.info(process.version);