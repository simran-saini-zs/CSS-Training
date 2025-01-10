//Write a function that returns a Promise that resolves with the string "Success" after 2 seconds.
async function solve()
{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("Success");
        },2000);
    })
};
let ans = await solve();
console.log(ans);

//Create two Promises: one that resolves with a number after 1 second and another that resolves with a string after 2 seconds. Use Promise.all() to log both results once they are resolved.
async function first()
{
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(1);
        },1000);
    })
};
async function second()
{
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve("this is a string");
        },2000);
    })
};

let [result1,result2] = await Promise.all([first(),second()]);
console.log(result1);
console.log(result2);