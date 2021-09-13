//Define randomCode function 
function randomCode() {
const engCharCL = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
const engCharSL = engCharCL.map(x => x.toLowerCase())
const numChar = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
const totalChar = engCharCL.concat(engCharSL, numChar)

let randomCode = ''
for(i=0; i<5; i++){
    let index = Math.floor(Math.random()*totalChar.length)
    randomCode += totalChar[index]
}
//console.log('a'+randomCode)
    return randomCode
}

//export randomCode() function
module.exports = randomCode
