const joke = document.getElementById("joke");
const button = document.getElementById("jokeBtn");

button.addEventListener("click", generateJoke);

generateJoke();

// using async/await function
async function generateJoke() {
  const config = {
    headers: {
      Accept: "application/json",
    },
  };

  const response = await fetch("https://icanhazdadjoke.com", config);

  const data = await response.json();

  joke.innerHTML = data.joke;
}
