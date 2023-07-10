let count = 0;


document.getElementById("decrease").onclick= function(){
    count -= 1;
    document.getElementById("countLable").innerHTML = count;
}

// document.getElementById("reset").onclick= function(){
//     count=0
//     document.getElementById("countLable").innerHTML = 0;
// }
function reset(){
    count = 0
    document.getElementById("countLable").innerHTML = count;
}

document.getElementById("increase").onclick= function(){
    count += 1;
    document.getElementById("countLable").innerHTML = count;
}

let fullName = "Sunny Hossain";

let first = fullName.slice(0,fullName.indexOf(" "));
let last = fullName.slice(fullName.indexOf(" ")+1);

let change = fullName.charAt(3).toLowerCase()

console.log(change)
console.log(first);
console.log(last);

