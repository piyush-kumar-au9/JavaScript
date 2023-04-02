Promise.resolve().then(()=>{
    setTimeout(()=>{

        console.log("Timeout 1");
    }, 0)
    console.log("Promise 1");
})


setTimeout(()=>{
    console.log("Timeout2");
    Promise.resolve().then(()=>{
        console.log("Promise 2")
    })
}, 0)

console.log("Hello world");