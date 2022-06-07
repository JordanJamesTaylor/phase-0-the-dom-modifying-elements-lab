// Write your code here!
let removeMain = document.getElementById('main')
removeMain.remove()

newHeader = document.createElement('h1')
newHeader.setAttribute('id', 'victory')
document.body.append(newHeader)

newHeader = document.querySelector('h1 #victory')

newHeader = document.getElementById('victory')

newHader.textContent("Jordan is the champion")