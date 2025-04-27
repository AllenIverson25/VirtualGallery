// Artwork data arrays
const artTitles = ["Starry Night", "Mona Lisa", "The Scream", "The Persistence of Memory", "San Giorgio Maggiore at Dusk"];
const artArtists = ["Vincent van Gogh", "Leonardo da Vinci", "Edvard Munch", "Salvador Dali", "Claude Monet"];
const artImages = ["imgs/starrynight.jpg", "imgs/monalisa.jpg", "imgs/thescream.jpg", "imgs/memory.jpg", "imgs/sunset.jpg"];
const artDescriptions = [
    "A swirling night sky masterpiece from 1889.",
    "The iconic portrait with a mysterious smile, circa 1503.",
    "An expressionist depiction of anxiety from 1893.",
    "A surrealist masterpiece featuring melting clocks in a dreamlike landscape.",
    "A breathtaking sunset view of the Venetian church, painted with Monet's signature impressionist style."
];
const artYears = [1889, 1503, 1893, 1931, 1908];
const artMediums = ["Oil on canvas", "Oil on poplar panel", "Oil, tempera, and pastel on cardboard", "Oil on canvas", "Oil on canvas"];
const artDimensions = ["73.7 cm × 92.1 cm", "77 cm × 53 cm", "91 cm × 73.5 cm", "24.1 cm × 33 cm", "65.2 cm × 92.4 cm"];

// Artist data arrays
const artistNames = ["Vincent van Gogh", "Leonardo da Vinci", "Edvard Munch", "Claude Monet", "Salvador Dali"];
const artistBios = [
    "Post-Impressionist known for bold colors and emotional depth.",
    "Renaissance genius, painter, and inventor.",
    "Norwegian symbolist painter of intense emotion.",
    "French Impressionist master who revolutionized outdoor painting.",
    "Spanish Surrealist known for his striking and bizarre images."
];
const artistImages = ["imgs/vin.webp", "imgs/vinch.webp", "imgs/munch.jpg", "imgs/claude.webp", "imgs/bet.jpg"];
const artistEras = ["post-impressionism", "renaissance", "expressionism", "impressionism", "surrealism"];
const artistNationalities = ["Dutch", "Italian", "Norwegian", "French", "Spanish"];
const artistLifespans = ["1853-1890", "1452-1519", "1863-1944", "1840-1926", "1904-1989"];

// Favorites array stored in localStorage
let favorites = JSON.parse(localStorage.getItem('artFavorites')) || [];

// Loads artworks into gallery page
function loadArtworks() {
    const container = document.getElementById("gallery-container");
    if (!container) return;
    container.innerHTML = '';
    for (let i = 0; i < artTitles.length; i++) {
        container.innerHTML += `
            <div class="col-12 col-md-6 col-lg-4 mb-4">
                <div class="card h-100 artwork-card" data-artist="${artArtists[i]}">
                    <div class="card-img-wrapper">
                        <img src="${artImages[i]}" class="card-img-top" alt="${artTitles[i]}" loading="lazy">
                    </div>
                    <div class="card-body d-flex flex-column">
                        <h5 class="card-title">${artTitles[i]}</h5>
                        <p class="card-text flex-grow-1">By ${artArtists[i]}</p>
                        <button class="btn btn-primary mt-auto" onclick="showArtworkModal(${i})">Learn More</button>
                    </div>
                </div>
            </div>`;
    }
}

// Loads artists into artists page
function loadArtists() {
    const container = document.getElementById("artist-container");
    if (!container) return;
    container.innerHTML = '';
    for (let i = 0; i < artistNames.length; i++) {
        container.innerHTML += `
            <div class="col-12 col-md-6 col-lg-4 mb-4" data-era="${artistEras[i]}">
                <div class="card h-100 artist-card">
                    <div class="card-img-wrapper">
                        <img src="${artistImages[i]}" class="card-img-top" alt="${artistNames[i]}" loading="lazy">
                    </div>
                    <div class="card-body">
                        <h5 class="card-title">${artistNames[i]}</h5>
                        <p class="card-text">${artistBios[i]}</p>
                        <button class="btn btn-primary" onclick="showArtistModal(${i})">View Profile</button>
                    </div>
                </div>
            </div>`;
    }
}

// Loads featured artworks into carousel on index page
function loadFeaturedCarousel() {
    const container = document.getElementById("carouselItems");
    if (!container) return;
    container.innerHTML = '';
    for (let i = 0; i < artTitles.length; i++) {
        container.innerHTML += `
            <div class="carousel-item ${i === 0 ? 'active' : ''}">
                <div class="featured-item">
                    <img src="${artImages[i]}" class="d-block w-100" alt="${artTitles[i]}" loading="lazy">
                    <div class="featured-info text-white p-4">
                        <h3>${artTitles[i]}</h3>
                        <p>By ${artArtists[i]}</p>
                        <a href="gallery.html" class="featured-link text-white">View More <i class="fas fa-arrow-right"></i></a>
                    </div>
                </div>
            </div>`;
    }
}

// Shows artwork modal with details
function showArtworkModal(index) {
    const modal = document.getElementById('artworkModal');
    if (!modal) return;
    document.getElementById('modalArtworkImage').src = artImages[index];
    document.getElementById('modalArtworkTitle').textContent = artTitles[index];
    document.getElementById('modalArtworkArtist').textContent = artArtists[index];
    document.getElementById('modalArtworkYear').textContent = artYears[index];
    document.getElementById('modalArtworkMedium').textContent = artMediums[index];
    document.getElementById('modalArtworkDimensions').textContent = artDimensions[index];
    document.getElementById('modalArtworkDescription').textContent = artDescriptions[index];
    showModal(modal, index);
}

// Shows artist modal with details
function showArtistModal(index) {
    const modal = document.getElementById('artistModal');
    if (!modal) return;
    document.getElementById('modalArtistImage').src = artistImages[index];
    document.getElementById('modalArtistName').textContent = artistNames[index];
    document.getElementById('modalArtistLifespan').textContent = artistLifespans[index];
    document.getElementById('modalArtistNationality').textContent = artistNationalities[index];
    document.getElementById('modalArtistBio').textContent = artistBios[index];
    showModal(modal);
}

// Displays modal and sets up close events
function showModal(modal, index) {
    const bsModal = new bootstrap.Modal(modal);
    bsModal.show();
    document.body.style.overflow = 'hidden';
    const close = modal.querySelector('.modal-close');
    const overlay = modal.querySelector('.modal-dialog');
    close.onclick = () => closeModal(modal.id);
    overlay.onclick = (e) => {
        if (e.target === overlay) closeModal(modal.id);
    };
    if (index !== undefined) {
        const favoriteBtn = modal.querySelector('.btn-favorite');
        favoriteBtn.onclick = () => toggleFavorite(index);
        const shareBtn = modal.querySelector('.btn-share');
        shareBtn.onclick = () => shareArtwork(index);
    }
    updateFavoriteButtons();
}

// Closes modal and resets body scroll
function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (!modal) return;
    const bsModal = bootstrap.Modal.getInstance(modal);
    bsModal.hide();
    document.body.style.overflow = 'auto';
}

// Filters artworks by artist
function filterArtworks(artist) {
    const cards = document.querySelectorAll('.artwork-card');
    cards.forEach(card => {
        card.closest('.col-12').style.display = (artist === 'all' || card.dataset.artist === artist) ? 'block' : 'none';
    });
}

// Filters artists by era
function filterArtistsByEra(era) {
    const cards = document.querySelectorAll('#artist-container > div');
    cards.forEach(card => {
        card.style.display = (era === 'all' || card.dataset.era === era) ? 'block' : 'none';
    });
}

// Searches artworks by title or artist
function searchArtworks(query) {
    query = query.toLowerCase();
    const cards = document.querySelectorAll('.artwork-card');
    cards.forEach(card => {
        const title = card.querySelector('.card-title').textContent.toLowerCase();
        const artist = card.querySelector('.card-text').textContent.toLowerCase();
        card.closest('.col-12').style.display = (title.includes(query) || artist.includes(query)) ? 'block' : 'none';
    });
}

// Toggles mobile navigation menu
function toggleMobileNav() {
    document.querySelector('.navbar-collapse').classList.toggle('show');
    document.querySelector('.nav-toggler').classList.toggle('active');
}

// Handles newsletter form submission
function handleNewsletterSubmit(event) {
    event.preventDefault();
    const email = event.target.querySelector('input[type="email"]').value;
    alert('Thank you for subscribing! You will receive our updates at: ' + email);
    event.target.reset();
}

// Toggles favorite status for an artwork
function toggleFavorite(index) {
    if (favorites.includes(index)) {
        favorites.splice(favorites.indexOf(index), 1);
    } else {
        favorites.push(index);
    }
    localStorage.setItem('artFavorites', JSON.stringify(favorites));
    updateFavoriteButtons();
}

// Updates favorite button states
function updateFavoriteButtons() {
    const buttons = document.querySelectorAll('.btn-favorite');
    buttons.forEach((btn, i) => {
        btn.innerHTML = `<i class="${favorites.includes(i) ? 'fas' : 'far'} fa-heart"></i> ${favorites.includes(i) ? 'Remove from' : 'Add to'} Favorites`;
    });
}

// Shares artwork via Web Share API or clipboard
function shareArtwork(index) {
    if (navigator.share) {
        navigator.share({
            title: artTitles[index],
            text: `Check out ${artTitles[index]} by ${artArtists[index]}`,
            url: window.location.href
        }).catch(console.error);
    } else {
        const input = document.createElement('input');
        input.value = window.location.href;
        document.body.appendChild(input);
        input.select();
        document.execCommand('copy');
        document.body.removeChild(input);
        alert('Link copied to clipboard!');
    }
}

// Initializes page functionality on load
document.addEventListener('DOMContentLoaded', () => {
    // Load content based on page
    if (document.getElementById('gallery-container')) {
        loadArtworks();
        document.getElementById('artSearch').addEventListener('input', e => searchArtworks(e.target.value));
        document.querySelectorAll('.filter-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                filterArtworks(btn.dataset.filter);
            });
        });
    } else if (document.getElementById('artist-container')) {
        loadArtists();
        document.querySelectorAll('.era-tab').forEach(tab => {
            tab.addEventListener('click', () => {
                document.querySelectorAll('.era-tab').forEach(t => t.classList.remove('active'));
                tab.classList.add('active');
                filterArtistsByEra(tab.dataset.era);
            });
        });
    } else if (document.getElementById('carouselItems')) {
        loadFeaturedCarousel();
    }

    // Initialize mobile navigation
    const toggler = document.querySelector('.nav-toggler');
    if (toggler) toggler.addEventListener('click', toggleMobileNav);

    // Initialize newsletter form
    const form = document.querySelector('.newsletter-form');
    if (form) form.addEventListener('submit', handleNewsletterSubmit);

    // Initialize favorites
    updateFavoriteButtons();

    // Close modals on Escape key
    document.addEventListener('keydown', e => {
        if (e.key === 'Escape') {
            const modal = document.querySelector('.modal.show');
            if (modal) closeModal(modal.id);
        }
    });
});

// Adds sticky navbar and fade-in animations on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    navbar.classList.toggle('sticky', window.scrollY > 100);
    document.querySelectorAll('.animate__animated:not(.animate__fadeIn)').forEach(el => {
        if (el.getBoundingClientRect().top < window.innerHeight - 50) el.classList.add('animate__fadeIn');
    });
});