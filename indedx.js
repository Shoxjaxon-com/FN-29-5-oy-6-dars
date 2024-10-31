// === Massilar bilan ishlash === // 

//     1 - masala

// let arr = [1, 2, 3, 4, 5];
// let arr1 = [3, 4, 5, 6, 7]
// function number(arr, arr1) {
//     let res = arr.filter(valeus => arr1.includes(valeus))
//     return res
// }
// console.log(number(arr, arr1));


// 2 - masala

// let arr = [1, 2, 3]
// let sum = 3;
// function number(arr, sum) {
//     let res = arr.map(function (valeus) {
//         return valeus * sum
//     })
//     return res
// }
// console.log(number(arr, sum));

// 3 - masala

// let arr = [-1, -2, -3, -4, 1, 2, 3, 4]
// function num(arr) {
//     let sum = arr
//         .filter(function (valeus) {
//             return valeus > 0
//         })
//         .reduce(function (v, sum) {
//             return sum + v
//         })
//     return sum
// }
// console.log(num(arr));


// 4 - masala

// let arr = [0, 0, 0, 1, 2, 3]
// function num(arr) {
//     return arr.sort(function (a, b) {
//         return (a === 0) - (b === 0)
//     })
// }
// console.log(num(arr));

// 6 - masala

// let arr = [[1], [2], [3], [4], [5]]
// function num(arr) {
//     let res = arr.flat()
//     return res
// }
// console.log(num(arr));

// 7 - masala
// let arr = [1, 2, 3]
// let arr1 = [3, 4, 5]
// function num(arr, arr1) {
//     let res = arr.concat(arr1)
//     return res.filter(function (v, index) {
//         return res.indexOf(v) == index
//     })
// }
// console.log(num(arr, arr1));


// 8 - masala

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// function num(arr) {
//     let juft = []
//     let toq = []
//     arr.forEach(element => {
//         if (element % 2 == 1) {
//             toq.push(element)
//         } else {
//             juft.push(element)
//         }
//     });
//     return { juft, toq }
// }
// console.log(num(arr));

// 9 - masala

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// let res = arr.includes(7)
// console.log(res);

// 10 - masala

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// function num(arr) {
//     let max = Math.max(...arr)
//     let min = Math.min(...arr)
//     return { max, min }
// }
// console.log(num(arr));

// === Obyekt bilan ishlash === //

//     11 - masala
// let car = {
//     c: 'Tesla',
//     b: 'Tayota',
//     a: 'BMW'
// }
// function obj(car) {
//     let keys = Object.keys(car).sort();
//     let res = {}
//     for (const key of keys) {
//         res[key] = car[key]
//     }
//     return res
// }
// console.log(obj(car));


// 12 - masala
// let user = {
//     name: 'Mirzatillo'
// };

// let entries = Object.entries(user);
// console.log(entries);

// 13 - masala

// let car = {
//     nmae: 'BMW',
// }
// let car1 = {
//     age: 2024
// }
// let res = Object.assign(car, car1)
// console.log(res);


// 14 - masala
// let arr1 = {
//     a: 1
// }
// let arr2 = {
//     b: 2
// }
// let res = arr1.a + arr2.b
// console.log(res);

// 15-masla

// let user ={
//     name:'Shohjahon',
//     age : 16
// }
// function obk(obj,oldKey,yangi){
//     if(oldKey in obj){
//         obj[yangi] = obj[oldKey];
//         delete obj[oldKey]
//     }
//     return obj
// }
// let res = obk(user, 'name' , 'fullName')
// console.log(res);


// 16-masala
// let arr ={
//     name :'Shohjahon'
// }
// delete arr.name
// console.log(arr);

// 17-masala

// let meva = [
//     { category: 'fruit', name: 'apple' },
//     { category: 'fruit', name: 'banana' },
//     { category: 'vegetable', name: 'carrot' },
//     { category: 'fruit', name: 'orange' },
//     { category: 'vegetable', name: 'broccoli' }
// ];
// function num(obj){
//  return obj.reduce((res,item) =>{
//     if(!res[item.category]){
//         res[item.category] =[]
//     }
//     res[item.category].push(item.name)
//     return res
//  })

// }
// console.log(num(meva));


// === String bilan ishlash === //

// 22-masala
// let arr ='Salom'
// function str(arr){
//     return arr.split('').reverse().join('')
// }
// console.log(str(arr));

// 23-masala

// let arr = 'Salom bolalar'
// function str(arr){
//     let words =arr.split(' ')
//     let res = ''
//    for (const word of words) {
//         if(word.length > res.length){
//             res = word
//         }
//    }
//    return res
// }
// console.log(str(arr));


// 25-masala
// let arr = 'Sa1lom'
// function str(arr){
//     return arr.split('')
//     .filter(function(v){
//         return ! /[0-9]/.test(v)
//     })
//     .join('')
// }
// console.log(str(arr));
