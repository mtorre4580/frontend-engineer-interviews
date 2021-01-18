function removeRepeat(text) {
    const words = text.split(' ');
    const wordsExclude = new Set(words);
    return [...wordsExclude].join(' ');
}
