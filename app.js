function onReady() {
  const addToDoForm = document.getElementById('addToDoForm')
  const newToDoText = document.getElementById('newToDoText')
  const toDoList = document.getElementById('toDoList')

  addToDoForm.addEventListener('submit', () => {
    event.preventDefault()

    // get the text
    let title = newToDoText.value

    // create a new li
    let listItem = document.createElement('li')

    let text = document.createElement('p')

    text.textContent = title

    // create a new input
    let checkbox = document.createElement('input')
    checkbox.classList.add('mdl-checkbox__input')
    // set the input's type to checkbox
    checkbox.type = 'checkbox'

    //create a new button
    let deletebtn = document.createElement('button')
    deletebtn.classList.add('mdl-button')
    deletebtn.classList.add('mdl-js-button')
    deletebtn.classList.add('mdl-button--raised')
    deletebtn.classList.add('mdl-button--colored')
    deletebtn.classList.add('mdl-button--mini-fab')

    deletebtn.innerHTML = 'Delete'

    listItem.classList.add('mdl-list__item')

    // SPAN ELEMENTS
    let span1 = document.createElement('span')
    let span2 = document.createElement('span')
    let span3 = document.createElement('span')

    span1.appendChild(checkbox)
    span2.textContent = title
    span3.appendChild(deletebtn)

    span2.classList.add('mdl-list__item-primary-content')

    listItem.appendChild(span1)
    listItem.appendChild(span2)
    listItem.appendChild(span3)

    // attach the li to the ul
    toDoList.appendChild(listItem)

    //empty the input
    newToDoText.value = ''

    deletebtn.addEventListener('click', () => {
      listItem.remove()
    })

    checkbox.addEventListener('click', () => {
      if (checkbox.checked) {
        span2.classList.add('done')
        deletebtn.style.display = 'none'
      } else {
        span2.classList.remove('done')
        deletebtn.style.display = 'inline-block'
      }
    })
  })
}

window.onload = function () {
  onReady()
}
