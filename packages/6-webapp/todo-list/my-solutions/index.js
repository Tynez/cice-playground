import { addTask, loadData } from './todo-functions.js'

const onload = (function init() {
  if (localStorage.getItem('data') !== null) {
    loadData()
  }
  const submitButton = document.querySelector('#submit')
  submitButton.addEventListener('click', () => {
    addTask()
  })
})()
