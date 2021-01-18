function URLify(myString, length) {
    const string = myString.split('');
    let newString = '';
    for (let i = 0; i < string.length && i < length; i++) {
        if (string[i] !== ' ') {
            newString = newString + string[i];
        } else {
            newString = newString + '%20';
        }
    }
    return newString;
}