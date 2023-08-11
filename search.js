const lyrics = 'i am aNni';
//const doesExist = lyrics.includes('anni');
const view = 'anni';
//const doesExist = lyrics.includes(view);
const lyricsLower = lyrics.toLowerCase();
const viewLower = view.toLocaleLowerCase();
const doesExist = lyricsLower.includes(viewLower);
const doesExistOneLine = lyrics.toLowerCase().includes(view.toLocaleLowerCase());
// console.log(doesExist)
console.log(doesExistOneLine);


console.log(lyrics.indexOf('am'));
console.log(lyrics.startsWith('i'));