// Multidimentitonal Array

var arr = [
    [70,87,76,88,85],
    [75,76,82,80,56],
    [67,87,65,71,55]

]

console.log(arr)

// console.log(arr[0][2])
// console.log(arr[1][3])

// for(var i=0;i<arr.length;i++){
//     console.log(arr[i])
// }
////

for(var i = 0 ; i < arr.length; i++){
    for(var j = 0 ;j<arr[i].length; j++){
        console.log('index ' + i +': ' + arr[i][j])
    }
}