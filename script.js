// Define artwork data arrays for gallery
const artTitles = [
    "Starry Night",
    "Mona Lisa",
    "The Scream",
    "The Persistence of Memory",
    "San Giorgio Maggiore at Dusk",
    "The Potato Eaters",
    "The Last Supper"
]; // Array of artwork titles
const artArtists = [
    "Vincent van Gogh",
    "Leonardo da Vinci",
    "Edvard Munch",
    "Salvador Dali",
    "Claude Monet",
    "Vincent van Gogh",
    "Michelangelo"
]; // Array of artist names
const artImages = [
    "imgs/starrynight.jpg",
    "imgs/monalisa.jpg",
    "imgs/thescream.jpg",
    "imgs/memory.jpg",
    "imgs/sunset.jpg",
    "imgs/potatoeaters.png",
    "imgs/thelastsupper.png"
]; // Array of image paths
const artDescriptions = [ // Array of artwork descriptions
    "A swirling night sky masterpiece from 1889.",
    "The iconic portrait with a mysterious smile, circa 1503.",
    "An expressionist depiction of anxiety from 1893.",
    "A surrealist masterpiece featuring melting clocks in a dreamlike landscape.",
    "A breathtaking sunset view of the Venetian church, painted with Monet's signature impressionist style.",
    "A depiction of peasant life with earthy tones, painted in 1885.",
    "A monumental fresco depicting the Last Supper, created around 1495-1498."
];
const artYears = [1889, 1503, 1893, 1931, 1908, 1885, 1498]; // Array of creation years
const artMediums = [
    "Oil on canvas",
    "Oil on poplar panel",
    "Oil, tempera, and pastel on cardboard",
    "Oil on canvas",
    "Oil on canvas",
    "Oil on canvas",
    "Fresco"
]; // Array of mediums
const artDimensions = [
    "73.7 cm × 92.1 cm",
    "77 cm × 53 cm",
    "91 cm × 73.5 cm",
    "24.1 cm × 33 cm",
    "65.2 cm × 92.4 cm",
    "82 cm × 114 cm",
    "460 cm × 880 cm"
]; // Array of dimensions

// Define artist data arrays for artists page
const artistNames = [
    "Vincent van Gogh",
    "Leonardo da Vinci",
    "Edvard Munch",
    "Claude Monet",
    "Salvador Dali",
    "Michelangelo"
]; // Array of artist names
const artistBios = [ // Array of artist biographies
    "Post-Impressionist known for bold colors and emotional depth.",
    "Renaissance genius, painter, and inventor.",
    "Norwegian symbolist painter of intense emotion.",
    "French Impressionist master who revolutionized outdoor painting.",
    "Spanish Surrealist known for his striking and bizarre images.",
    "Renaissance sculptor, painter, and architect of unparalleled genius."
];
const artistImages = [
    "imgs/vin.webp",
    "imgs/vinch.webp",
    "imgs/munch.jpg",
    "imgs/claude.webp",
    "imgs/bet.jpg",
    "imgs/michelangelo.png"
]; // Array of artist image paths
const artistEras = [
    "post-impressionism",
    "renaissance",
    "expressionism",
    "impressionism",
    "surrealism",
    "renaissance"
]; // Array of artistic eras
const artistNationalities = [
    "Dutch",
    "Italian",
    "Norwegian",
    "French",
    "Spanish",
    "Italian"
]; // Array of nationalities
const artistLifespans = [
    "1853-1890",
    "1452-1519",
    "1863-1944",
    "1840-1926",
    "1904-1989",
    "1475-1564"
]; // Array of lifespans


// Function to load artworks into gallery page with proportional cards
function loadArtworks() {
    const container = document.getElementById("gallery-container"); // Get gallery container element
    if (!container) return; // Exit if container not found
    container.innerHTML = ''; // Clear existing content
    for (let i = 0; i < artTitles.length; i++) { // Loop through artworks
        container.innerHTML += ` 
            <div class="col-12 col-md-6 col-lg-4 mb-4">
                <div class="card h-100 artwork-card" data-artist="${artArtists[i]}">
                    <div class="card-img-wrapper">
                        <img src="${artImages[i]}" class="card-img-top" alt="${artTitles[i]}" loading="lazy">
                    </div>
                    <div class="card-body">
                        <h5 class="card-title">${artTitles[i]}</h5>
                        <p class="card-text">By ${artArtists[i]}</p>
                        <button class="btn btn-primary" onclick="showArtworkModal(${i})">Learn More</button>
                    </div>
                </div>
            </div>`;
    }
}

// Function to load artists into artists page with proportional cards
function loadArtists() {
    const container = document.getElementById("artist-container"); // Get artist container element
    if (!container) return; // Exit if container not found
    container.innerHTML = ''; // Clear existing content
    for (let i = 0; i < artistNames.length; i++) { // Loop through artists
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

// Function to show artwork modal with details
function showArtworkModal(index) {
    const modal = document.getElementById('artworkModal'); // Get artwork modal element
    if (!modal) return; // Exit if modal not found
    document.getElementById('modalArtworkImage').src = artImages[index]; // Set modal image
    document.getElementById('modalArtworkTitle').textContent = artTitles[index]; // Set modal title
    document.getElementById('modalArtworkArtist').textContent = artArtists[index]; // Set artist name
    document.getElementById('modalArtworkYear').textContent = artYears[index]; // Set year
    document.getElementById('modalArtworkMedium').textContent = artMediums[index]; // Set medium
    document.getElementById('modalArtworkDimensions').textContent = artDimensions[index]; // Set dimensions
    document.getElementById('modalArtworkDescription').textContent = artDescriptions[index]; // Set description
    showModal(modal, index); // Show the modal
}

// Function to show artist modal with details
function showArtistModal(index) {
    const modal = document.getElementById('artistModal'); // Get artist modal element
    if (!modal) return; // Exit if modal not found
    document.getElementById('modalArtistImage').src = artistImages[index]; // Set modal image
    document.getElementById('modalArtistName').textContent = artistNames[index]; // Set artist name
    document.getElementById('modalArtistLifespan').textContent = artistLifespans[index]; // Set lifespan
    document.getElementById('modalArtistNationality').textContent = artistNationalities[index]; // Set nationality
    document.getElementById('modalArtistBio').textContent = artistBios[index]; // Set biography
    showModal(modal); // Show the modal
}

// Function to display modal and set up close events
function showModal(modal, index) {
    const bsModal = new bootstrap.Modal(modal); // Create Bootstrap modal instance
    bsModal.show(); // Show the modal
    document.body.style.overflow = 'hidden'; // Disable body scrolling
    const close = modal.querySelector('.modal-close'); // Get close button
    const overlay = modal.querySelector('.modal-dialog'); // Get modal overlay
    close.onclick = () => closeModal(modal.id); // Set close button click handler
    overlay.onclick = (e) => { // Set overlay click handler
        if (e.target === overlay) closeModal(modal.id); // Close if overlay clicked
    };
    if (index !== undefined) { // If index is provided (for artwork modal)
        const favoriteBtn = modal.querySelector('.btn-favorite'); // Get favorite button
        favoriteBtn.onclick = () => toggleFavorite(index); // Set favorite button handler
        const shareBtn = modal.querySelector('.btn-share'); // Get share button
        shareBtn.onclick = () => shareArtwork(index); // Set share button handler
    }
    updateFavoriteButtons(); // Update favorite button states
}

// Function to close modal and reset body scroll
function closeModal(modalId) {
    const modal = document.getElementById(modalId); // Get modal element
    if (!modal) return; // Exit if modal not found
    const bsModal = bootstrap.Modal.getInstance(modal); // Get Bootstrap modal instance
    bsModal.hide(); // Hide the modal
    document.body.style.overflow = 'auto'; // Restore body scrolling
}

// Function to filter artworks by artist
function filterArtworks(artist) {
    const cards = document.querySelectorAll('.artwork-card'); // Get all artwork cards
    cards.forEach(card => { // Loop through cards
        card.closest('.col-12').style.display = (artist === 'all' || card.dataset.artist === artist) ? 'block' : 'none'; // Show/hide based on filter
    });
}

// Function to filter artists by era
function filterArtistsByEra(era) {
    const cards = document.querySelectorAll('#artist-container > div'); // Get all artist containers
    cards.forEach(card => { // Loop through containers
        card.style.display = (era === 'all' || card.dataset.era === era) ? 'block' : 'none'; // Show/hide based on era
    });
}

// Function to toggle mobile navigation menu
function toggleMobileNav() {
    document.querySelector('.navbar-collapse').classList.toggle('show'); // Toggle navbar visibility
    document.querySelector('.nav-toggler').classList.toggle('active'); // Toggle toggler state
}

// Function to handle newsletter form submission
function handleNewsletterSubmit(event) {
    event.preventDefault(); // Prevent form submission
    const email = event.target.querySelector('input[type="email"]').value; // Get email input value
    alert('Thank you for subscribing! You will receive our updates at: ' + email); // Show confirmation
    event.target.reset(); // Reset form
}


// Function to update favorite button states
function updateFavoriteButtons() {
    const buttons = document.querySelectorAll('.btn-favorite'); // Get all favorite buttons
    buttons.forEach((btn, i) => { // Loop through buttons
        btn.innerHTML = `<i class="${favorites.includes(i) ? 'fas' : 'far'} fa-heart"></i> ${favorites.includes(i) ? 'Remove from' : 'Add to'} Favorites`; // Update button text/icon
    });
}


// Initialize page functionality on load
document.addEventListener('DOMContentLoaded', () => {
    if (document.getElementById('gallery-container')) { // If on gallery page
        loadArtworks(); // Load artworks
        document.querySelectorAll('.filter-btn').forEach(btn => { // Loop through filter buttons
            btn.addEventListener('click', () => { // Add click handler
                document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active')); // Remove active class
                btn.classList.add('active'); // Add active class to clicked button
                filterArtworks(btn.dataset.filter); // Apply filter
            });
        });
    } else if (document.getElementById('artist-container')) { // If on artists page
        loadArtists(); // Load artists
        document.querySelectorAll('.era-tab').forEach(tab => { // Loop through era tabs
            tab.addEventListener('click', () => { // Add click handler
                document.querySelectorAll('.era-tab').forEach(t => t.classList.remove('active')); // Remove active class
                tab.classList.add('active'); // Add active class to clicked tab
                filterArtistsByEra(tab.dataset.era); // Apply filter
            });
        });
    }

    const toggler = document.querySelector('.nav-toggler'); // Get navbar toggler
    if (toggler) toggler.addEventListener('click', toggleMobileNav); // Add click handler

    const form = document.querySelector('.newsletter-form'); // Get newsletter form
    if (form) form.addEventListener('submit', handleNewsletterSubmit); // Add submit handler

    updateFavoriteButtons(); // Initialize favorite buttons

    document.addEventListener('keydown', e => { // Add keydown handler
        if (e.key === 'Escape') { // If Escape key pressed
            const modal = document.querySelector('.modal.show'); // Get open modal
            if (modal) closeModal(modal.id); // Close modal
        }
    });
});