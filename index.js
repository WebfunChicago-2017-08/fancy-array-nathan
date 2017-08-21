function fancyArr(arr,reversed=false,symbol="-->"){
    if (reversed === true){
        for (var i=arr.length-1; i>=0; i--){
            console.log(i + " " +  symbol + " " + arr[i])
        }
    }else{
        for (var i=0; i<arr.length; i++){
            console.log(i + " " +  symbol + " " + arr[i])
        }
    }
}

fancyArr(["James","Jill","Jane","Jack"])

fancyArr(["James","Jill","Jane","Jack"],true)

fancyArr(["James","Jill","Jane","Jack"],false,":")