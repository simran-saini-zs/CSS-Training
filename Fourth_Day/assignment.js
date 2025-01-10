//Write a function that simulates three API calls using Promises. One should resolve, one should reject, and one should resolve after 3 seconds. Use Promise.allSettled() to log the results.
let promise1 = new Promise((resolve,reject)=>{
    let ans = true;
    if(ans)
    {
        resolve("this promise is resolved");
    }
    else
    {
        reject("this promise is rejected");
    }
});
let promise2 = new Promise((resolve,reject)=>{
    let ans = true;
    if(ans)
    {
        resolve("this promise is resolved");
    }
    else
    {
        reject("this promise is rejected");
    }
});
let promise3 = new Promise((resolve,reject)=>{
    let ans = true;
    if(ans)
    {
        resolve("this promise is resolved");
    }
    else
    {
        reject("this promise is rejected");
    }
});

Promise.all([promise1,promise2,promise3]).then((result)=>{
    console.log("All promises are accepted");
})
.catch((err)=>{
    console.log("One of the exception is rejected");
})


//Create a function that uses async/await to fetch data from three different APIs in sequence, ensuring each call waits for the previous one to complete.
let ans = 1;
async function fn1()
{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
        ans++;
        resolve("resolved")
    },2000);
    })
}
async function fn2()
{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
        ans++;
        resolve("resolved");
    },2000);
    })
}
let anss = await Promise.race([fn1(),fn2()]);
console.log(anss);
console.log(ans);

//Write a function that uses Promise.all() to fetch data from multiple sources and then uses Promise.race() on the results to find the fastest response.
let anss2 = await Promise.race([fn1(),fn2()]);
console.log(anss);
console.log(anss2);