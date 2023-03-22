// import {sum, diff} from './demo.js'
// const demo = require('./demo.js')

// const fs = require('fs')

// fs.writeFileSync('demo.txt', "This Is Demo File For Create File")
// const data = fs.readFileSync('demo.txt', 'utf-8')
// console.log(data)
// fs.writeFileSync('demo.txt', "Welcome To JavaScript")
// fs.appendFileSync('demo.txt', ' Welcome To Node Js Class')

// fs.renameSync('demo.txt', 'read.txt')
// fs.mkdirSync()

// console.log(demo)
// demo.sum(20, 30)
// demo.diff(30, 20)

// sum(20, 30)
// diff(30, 20)



const fs = require('fs')

// fs.writeFileSync('demo.txt', "This Is Demo File For Create File")
// fs.writeFile('bio.txt', 'This bio File Data', (err)=>{
//     console.log('File Created Succesfully')
// })
// const data = fs.readFileSync('bio.txt', 'utf-8')
// console.log(data)
// fs.mkdirSync('hello')
// // fs.rmdir()
// fs.rename()


const demo = require('./demo.js')
demo.sum(20, 30)
demo.diff(30, 20)