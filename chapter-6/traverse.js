// traverse an array

var arr = [2,4,5,7,9]

// arr[0]
// arr[1]
// arr[2]
// arr[3]
// arr[4]
// arr[arr.length-1]

for(var i = 0;i< arr.length;i++){
    console.log(arr[i])
}
///////

for(var i = 0;i< arr.length;i++){
    arr[i]=arr[i]+3
}
console.log(arr)

//sum

var sum = 0
for (var i =0; i<arr.length;i++){
    sum+=arr[i]
}

console.log(sum)

for (var i =0; i<arr.length;i++){
    if(arr[i]%2==0){
        console.log(arr[i])
    }
}

