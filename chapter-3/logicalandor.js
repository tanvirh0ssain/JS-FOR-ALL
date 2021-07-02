// var name = ''

// var fullname = ''

// if(name.length==0){
//     fullname= ' Tanvir'
// } else {
//     fullname = name
// }

var name = ''
var fullname = name || 'Tanvir'
console.log(fullname)

var isOK = true

isOK && console.log('everything is ok')

var isOK = false

isOK && console.log('everything is ok')