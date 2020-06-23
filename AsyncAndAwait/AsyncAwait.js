function resolveAfter2Seconds() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('resolved');
        }, 2000);
    });
}

async function asyncCall() {
    console.log('calling');
    const result = await resolveAfter2Seconds();
    console.log(result);
    // expected output: 'resolved'
}

asyncCall();


const add = function (x, y) {
    return new Promise((resolve, reject) => {
        let sum = x + y;
        if (sum) {
            resolve(sum);
        }
        else {
            reject(Error("Could not add the two values!"));
        }
    });
};

const subtract = function (x, y) {
    return new Promise((resolve, reject) => {
        let sum = x - y;
        if (sum) {
            resolve(sum);
        }
        else {
            reject(Error("Could not subtract the two values!"));
        }
    });
};

async function calculation() {
    try {
        console.log("Adding subtraction");
        const addtion = await add(5, 2);
        const sub = await subtract(addtion,3);
        console.log(addtion);
        console.log(sub);
    } catch (error) {
        console.log(error);
    }
}

calculation();