// search data

arr = [4, 6 , 8 , 9 ,23, 34 ,76]
var find = 9
for(var i = 0;i<arr.length;i++){
    if(arr[i]==find){
        console.log('Data found'+ i)
        break;
    }else{
        console.log('data not found')
    }

}

/////////

arr = [4, 6 , 8 , 9 ,23, 34 ,76]
var find = 9
var isfounn = false
for(var i = 0;i<arr.length;i++){
    if(arr[i]==find){
        console.log('Data found'+ i)
        isfound = true
        break;
    }

}

if(!isfound){
    console.log('data not found')
}