// reverse Array

var arr = [ 2, 4 , 5, 8]

for(var i = 0 ; i< arr.length/2;i++){
    var temp = arr[i]
    arr[i] = arr[arr.length - 1 -i]
    arr[arr.length- 1 - i] = temp
}

console.log(arr)

var arr2 =[2,3,6,8,32,56]
console.log(arr2.reverse())