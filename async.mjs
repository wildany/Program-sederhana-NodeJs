function samplePromise() {
    return Promise.resolve("dany");
}

const name = await samplePromise();

console.info(name);