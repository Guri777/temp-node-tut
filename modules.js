// const amount = 12
// if(amount < 10){
//     console.log("patara")
// }else{
//     console.log("didi")
// }
// console.log("opaaaaaaaaaaaa")
// console.log(__dirname,"directory name")
// console.log(__filename)
// console.log(require)
// console.log(module)
// console.log(process)

const {john,peter} = require('./name')
const sayHi = require('./utils')
const {list,singleperson} = require('./alternative-names')
// console.log(data)
for(let i of list){
    console.log(sayHi(i))
}
sayHi(singleperson.name)
sayHi("susan")
sayHi(john)
sayHi(peter)