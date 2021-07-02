//break statement

var i = 0
while (i<10){
    console.log('tanvir')
    i++
}



while(true){
    var rand= Math.floor(Math.random()* 10 +1 )
    if (rand==9){
    console.log('winner')
    break
} else {
    console.log('you have got' + rand )
}
}



for(var i = 1;i<14; i++){
    if (i%9==0){
        break
    }else {
        console.log(i)
    }
}