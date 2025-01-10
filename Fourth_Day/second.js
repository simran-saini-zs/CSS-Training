let team1 = new Promise((resolve,reject)=>{
    if(true)
    {
        let rnum = Math.floor(Math.random()*10);
        setTimeout(()=>{
            console.log("team1 got points",rnum);
        },rnum);
        // resolve(rnum);
    }
});
let team2 = new Promise((resolve,reject)=>{
    if(true)
    {
        let rnum = Math.floor(Math.random()*10);
        setTimeout(()=>{
            console.log("team2 got points",rnum);
        },rnum);
        // resolve(rnum);
    }
});
let team3 = new Promise((resolve,reject)=>{
    if(true)
    {
        let rnum = Math.floor(Math.random()*10);
        setTimeout(()=>{
            console.log("team3 got points",rnum);
        },rnum);
        // resolve(rnum);
    }
});
let team4 = new Promise((resolve,reject)=>{
    if(true)
    {
       let rnum = Math.floor(Math.random()*10);
        setTimeout(()=>{
            console.log("team4 got points",rnum);
        },rnum);
        // resolve(rnum);
        
    }
});
const ans = await Promise.race([team1,team2,team3,team4]);
console.log(ans);
let val = Math.min(...ans);
//return time taken to complete a particular promise
//how to find which promise has resolved first
console.log("Team",val," Won");

// Define two promises
const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => reject('First promise resolved'), 100);
  });
  
  const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => resolve('Second promise resolved'), 500);
  });
  
  // Use Promise.race to find which one resolves first
  Promise.race([promise1, promise2])
    .then(result => {
      console.log('The first resolved promise:', result);
    })
    .catch(error => {
      console.log('The first rejected promise:', error);
    });
    Promise.any([promise1, promise2])
    .then(result => {
      console.log('The first resolved promise:', result);
    })
    .catch(error => {
      console.log('The first rejected promise:', error);
    });
