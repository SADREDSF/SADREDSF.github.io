const hours = new Date().getHours() // get the current hour

const isMorning = hours >= 1 && hours < 12 // is it morning?
const isAfternoon = hours >= 12 && hours < 17 // is it afternoon?
const isEvening = hours >= 17 || hours < 1 // is it evening?

const timeWelcome = document.querySelector('div #welcome, p')

if(isMorning){
    timeWelcome.textContent = "Good Morning"
} else if(isAfternoon){
    timeWelcome.textContent = "Good Afternoon"
}else if (isEvening){
    timeWelcome.textContent = "Good Evening"
}

const key = "It's a secret to everybody."
localStorage.setItem(key, "DON'T TELL ANYONE HERE'S SOME RUPEES.")

const p = document.querySelector('p')

const urls = [
    'https://images.pexels.com/photos/1454360/pexels-photo-1454360.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/933964/pexels-photo-933964.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/1251861/pexels-photo-1251861.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/1370296/pexels-photo-1370296.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
].map(url => { (new Image()).src = url; return url })

const images = document.querySelectorAll('#carousel img')

const btnCarouselNext = document.getElementById("next");
btnCarouselNext.addEventListener('click', function() {
    currentImage++
    showImages()
})
const btnCarouselPrev = document.getElementById("prev");
btnCarouselPrev.addEventListener('click', function() {
    currentImage--
    showImages()
})

setInterval (ImageTimer, 5000)

function ImageTimer(){
    currentImage++
    showImages()
    setInterval(null)
}

let currentImage = 0
const showImages = () => {
    const offset = currentImage % urls.length
    images.forEach((image, index) => {
        const imageIndex = (index + offset + urls.length) % urls.length
        image.src = urls[imageIndex]
    })
}

showImages()

//localStorage.clear('todo-list')

function renderTodos() {
    const todos = JSON.parse(localStorage.getItem('todo-list')) || []
    const todoList = document.querySelector('.todo-list')
    
     // Clear the li's before we recreate them
     todoList.innerHTML = '';

    todos.forEach(todo => {
        // Create and add new list items to the DOM
        const li = document.createElement('li')
        li.textContent = todo.text + " - Completed: " + todo.completed
        todoList.append(li)
    })
}

const btnAddTodo = document.getElementById("addToDo");
btnAddTodo.addEventListener('click', () =>  {
    
    const input = document.getElementById('new-todo');
    // Get the list from local storage
    const todos = JSON.parse(localStorage.getItem('todo-list')) || []

    // Add a new item to the list
    todos.push({ text: input.value, completed: false })

    // Save the list to local storage
    localStorage.setItem('todo-list', JSON.stringify(todos))
    
    input.value = "";
    renderTodos();
})


renderTodos();

//const url = 'https://pokeapi.co/api/v2/pokemon/' + Math.floor(Math.random() * 150)
//const img = document.createElement('img')
//img.src = // url of the image from the 'front_default' property
//img.alt = // name of the pokemon
//parentElement.append(img)

const img = document.getElementById('pokemonImg');
let pokemonname = ""
const renderPokemon = (pokemonIndex) => {
    const url = 'https://pokeapi.co/api/v2/pokemon/' + pokemonIndex;

    fetch(url)
    .then(response => response.json())
    .then(data => {
        img.src = data.sprites.front_default
        img.alt = data.name
        pokemonname = data.name
        
        console.log("ID : " + randomIndex + " NAME: " + pokemonname + " URL : " + url)
    })
}

const randomIndex = Math.floor(Math.random() * 1024) + 1 
renderPokemon(randomIndex)

setTimeout(() => {
}, 3000)