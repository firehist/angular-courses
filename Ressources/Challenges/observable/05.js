/**
 * Steps
 * - Implement console.log on each callback & giveMeSomeData!
 * --- click, fetch, array.forEach
 * - Get data sync/async
 * - Change 3 callbacks to observer
 * - Add complete after arr.forEach
 * - change giveMeSomeData into subscribe
 * - Move it into an observable Object
 * - Refactor code in XObservable (arrayObservable, clickObservable
 * - create a createObserver method and use it into arrayObservable
 *   & clickObservable
 * - use observable.map & write map function
 *   (inputObservable [this] & outputObservable )
 * - use observable.filter & write filter function
 * - show hot/cold observable by comment subscribe
 * - Go for click in browser :p
 * - Implement delay function
 */


function nextCallback(data) {
    // ...
}

function errorCallback(err) {
    // ...
}

function completeCallback() {
    // ...
}

giveMeSomeData(
    nextCallback,
    errorCallback,
    completeCallback
)