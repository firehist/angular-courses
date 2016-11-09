const readable = getReadableStreamSomehow();

function nextDataCallback(chunk) {
    console.log(`Received ${chunk.length} bytes of data.`)
}

function errorCallback(err) {
    console.log(`Mmmmh bad news ${err}`)
}

function doneCallback() {
    console.log(`Done!`)
}

readaboe.on('data', nextCallback);
readaboe.on('error', errorCallback);
readaboe.on('end', doneCallback);