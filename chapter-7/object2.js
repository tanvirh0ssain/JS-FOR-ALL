
var point ={
    x: 12,
    y: 34,
    z: 53
}

point.x = 27
point.a =21
console.log(point)
console.log(point.d)
point['y'] =47

var prop = 'z'
point[prop]= 56
console.log(point)

delete point.y
console.log(point)