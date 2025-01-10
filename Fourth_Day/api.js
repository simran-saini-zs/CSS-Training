//Write a function that simulates three API calls using Promises. One should resolve, one should reject, and one should resolve after 3 seconds. Use Promise.allSettled() to log the results.
async function calls()
{
    try {
        
        let response1 =  await fetch('https://jsonplaceholder.typicode.com/comments/1');
    } catch (error) {
        console.log("error = ",error);
    }
    let response2 =  fetch('https://jsonpl.typicode.com/c=');
    let response3 = setTimeout(()=>{
        fetch('https://jsonplaceholder.typicode.com/comments/1').then(res => console.log("hi"));
    },3000);
    let ans = await Promise.allSettled([response1,response2,response3])
    ans.forEach((element)=>{
        console.log(element['status']);
    })
};
calls();