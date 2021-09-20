const pro=new Promise((resolve,rejects)=>{
    if (false){
        resolve("manvi")
    }
    else{
        rejects ("dugu")
    }

})
pro.then((b)=>{
    console.log(b)
}).catch((c)=>{
    console.log(c)
})
