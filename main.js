// const fs = require('fs');

// function testReadFile(){
//     return new Promise(function(resolve){
//         fs.readFile("test.txt", "utf-8", function(err, data){
//             resolve(data)
//         })
//     })
// }

// function onDone(data){
//     console.log(data)
// }

// testReadFile().then(onDone)

const testfunc = ()=> {
    let p = new Promise (function(resolve){
        setTimeout(resolve, 3000)
    })
    return p 
}

const value = testfunc()
value.then(function(){
    console.log("promise fulfilled")
})