import { Observable } from 'rxjs';

const numbersObservable = Observable.from([10,20,30,40,50,60]);

numbersObservable
    .filter(x => x !== 20)
    .map(x => x / 10)
    .subscribe({
        next: function next(x) {
            console.log(x);
        },
        error: function error(err) { },
        complete: function complete() {
            console.log('done');
        }
    })