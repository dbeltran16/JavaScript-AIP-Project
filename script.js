// =====================
// 1️⃣ Dog API
// Fetches a random dog image
// =====================
async function getDogImage() {
  try {
    const response = await fetch("https://dog.ceo/api/breeds/image/random");
    const data = await response.json();

    // Show image in the page
    document.getElementById("dog-output").innerHTML = `
      <img src="${data.message}" alt="Random Dog" />
    `;
  } catch (error) {
    console.error(error);
    document.getElementById("dog-output").textContent = "Failed to load dog image.";
  }
}

// =====================
// 2️⃣ Cat API
// Fetches a random cat image
// =====================
async function getCatImage() {
  try {
    const response = await fetch("https://api.thecatapi.com/v1/images/search");
    const data = await response.json();

    document.getElementById("cat-output").innerHTML = `
      <img src="${data[0].url}" alt="Random Cat" />
    `;
  } catch (error) {
    console.error(error);
    document.getElementById("cat-output").textContent = "Failed to load cat image.";
  }
}

// =====================
// 3️⃣ Weather API
// Fetches current weather for New York (example)
// =====================
async function getWeather() {
  try {
    const response = await fetch(
      "https://api.open-meteo.com/v1/forecast?latitude=40.71&longitude=-74.01&current_weather=true"
    );
    const data = await response.json();

    const temp = data.current_weather.temperature;
    const wind = data.current_weather.windspeed;

    document.getElementById("weather-output").innerHTML = `
      <p>🌡️ Temperature: ${temp}°C</p>
      <p>💨 Wind Speed: ${wind} km/h</p>
    `;
  } catch (error) {
    console.error(error);
    document.getElementById("weather-output").textContent = "Failed to load weather.";
  }
}

// =====================
// 4️⃣ Currency API
// Shows USD → EUR exchange rate
// =====================
async function getExchangeRates() {
  try {
    const response = await fetch("https://api.apyhub.com/data/convert/currency/multiple");
    const data = await response.json();

    const rate = data.rates.EUR;

    document.getElementById("currency-output").innerHTML = `
      <p>💱 1 USD = ${rate} EUR</p>
    `;
    
  } catch (error) {
    console.error(error);
    document.getElementById("currency-output").textContent = "Failed to fetch exchange rates.";
  }
}

// =====================
// 5️⃣ Movies API
// Fetch top 5 trending movies
// =====================
async function getMovies() {
  try {
    const apiKey = "YOUR_TMDB_API_KEY"; // Replace with your TMDB API key
    const response = await fetch(
      `https://api.themoviedb.org/3/trending/movie/week?api_key=${apiKey}`
    );
    const data = await response.json();

    const movies = data.results.slice(0, 5);

    // Show movie cards
    document.getElementById("movies-output").innerHTML = movies.map(movie => `
      <div class="movie-card">
        <img src="https://image.tmdb.org/t/p/w200${movie.poster_path}" alt="${movie.title}" />
        <p>🎬 ${movie.title} (${movie.release_date?.slice(0,4) || "N/A"})</p>
      </div>
    `).join("");
  } catch (error) {
    console.error(error);
    document.getElementById("movies-output").textContent = "Failed to load movies. Check API key.";
  }
}

// =====================
// 6️⃣ GitHub API
// Fetch GitHub user info
// =====================
async function getGitHubUser() {
  const username = prompt("Enter GitHub username:");
  if (!username) return;

  try {
    const response = await fetch(`https://api.github.com/users/${username}`);
    const data = await response.json();

    if (data.message === "Not Found") {
      document.getElementById("github-output").textContent = "User not found.";
      return;
    }

    document.getElementById("github-output").innerHTML = `
      <img src="${data.avatar_url}" width="80" />
      <p> ${data.login}</p>
      <p> Repos: ${data.public_repos}</p>
    `;
  } catch (error) {
    console.error(error);
    document.getElementById("github-output").textContent = "Failed to fetch GitHub user.";
  }
}

// =====================
// 7️⃣ Joke API
// Fetch a random joke
// =====================
async function getJoke() {
  try {
    const response = await fetch("https://v2.jokeapi.dev/joke/Any");
    const data = await response.json();

    const joke = data.type === "single" ? data.joke : `${data.setup}<br>${data.delivery}`;

    document.getElementById("joke-output").innerHTML = `<p>${joke}</p>`;
  } catch (error) {
    console.error(error);
    document.getElementById("joke-output").textContent = "Failed to fetch joke.";
  }
}

// =====================
// Public API
// Fetch info about one public API
// =====================
async function getPublicApiInfo() {
  try {
    const response = await fetch("https://api.publicapis.org/entries");
    const data = await response.json();

    const api = data.entries[0];

    document.getElementById("publicapi-output").innerHTML = `
      <p>🔗 <a href="${api.Link}" target="_blank">${api.API}</a></p>
      <p>${api.Description}</p>
      <p>Category: ${api.Category}</p>
    `;
  } catch (error) {
    console.error(error);
    document.getElementById("publicapi-output").textContent = "Failed to fetch public API info.";
  }
}
