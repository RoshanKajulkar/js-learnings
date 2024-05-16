const names = ["Roshan", "Kamal", "Kishor"]

for(const name of names) {
    console.log(name);
}

const map = new Map()

map.set("IN", "India")
map.set("FR", "France")
map.set("USA", "United States of America")
map.set("IN", "India")

console.log(map);

for(const [key, value] of map) {
    console.log(key, value);
}

// const myObject = {
//     game1: 'NFS',
//     game2: 'Spiderman'
// }

// for (const [key, value] of myObject) {  // TypeError: myObject is not iterable
//     console.log(key, ':-', value);
    
// }

const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: "ruby",
    swift: "swift by apple"
}

for (const key in myObject) {
    console.log(`${key} shortcut is for ${myObject[key]}`);
}

const programming = ["js", "rb", "py", "java", "cpp"]

for (const key in programming) {
    console.log(programming[key]);
}


for (const key in map) {   // no output
    console.log(key);
}

// reduce

const nums = [1, 2, 3]

const sum = nums.reduce((accumulator, currValue) => accumulator + currValue, 0)

console.log(sum);
