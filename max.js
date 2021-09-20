const prom = new Promise(function(resolve, reject) {
    var readlineSync = require('readline-sync');
    var num1 = readlineSync.questionInt("enter the num1:--")
    var num2 = readlineSync.questionInt("enter the num2:--")
    var num3 = readlineSync.questionInt("enter the num3:--")
    var max;
    if(num1 > num2 && num1 > num3) {
        max = num1;
        resolve(max)
    }
    else if (num2 > num1 && num2 > num3) {
        max= num2;
        resolve(max)
    }
    else {
        max = num3;
        reject(max)
    }
    
})
prom.then((data)=> {
    console.log(data)

})

.catch((error) => {
    console.log(error)
})
