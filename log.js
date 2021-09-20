const prom = new Promise(function(resolve,reject) {
    if(false) {
        resolve("right")
    }else{
        reject("wrong")
    }
})

prom.then((data) =>{
    console.log(data);
})

.catch((error)=>{
    console.log(error);
})

