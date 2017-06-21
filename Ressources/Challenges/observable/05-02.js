function giveMeSomeData(ob) {
    [10, 20, 30].forEach(ob.next);
    ob.complete()
}

const observer = {
    next: function nextCallback(data) {
        console.log(data);
    },
    error: function errorCallback(err) {
        console.error(err);
    },
    complete: function completeCallback() {
        console.log('done');
    }
};

giveMeSomeData(observer)