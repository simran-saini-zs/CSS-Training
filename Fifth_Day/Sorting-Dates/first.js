let Dates = document.querySelector(".Dates")
let Asc_Dates = document.querySelector(".Asc-Dates")
let Des_Dates = document.querySelector(".Des-Dates")

let t_body = document.querySelector("tbody");

let dates = [];
let sorted_dates = [];
let r_sorted_dates = [];
for(let i = 0; i < 10; i++)
{
    let date = new Date(new Date().getFullYear(),Math.floor(Math.random()*12)+1,Math.floor(Math.random()*31)+1);
    dates.push(date);
}
sorted_dates = [...dates].sort((a, b) => a-b);
r_sorted_dates = [...dates].sort((a, b) => b-a);
for(let i = 0; i < 10; i++)
{
    const newRow = document.createElement("tr");
    let date_ele = document.createElement("td");
    let date_ele_sor = document.createElement("td");
    let date_ele_r_sor = document.createElement("td");
    date_ele.textContent = dates[i].toDateString();
    date_ele_sor.textContent = sorted_dates[i].toDateString();
    date_ele_r_sor.textContent = r_sorted_dates[i].toDateString();
    newRow.appendChild(date_ele);
    newRow.appendChild(date_ele_sor);
    newRow.appendChild(date_ele_r_sor);
    t_body.appendChild(newRow);
}
