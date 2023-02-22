const deleteBtn = document.querySelector('.delete')
const comfirmBtn = document.querySelector('.comfirm')
const cancel = document.querySelector('.cancel')
const modal = document.querySelector('body')
let todo = document.querySelector('.todo')

const todoList = ["Learn React"]


window.addEventListener("DOMContentLoaded", () => {
    todo.innerHTML = todoList[0];
})

deleteBtn.addEventListener('click', function () {
    modal.classList.add('show')
})

cancel.addEventListener('click', function () {
    modal.classList.remove('show')
})


