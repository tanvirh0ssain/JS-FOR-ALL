// && || !

// A || B
// true && true = true
// true && false = false 
// false && true = false 
// false && false = false

// true || true = true 
// true || false =  true
// false || true =  true
// false || false = false

var a = 10
var b = 20
var c = 40 
var d = 30

if (a>b && c > d){
    console.log('A is greater than B and C is greater than D')
}else{
    console.log(' At least one condition is false')
}

var a = 25
var b = 20
var c = 40 
var d = 30

if (a>b && c > d){
    console.log('A is greater than B and C is greater than D')
}else{
    console.log(' At least one condition is false')
}

var a = 10
var b = 20
var c = 40 
var d = 30

if (a>b || c > d){
    console.log('A is greater than B or C is greater than D')
}else{
    console.log(' At least one condition is false')
}

var check = !(a>b)
console.log(check)

var check = (a>b)
console.log(check)

var check = !!(a>b)
console.log(check)