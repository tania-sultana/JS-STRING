const lyrics = 'Tumi bondhu kala pakhi ami jeno ki.bosonto kale tomay bolte paei ni.sada sada kala kala megf jomeche sada kala';
const parts = lyrics.split(' ');
const sentence = lyrics.split('.');
const char = lyrics.split('');
//console.log(parts);
//console.log(sentence);
// console.log(char);

const partial = lyrics.slice(5, 8);
const partial2 = lyrics.substring(5, 8);
console.log(partial);
console.log(partial2);
const lines =[
    'Tumi bondhu kala pakhi ami jeno ki',
    'bosonto kale tomay bolte paei ni',
    'sada sada kala kala megf jomeche sada kala'
  
];
const newSong = lines.join(':');
console.log(newSong);