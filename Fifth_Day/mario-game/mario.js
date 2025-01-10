let mario = document.querySelector(".mario");
console.log(screen.width);
let positions = [];
for(let i = 0; i < screen.width; i+=10)
{
    positions.push(i);
}

let arr2 = [];
setInterval(()=>{
    let val = positions.shift();
    mario.style.marginLeft = val+"px";
    console.log(val);
    console.log(positions);
    arr2.unshift(val);
    if(positions.length == 0)
    {
        positions = arr2.reverse();
        arr2 = [];
        mario.style.marginLeft = "0px";
        console.log(positions.length,"Position");
    }
},50)