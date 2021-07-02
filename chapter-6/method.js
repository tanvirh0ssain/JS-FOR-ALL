var arr =[2, 4, 7, 17, 32, 43]
var arr2 = [3, 5, 6, 8, 12, 345]

console.log(arr)

// console.log(arr.join())
// console.log(arr.join(''))
// console.log(arr.join(', '))

// arr.fill(01)
// console.log(arr)

var arr3 = arr.concat(arr2)
console.log(arr3)

console.log(Array.isArray(arr))

var arr4 = Array.from(arr)
console.log(arr4)

//////////////////////////////////

var a = [1, 3, 5]
var b = a
b[0] = 4
console.log(a)
////////////////

var c = [1, 3, 5]
var d = Array.from(c)
d[0] = 4
console.log(c)
console.log(d)



