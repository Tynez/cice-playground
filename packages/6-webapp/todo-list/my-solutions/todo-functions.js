let data = []

export function loadData() {
  const localStorage = window.localStorage
  data = JSON.parse(localStorage.getItem('data'))
  data.forEach((element, idx) => {
    const todoList = document.querySelector('#todo-list')

    const li = document.createElement('li')
    li.setAttribute('id', `task-${idx}`)
    li.innerHTML = `<p>${element.name}</p><button class="remove-task">Remove</button>`
    todoList.append(li)
  })
}

function saveData() {
  const localStorage = window.localStorage
  localStorage.setItem('data', JSON.stringify(data))
}

export function addTask() {
  const todoList = document.querySelector('#todo-list')
  const input = document.querySelector('#title-input')
  const li = document.createElement('li')
  const span = document.createElement('span')
  const p = document.createElement('p')
  const title = document.createTextNode(input.value)
  const text = document.createTextNode('remove')

  span.appendChild(text)
  p.appendChild(title)
  li.appendChild(p)
  li.appendChild(span)
  todoList.appendChild(li)

  span.addEventListener('click', () => {
    li.remove()
  })
  li.addEventListener('click', () => {
    li.classList.toggle('complete')
  })

  input.value = ''
}
