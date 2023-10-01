const element = document.querySelector('main')

if(element){
    element.remove()
}

const newHeader = document.createElement('h1')

console.log(newHeader)

newHeader.textContent = "Maganga is the champion"
newHeader.id = 'victory'

console.log(newHeader.textContent)

