let id = 0

function onReady() {
  let toDos = []
  const addToDoForm = document.getElementById('addToDo')

  let LS = localStorage.getItem('todos')

  if (LS != null && LS != '[]') {
    toDos = JSON.parse(LS)
    id = toDos[toDos.length - 1].id + 1
    renderTheUI()
  }

  function createNewToDo() {
    const newToDoText = document.getElementById('new-todo-input')

    if (!newToDoText.value) {
      console.log('N/A')
      return
    }

    const todo = {
      id: id++,
      title: newToDoText.value,
      complete: false
    }

    toDos.push(todo)
    console.log('added to list')

    newToDoText.value = ''

    renderTheUI()

    updateLS()
  }

  function updateLS() {
    /* Add to local storage */
    localStorage.setItem('todos', JSON.stringify(toDos))
  }

  function renderTheUI() {
    const toDoList = document.getElementById('toDoList')

    toDoList.textContent = ''

    toDos.forEach((todo) => {
      const newLi = document.createElement('li')
      newLi.classList.add('mdl-list__item')
      const span = document.createElement('span')
      span.classList.add('mdl-list__item-primary-content')
      const deleteBtn = document.createElement('button')

      const icon = document.createElement('i')
      icon.innerText = 'cancel'
      icon.classList.add('material-icons')

      deleteBtn.classList.add('mdl-chip__action')
      deleteBtn.appendChild(icon)

      const checkbox = document.createElement('input')
      checkbox.classList.add('mdl-checkbox__input')
      checkbox.type = 'checkbox'

      checkbox.checked = todo.complete

      toDoList.appendChild(newLi)
      newLi.appendChild(span)
      span.appendChild(checkbox)
      span.append(todo.title)
      span.appendChild(deleteBtn)

      checkbox.addEventListener('click', () => {
        todo.complete = !todo.complete
        updateLS()
      })

      deleteBtn.addEventListener('click', (e) => {
        toDos = toDos.filter((t) => t.id != todo.id)
        updateLS()
        renderTheUI()
      })
    })
  }

  addToDoForm.addEventListener('submit', (event) => {
    event.preventDefault()
    createNewToDo()
  })

  renderTheUI()
}

window.onload = function () {
  onReady()
}
