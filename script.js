// // const mainContainer = document.querySelector('#root');

// // const reactElement  = {
// //     type : 'a',
// //     props : {
// //         href : "https://www.google.com",
// //         target : "_blank",
// //     },
// //     children : "click here to google"
// // }

// // renderIt(reactElement, mainContainer);

// // function renderIt(reactElement, mainContainer) {
// //     const domElement = document.createElement(reactElement.type);
// //     domElement.innerHTML = reactElement.children;

// //     for (const prop in reactElement.props) {
// //         domElement.setAttribute(prop, reactElement.props[prop]); // ✅ Fix
// //     }

// //     mainContainer.appendChild(domElement);
// // }



// // let user  = {
// //     name : "puneet",
// //     company : "Microsoft, Amazon"
// // }

// // let copy = {};
// // // for(let key in user){
// // //     copy[key] = user[key]
// // // }
// // Object.assign(copy, user);

// // console.log(copy)

// let user = {
//     name : "puneet sharma",
//     belongsTo : "rajasthan"
// }

// let copy = user;
// //console.log(copy)
// copy.name = "sharma puneet";
// copy.belongsTo = "marwar, rajasthan"
// console.log(user)
// // for(let key in user){



// //     copy[key]  = user[key];
// // }
// // console.log(copy);


// let arr = [1,2,3,4];
// let arr2 = [100,101,105]
// console.log(arr.concat(arr2))
// //console.log(arr)
// //arr.push(...arr2)
// console.log(arr)
// let res = [...arr, ...arr2];
// console.log(res)


// let arr = [1,2,3,4,5]

// let res = arr.filter((item)=>{
//     return item%2 == 0;
// })
// console.log(res)


// const words = ["apple", "banana", "grape", "apricot", "orange"];
// let res = words.filter((item)=>{
//     return item.startsWith('a');
// })
// console.log(res)

// const users = [
//   { name: "Puneet", age: 25 },
//   { name: "Rahul", age: 17 },
//   { name: "Anjali", age: 19 }
// ];

// let res = users.filter(item =>  item.age < 18)
// console.log(res)


// const mixed = [0, 1, "", "hello", null, undefined, NaN, 42];
// const nums = [1, 2, 3, 2, 4, 2, 5];

const mixed = [0, 1, "", "hello", null, undefined, NaN, 42];


let falsey = mixed.map((it)=>{
    if(it == 0 || it == "" || it == null || it == undefined || it == NaN) return it;
})
console.log(falsey)