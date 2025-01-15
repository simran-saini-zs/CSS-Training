//1) Write a function that returns a Promise that resolves with the string "Success" after 2 seconds.
let promise = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("Success");
    },2000);
});

promise.then((res)=>{
    console.log(res);
})

//2) Create two Promises: one that resolves with a number after 1 second and another that resolves with a string after 2 seconds. Use Promise.all() to log both results once they are resolved.
let promise1 = new Promise((resolve)=>{
    setTimeout(()=>{
        resolve(1);
    },1000);
});
let promise2 = new Promise((resolve)=>{
    setTimeout(()=>{
        resolve("Hi");
    },1000);
});
Promise.all([promise1,promise2]).then((res)=>{
    res.forEach((ele)=>{
        console.log(ele);
    });
});

//3) Write a function that simulates three API calls using Promises. One should resolve, one should reject, and one should resolve after 3 seconds. Use Promise.allSettled() to log the results.
async function calls()
{
    try {
        
        let response1 =  fetch('https://jsonplaceholder.typicode.com/comments/1');
        let response2 =  fetch('https://jsonpl.typicode.com/c=');
        let response3 = setTimeout(()=>{
            fetch('https://jsonplaceholder.typicode.com/comments/1').then(res => console.log("hi"));
        },3000);
        let ans = await Promise.allSettled([response1,response2,response3])
        ans.forEach((element)=>{
            console.log(element['status']);
        })
    } catch (error) {
        console.log("error = ",error);
    }
};
calls();

//4) Create two Promises that resolve after different timeouts. Use Promise.race() to log the value of the first one that resolves.

let promise_1 = new Promise((resolve)=>{
    setTimeout(()=>{
        resolve("First-Promise Resolved first!");
    },2000);
});
let promise_2 = new Promise((resolve)=>{
    setTimeout(()=>{
        resolve("Second-Promise Resolved first!");
    },3000);
});

Promise.race([promise_1,promise_2]).then((res)=>{
    console.log(res);
})

//5) Write a function that uses Promise.all() with three Promises: two that resolve and one that rejects. Log the results and observe what happens to the output.

let promise51 = new Promise((resolve)=>{
    resolve("Resolved");
});
let promise52 = new Promise((resolve)=>{
    resolve("Resolved");
});
let promise53 = new Promise((resolve,reject)=>{
    reject("Rejected");
});

Promise.all([promise51,promise52,promise53]).then((res)=>{
    console.log(res);
})
.catch((err)=>{
    console.log("Error=",err);
})

//6) Create a function that uses async/await to fetch data from three different APIs in sequence, ensuring each call waits for the previous one to complete.

async function api_calls()
{
    let response1 = await fetch('url');
    let response2 = await fetch('url');
    let response3 = await fetch('url');
}

//7) Write a program that simulates a race condition with two asynchronous functions that increment a shared variable. Log the final value of the shared variable after all operations are complete.

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

//8) Write a function that uses Promise.all() to fetch data from multiple sources and then uses Promise.race() on the results to find the fastest response.
let anss2 = await Promise.race([fn1(),fn2()]);
console.log(anss);
console.log(anss2);

//9) Create a function that returns a Promise that randomly resolves or rejects. Use Promise.allSettled() to call this function multiple times and log the results.

async function fn()
{
    return new Promise((resolve,reject)=>{
        let num = Math.floor(Math.random()*10)+1;
        if(num == 3|| num == 5 || num == 6)
        {
            resolve("Resolved");
        }
        else
        {
            reject("Reject");
        }
    });
};

let ansk = await Promise.allSettled([fn(),fn(),fn()]);
console.log(ansk);

//10) Write a series of Promises that chain together to perform a calculation (e.g., adding two numbers, then multiplying the result by a third number). Log the final result.
async function series(a,b,c)
{
    let sum = await new Promise((resolve,reject)=>{
        resolve(a+b);
    });
    let ans = await new Promise((resolve,reject)=>{
        resolve(sum*c);
    })
    console.log(ans);
}
series(3,4,2);