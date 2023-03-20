const textareaEl = document.getElementById("textarea")
const totalCounterEl = document.getElementById("total-counter")
const remainingCounterEl = document.getElementById("remining-counter")

textareaEl.addEventListener("keyup",()=>{
    updateCounter();
})

updateCounter();// initial value total and remain auto zero when trigger

function updateCounter(){
    totalCounterEl.innerText = textareaEl.value.length;

    remainingCounterEl.innerText = textareaEl.getAttribute("maxLength")
        - textareaEl.value.length;
}