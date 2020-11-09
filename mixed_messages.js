const firsWordArr = ['You', 'We all', 'People'];
const secondWordArr = ['have to', 'must', 'can'];
const thirdWordArr = ['make', 'change', 'stop'];
const fourthWordArr = ['the world', 'the space', 'this time'];
const finalWordArr = ['here and now!', 'for the better!', 'to all people!']

let firstWord = firsWordArr[Math.floor(Math.random()*3)];
let secondWord = secondWordArr[Math.floor(Math.random()*3)];
let thirdWord = thirdWordArr[Math.floor(Math.random()*3)];
let fourthWord = fourthWordArr[Math.floor(Math.random()*3)];
let finalWord = finalWordArr[Math.floor(Math.random()*3)];


console.log(`${firstWord} ${secondWord} ${thirdWord} ${fourthWord} ${finalWord}`);
