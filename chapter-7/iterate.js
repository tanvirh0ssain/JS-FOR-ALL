var obj = {
    x: 25,
    y: 35,
    z: 46
}

console.log('x'in obj)
console.log('p' in obj)

for (var i in obj){
    console.log(i)
    // console.log(obj[i])
    console.log(i + ':' +obj[i])
}