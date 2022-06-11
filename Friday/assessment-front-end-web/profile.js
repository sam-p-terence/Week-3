


const favoriteButtons = document.querySelectorAll('button')

for(let i = 0; i < favoriteButtons.length; i++) {
    favoriteButtons[i].addEventListener('click', (e) => {
        alert(`My favorite ${e.target.id} is ${e.target.value}`)
    } )
}