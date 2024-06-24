let input = document.getElementById("input")
let btn = document.getElementById("btn")
let list = document.getElementById("ul")
let todos = []
function clicked(){
    add()
    show()
}

function add(){
    todos.push(input.value)
    input.value = ""
}

function show(){
    list.innerHTML = ""
    let i = 1
    for (item of todos){
        list.innerHTML += `<li class="text-xl ">${i}. ${item}</li>`
        i++
    }
}




btn.addEventListener("click", clicked)