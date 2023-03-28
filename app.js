
const  tileDisplay = document.querySelector('.tile-container')
const  keyboard = document.querySelector('.keyboard-container')

const keys = [
    "Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P",
    "A", "S", "D", "F", "G", "H", "J", "K", "L",
    "ENTER", "Z", "X", "C", "V", "B", "N", "M", "⌫",
]

const handleClick = (key) => {
    console.log('clicked', key)
}

keys.forEach(key => {
    const buttonElement = document.createElement('button')
    buttonElement.textContent = key 
    buttonElement.setAttribute('id', key)
    buttonElement.addEventListener('click', handleClick)
    keyboard.append(buttonElement)
})
