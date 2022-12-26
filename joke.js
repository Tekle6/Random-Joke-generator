const jokeContainer = document.getElementById('joke')
const jokeButton = document.getElementById('btn')
const jokeUrl = "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw&type=single"

let getJoke = () =>
{
    
    fetch(jokeUrl)
    .then (data => data.json())
    .then((item) =>
    {
        jokeContainer.textContent = `${item.joke}`
        j
    })

    
}

jokeButton.addEventListener('click', getJoke)

