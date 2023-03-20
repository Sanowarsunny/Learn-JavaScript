const hourID = document.getElementById("hour");
const minuteID = document.getElementById("minutes");
const secondID = document.getElementById("seconds");
const ampmID = document.getElementById("ampm");

function updateClock(){
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    
    if(h >= 12){
        h = h - 12;
        ampmID.innerHTML = 'PM';
    }else{
        ampmID.innerHTML = 'AM';
    }

    h = h < 10 ? "0" + h : h;
    m = m < 10 ? "0" + m : m;
    s = s < 10 ? "0" + s : s;

    hourID.innerText = h;
    minuteID.innerText = m;
    secondID.innerText = s;
    ampmID,(innerText = ampm);

    setTimeout(() => {
        updateClock();
    },1000)
}

updateClock();
