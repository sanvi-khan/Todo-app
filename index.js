// finding element
const form=document.querySelector("form");
const input = form.querySelector("input");
const button = form.querySelector("button");
const todoAdded = document.querySelector("p");
const list = document.querySelector("ul");


form.addEventListener("submit", (e) => {
    e.preventDefault();
    const uid = Date.now();
    const value = input.value;
    const todoList=document.createElement("li");
    todoList.id=uid;
    todoList.innerHTML=`
    <span>${value}</span>
    <span><button id="delete"><i class="fa fa-trash"></i></button></span>`
    list.appendChild(todoList);
    todoAdded.innerText="Todo is added"
    todoAdded.classList.add("para-added")
    setTimeout(()=>{
        todoAdded.innerText="";
        todoAdded.classList.remove("para-added")
    },1000)
    const deleteButton=todoList.querySelector("#delete");

    
    // delete button ....
    deleteButton.addEventListener("click",(e)=>{
        const listItem=e.target.parentElement.parentElement.parentElement;
        list.removeChild(listItem);
        todoAdded.innerText="Todo is deleted"
        todoAdded.classList.add("para-remove")
        setTimeout(()=>{
            todoAdded.innerText="";
            todoAdded.classList.remove("para-remove")
        },1000)
    })

})

