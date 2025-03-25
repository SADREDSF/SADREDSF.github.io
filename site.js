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

const p = document.querySelector('p')

setTimeout(() => {
}, 3000)