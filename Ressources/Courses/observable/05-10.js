function map(transformFn) {
    const inputObservable = this;
    const outputObservable = createObservable(function subscribe(outputObservable) {
        inputObservable.subscribe({
            next: function (x) {
                const y = transformFn(x);
                outputObservable.next(y);
            },
            error: e => outputObservable.error(e),
            complete: () => outputObservable.complete(err)
        })
    });
    return outputObservable;
}

function filter(conditionFn) {
    const inputObservable = this;
    const outputObservable = createObservable(function subscribe(outputObservable) {
        inputObservable.subscribe({
            next: function (x) {
                if (conditionFn(x)) {
                    outputObservable.next(y);
                }
            },
            error: e => outputObservable.error(e),
            complete: () => outputObservable.complete(err)
        })
    });
    return outputObservable;
}

function delay(period) {
    const inputObservable = this;
    const outputObservable = createObservable(function subscribe(outputObservable) {
        inputObservable.subscribe({
            next: function (x) {
                setTimeout(function() {
                    outputObservable.next(y);
                }, period);
            },
            error: e => outputObservable.error(e),
            complete: () => outputObservable.complete(err)
        })
    });
    return outputObservable;
}

function createObservable(subscribe) {
    return {
        subscribe: subscribe,
        map: map
    }
}

const clickObservable = createObservable(function subscribe(ob) {
    document.addEventListener('click', ob.nextx);
    ob.complete()
});

const arrayObservable = createObservable(function subscribe(ob) {
    [10, 20, 30].forEach(ob.next);
    ob.complete()
});

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

clickObservable
    .map(ev => ev.clientX)
    .filter(x => x < 200)
    .delay(2000)
    .subscribe(observer);