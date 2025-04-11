// Artworks data as arrays
let artTitles = ["Starry Night", "Mona Lisa", "The Scream"];
let artArtists = ["Vincent van Gogh", "Leonardo da Vinci", "Edvard Munch"];
let artImages = ["imgs/starrynight.jpg", "imgs/monalisa.jpg", "imgs/thescream.jpg"];
let artDescriptions = [
    "A swirling night sky masterpiece from 1889.",
    "The iconic portrait with a mysterious smile, circa 1503.",
    "An expressionist depiction of anxiety from 1893."
];

// Artists data as arrays
let artistNames = ["Vincent van Gogh", "Leonardo da Vinci", "Edvard Munch"];
let artistBios = [
    "Post-Impressionist known for bold colors and emotional depth.",
    "Renaissance genius, painter, and inventor.",
    "Norwegian symbolist painter of intense emotion."
];
let artistImages = ["imgs/vin.webp", "imgs/vinch.webp", "imgs/munch.jpg"];

// Load artworks on Gallery page
function loadArtworks() {
    let container = document.getElementById("gallery-container");
    for (let i = 0; i < artTitles.length; i++) {
        let card = document.createElement("div");
        card.className = "col";
        card.innerHTML = `
            <div class="card h-100 position-relative" style="transform-style: preserve-3d;">
                <img src="${artImages[i]}" class="card-img-top" alt="${artTitles[i]}">
                <div class="card-body d-flex flex-column">
                    <h5 class="card-title">${artTitles[i]}</h5>
                    <p class="card-text flex-grow-1">By ${artArtists[i]}</p>
                    <button class="btn btn-primary mt-auto zoom-button" onclick="showDetails(${i})">Learn More</button>
                </div>
            </div>`;
        container.appendChild(card);
    }
}

// Load artists on Artists page
function loadArtists() {
    let container = document.getElementById("artist-container");
    for (let i = 0; i < artistNames.length; i++) {
        let card = document.createElement("div");
        card.className = "col";
        card.innerHTML = `
            <div class="card h-100">
                <img src="${artistImages[i]}" class="card-img-top" alt="${artistNames[i]}">
                <div class="card-body">
                    <h5 class="card-title">${artistNames[i]}</h5>
                    <p class="card-text">${artistBios[i]}</p>
                    <a href="gallery.html" class="btn btn-primary">View Works</a>
                </div>
            </div>`;
        container.appendChild(card);
    }
}

// Show artwork details with slide-in effect
function showDetails(index) {
    let details = document.getElementById("art-details");
    details.innerHTML = `
        <h3 class="h4 fw-bold text-primary">${artTitles[index]}</h3>
        <p class="text-muted">${artDescriptions[index]}</p>
    `;
    details.style.display = "block";
    details.style.animation = "slideInRight 0.5s ease-out";
    setTimeout(() => details.style.animation = "", 500);
}

// Filter artworks by artist
function filterArtworks(artist) {
    let cards = document.querySelectorAll("#gallery-container .card");
    for (let i = 0; i < cards.length; i++) {
        let cardArtist = cards[i].querySelector(".card-text").textContent.split("By ")[1];
        if (artist === "all" || cardArtist === artist) {
            cards[i].parentElement.style.display = "block";
        } else {
            cards[i].parentElement.style.display = "none";
        }
    }
}

// Load content based on page
document.addEventListener("DOMContentLoaded", function() {
    if (document.getElementById("gallery-container")) {
        loadArtworks();
    } else if (document.getElementById("artist-container")) {
        loadArtists();
    }
});