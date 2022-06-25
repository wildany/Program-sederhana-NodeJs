

class NetworkError extends Error {
    constructor(message) {
        super(message);
        this.name = 'NetworkError';
    }
}

const fetchingUserFromInternet = (isOffline) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (!isOffline) {
                resolve({ name: 'John', age: 18 });
            } else {
                reject(new NetworkError('Gagal mendapatkan data dari internet'));
            }
        }, 500);
    })
}

// TODO: 2
async function gettingUserName() {


    try {

        const user = await fetchingUserFromInternet(false);
        return user.name;

    } catch (error) {
        if (error instanceof NetworkError) {
            console.info(`${error.message}`);
        }
    }

    return console.log(user.name);
}

gettingUserName();