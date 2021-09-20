// function yayOrNay() {
//     return new Promise((resolve, reject) => {
//       const val = Math.round(Math.random() * 1)



  
//       val ? resolve('Lucky!!') : reject('Nope 😠');
//     });
//   }
  
//   async function msg() {
//     try {
//       const msg = await yayOrNay();
//       console.log(msg);
//     } catch(err) {
//       console.log(err);
//     }
//   }
  
//   msg(); 
//   msg(); 
//   msg(); 
//   msg(); 
//   msg()

// function yoyo() {
//   return new Promise((resolve,rejects)=>{
//     if(true) {
//       resolve("Good")
//     }else{
//       rejects("bad")
//     }
//   })
// }

// yoyo().then((ok)=>{
//   console.log(ok)
// }).catch((erroe)=>{
//   console.log(erroe)
// })

// async function smg() {
//   const s = await yoyo();
//   console.log(s)
// }

// smg();

const prom = new Promise((resolve,rejects) =>{
  if(false) {
    resolve("Good")
  }else{
    rejects("Bad")
  }
})

prom.then((ok)=>{
  console.log(ok)
}).catch((err)=>{
  console.log(err)
})
// async function smg() {
//   try{
//     const s = await prom
//   console.log(s)
//   }
//   catch(err){
//       console.log(err)
//   }
// }
// smg()
