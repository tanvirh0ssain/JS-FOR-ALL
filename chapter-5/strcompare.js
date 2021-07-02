//string comparison

var a = 'abd'
var b ='hfj'

console.log(a<b)

/// small letter greater thab block letter

///  a smaller than z ; same goes to block letter

/// a>Z
console.log('001'== 1)


// String methods

var a = ' I am'
var b = ' Tanvir'

var c= a.concat(b)
console.log(c)

////////////

var a = ' I am'
var b = ' Tanvir'

var c= a.concat(b)
var d = c.substr(7,3)
console.log(d)
/////

var a = ' I am'
var b = ' Tanvir'

var c= a.concat(b)
console.log(c.charAt(4))
//////\


var a = ' I am'
var b = ' TANVIR'

var c= a.concat(b)
console.log(c.startsWith(' I am'))
console.log(c.endsWith('Tanvir'))

console.log(a.toUpperCase())
console.log(b.toLowerCase())

console.log('     qazwsxxedc    ')
console.log('     qazwsxxedc    '.trim())

console.log(c.split(''))

////////////////////////////////

var str= 'some string'

var length = 0
while(true){
    if (str.charAt(length)== ''){
        break
    }else{
        length++
    }
}
console.log(length)
console.log(str.length)
////
console.log('gfnsgbhssgncnfhdjd'.length)