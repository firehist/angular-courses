const res = fetch(
    'http://jsonplaceholder.typicode.com/users/1'
).then(r => r.json());

function successCallback(value) {
    console.log(`We got back ${value}`);
}

function failureCallback(err) {
    console.error(`Mmmh :[ ${err}`);
}

res.then(successCallback, failureCallback);