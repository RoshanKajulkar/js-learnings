const mySym = Symbol("key1")

console.log(mySym);

const obj = {
    [mySym]: "sym-value"
}

console.log(obj.mySym);                     //undefined

console.log(obj[mySym]);                    // sym-value

obj.email = "roshan@google.com"

console.log(obj);                           // { email: "roshan@google.com" }

Object.freeze(obj)

obj.email = "roshan@microsoft.com"

console.log(obj);                           // { email: "roshan@google.com" }

const user = {
    name: "Roshan",
    fullname: {
        firstname: "Roshan",
        lastname: "Kajulkar"
    },
    greeting: function() {
        console.log(`Hello ${this.name}`);
    },
    greetingInArrow: () => {
        console.log(`Hello ${this.name}`);   // Hello undefined
    }
}

user.greeting()
user.greetingInArrow()

// ?

console.log(user.fullname?.firstname);

// object merging

const obj1 = {1: "a", 2: "b"}
const obj2 = {1: "a", 2: "d", 3: "k"}

const obj3 = { obj1, obj2 }

console.log(obj3);                    // { obj1: { '1': 'a', '2': 'b' }, obj2: { '1': 'a', '2': 'b' } }

const obj4 = Object.assign({}, obj1, obj2)

console.log(obj4);                    // { '1': 'a', '2': 'd', '3': 'k' }

// destructing

const obj5 = {...obj1, obj2}


console.log(Object.keys(user));
console.log(Object.values(user));
console.log(Object.entries(user));
console.log(user.hasOwnProperty('name')); // true

const { name: userName } = user

console.log("name ", userName);