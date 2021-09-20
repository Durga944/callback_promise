function makeRequest(location) {
    return new Promise((resolve,rejects) => {
        console.log(`Making Request To ${location}`);
        if(location=="Google") {
            resolve("Say Hyy")
        }else{
            rejects("We can talk to only google")
        }
    })
}

function procceseRequest(response) {
    return new Promise((resolve,rejects)=>{
        console.log("Proccesing Request")
        resolve(`Extra Information ${response}`)
    })
}


// makeRequest("Google").then(response =>{
//         console.log("Response Recived")
//         return procceseRequest(response)
// }).then(procceseRequest=>{
//     console.log(procceseRequest)
// }).catch(error=>{
//     console.log(error)
// })

async function doWork(){
    try{
        response = await makeRequest("Facebook")
        console.log("Response Recived")

        const procceseRequest = await procceseRequest(response)
        console.log(procceseRequest)
    }catch (error){
        console.log(error)
    }
}
doWork();
