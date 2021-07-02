// Infinity for loop


// var isRunning = true

// while(isRunning){
//     var rand= Math.floor(Math.random()* 10 +1 )
//     if (rand==9){
//     console.log('winner')
//     isRunning = false
// } else {
//     console.log('you have got' + rand )
// }
// }


for(;;){
        var rand= Math.floor(Math.random()* 10 +1 )
        if (rand==9){
        console.log('winner')
        break
    } else {
        console.log('you have got' + rand )
    }
    }

