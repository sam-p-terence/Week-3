console.log("Hello, World")

const message = document.querySelector("#message")


function addMovie(event) {
    event.preventDefault()
    let inputField = document.querySelector('input')

        const movie = document.createElement('li')

        const movieTitle = document.createElement('span')
        movieTitle.textContent = inputField.value
        movieTitle.addEventListener('click', crossOffMovie)
        movie.appendChild(movieTitle)

        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "X";
        deleteBtn.addEventListener("click", deleteMovie);
        movie.appendChild(deleteBtn);
      
        document.querySelector('ul').appendChild(movie)
        inputField.value = ""
    }

        document.querySelector("form").addEventListener("submit", addMovie);

function deleteMovie(event) {
    event.target.parentNode.remove()
    message.textContent = `${event.target.parentNode.textContent} has been deleted`
    revealMessage()
}

function crossOffMovie(event) {
    event.target.classList.toggle("checked")
    if (event.target.classList.contains("checked") === true) {
        message.textContent = `${event.target.textContent} was watched!!`
    } else {
        message.textContent = `${event.target.textContent} checked`
    }
    revealMessage()
}

function revealMessage() {
    message.classList.remove("hide");
    setTimeout(() => {
      message.classList.add("hide");
    }, 2000);
}

