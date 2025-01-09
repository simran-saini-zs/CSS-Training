let ans  = new Promise((resolve,reject)=>{
    if(true)
    {
        resolve(setTimeout(()=>{
        console.log("Delayed");
        },4000));
    }
    else
    {
        reject("Sorry");
    }
});
async function delay(time)
{
    setTimeout(()=>{
        console.log("after 4 sec");
    },time);
}
let ans1 = await delay(4000);