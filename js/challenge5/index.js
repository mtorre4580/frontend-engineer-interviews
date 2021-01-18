function sleep(time) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve();
        }, time);
    })
}

(async () => {
    await sleep(1000);
    console.log('wait 1 second');
    await sleep(2000);
    console.log('wait 2 seconds');
})();