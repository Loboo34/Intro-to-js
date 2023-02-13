let countEl = document.getElementById("count-el") //passing in an argument
let saveEl = document.getElementById("save-el")
console.log(countEl)


let count = 0;

function increment() { //function
    count += 1
    countEl.innerText = count
}

function save() {
    let countstr = count + " - "

    saveEl.textContent += countstr
    countEl.textContent = 0
    count = 0


}