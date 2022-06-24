try {
    console.info("Awal block try");

    errorCode; //contoh error
    console.info("Akhir block try");

} catch (error) {

    console.info("Terjadi error");
    console.log(error.name);
    console.log(error.message);
    console.log(error.stack);
} finally {

    console.info("Akan tetap dieksekusi");
}