function nextCallback(data) {
    console.log(data);
}

function errorCallback(err) {
    console.error(err);
}

function completeCallback() {
    console.log('done');
}

function giveMeSomeData(nextCB, errorCB, completeCB) {
    [10, 20, 30].forEach(nextCB);
}

giveMeSomeData(
    nextCallback,
    errorCallback,
    completeCallback
)