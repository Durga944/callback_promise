const prom = new Promise(function(resolve,rejects){
    var i = 1;
    sum = 0;
    while(i<=10){
        sum=sum+i
        i++
    }
    // console.log(sum);
    if(false){
        resolve(sum)
    }else{
        rejects("byy")
    }
})

prom.then((data)=>{
    console.log(data);
})
.catch((err)=>{
    console.log(err);
});

// async function smg(){
//     var x = await prom
//     console.log(x);
// }
// smg();
