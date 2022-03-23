// apiScript.js
const API_URL = 'https://icanhazdadjoke.com/';

const piada = (data) => {
    const pai = document.getElementById('jokeContainer')
    pai.innerText = data.joke;
}

const fetchJoke = () => {
    const myObject = {
        method: 'GET',
        headers: {'Accept': 'application/json'}
    }
  fetch(API_URL, myObject)
    .then(response => response.json())
    .then(data => piada(data))
};

window.onload = () => fetchJoke();

