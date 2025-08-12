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


let arr = [1,2,3,4];
let arr2 = [100,101,105]
console.log(arr.concat(arr2))
