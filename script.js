// Array data for artworks
const artTitles = ["Starry Night", "Mona Lisa", "The Scream", "The Persistence of Memory", "San Giorgio Maggiore at Dusk" ];
const artArtists = ["Vincent van Gogh", "Leonardo da Vinci", "Edvard Munch", "Salvador Dali", "Claude Monet"];
const artImages = ["imgs/starrynight.jpg", "imgs/monalisa.jpg", "imgs/thescream.jpg", "imgs/memory.jpg" , "imgs/sunset.jpg"];
const artDescriptions = [
    "A swirling night sky masterpiece from 1889.",
    "The iconic portrait with a mysterious smile, circa 1503.",
    "An expressionist depiction of anxiety from 1893."
];
const artYears = [1889, 1503, 1893];
const artMediums = [
    "Oil on canvas",
    "Oil on poplar panel",
    "Oil, tempera, and pastel on cardboard"
];
const artDimensions = [
    "73.7 cm × 92.1 cm",
    "77 cm × 53 cm",
    "91 cm × 73.5 cm"
];

// Array data for artists
const artistNames = ["Vincent van Gogh", "Leonardo da Vinci", "Edvard Munch", "Claude Monet", "Salvador Dali"];
const artistBios = [
    "Post-Impressionist known for bold colors and emotional depth.",
    "Renaissance genius, painter, and inventor.",
    "Norwegian symbolist painter of intense emotion."
];
const artistImages = ["imgs/vin.webp", "imgs/vinch.webp", "imgs/munch.jpg", "imgs/claude.webp", "imgs/bet.jpg"];
const artistEras = ["post-impressionism", "renaissance", "expressionism", "impressionism", "surrealism"];
const artistNationalities = ["Dutch", "Italian", "Norwegian", "French", "Spanish"];
const artistLifespans = ["1853-1890", "1452-1519", "1863-1944", "1840-1926", "1904-1989"];

// Gallery page functions
function loadArtworks() {
    const container = document.getElementById("gallery-container");
    if (!container) return;

    // Clear existing content
    container.innerHTML = '';

    // Load each artwork with responsive classes
    for (let i = 0; i < artTitles.length; i++) {
        const card = document.createElement("div");
        card.className = "col-12 col-md-6 col-lg-4 mb-4";
        card.innerHTML = `
            <div class="card h-100 artwork-card" data-artist="${artArtists[i]}">
                <div class="card-img-wrapper">
                    <img src="${artImages[i]}" class="card-img-top" alt="${artTitles[i]}" loading="lazy">
                </div>
                <div class="card-body d-flex flex-column">
                    <h5 class="card-title">${artTitles[i]}</h5>
                    <p class="card-text flex-grow-1">By ${artArtists[i]}</p>
                    <button class="btn btn-primary mt-auto" onclick="showArtworkModal(${i})">
                        Learn More
                    </button>
                </div>
            </div>`;
        container.appendChild(card);
    }
}

// Artists page functions
function loadArtists() {
    const container = document.getElementById("artist-container");
    if (!container) return;

    // Clear existing content
    container.innerHTML = '';

    // Load each artist with responsive classes
    for (let i = 0; i < artistNames.length; i++) {
        const card = document.createElement("div");
        card.className = "col-12 col-md-6 col-lg-4 mb-4";
        card.setAttribute('data-era', artistEras[i]);
        card.innerHTML = `
            <div class="card h-100 artist-card">
                <div class="card-img-wrapper">
                    <img src="${artistImages[i]}" class="card-img-top" alt="${artistNames[i]}" loading="lazy">
                </div>
                <div class="card-body">
                    <h5 class="card-title">${artistNames[i]}</h5>
                    <p class="card-text">${artistBios[i]}</p>
                    <button class="btn btn-primary" onclick="showArtistModal(${i})">
                        View Profile
                    </button>
                </div>
            </div>`;
        container.appendChild(card);
    }
}

// Modal functions
function showArtworkModal(index) {
    const modal = document.getElementById('artworkModal');
    if (!modal) return;

    // Update modal content
    document.getElementById('modalArtworkImage').src = artImages[index];
    document.getElementById('modalArtworkTitle').textContent = artTitles[index];
    document.getElementById('modalArtworkArtist').textContent = artArtists[index];
    document.getElementById('modalArtworkYear').textContent = artYears[index];
    document.getElementById('modalArtworkMedium').textContent = artMediums[index];
    document.getElementById('modalArtworkDimensions').textContent = artDimensions[index];
    document.getElementById('modalArtworkDescription').textContent = artDescriptions[index];

    // Show modal with animation
    showModal(modal);
}

function showArtistModal(index) {
    const modal = document.getElementById('artistModal');
    if (!modal) return;

    // Update modal content
    document.getElementById('modalArtistImage').src = artistImages[index];
    document.getElementById('modalArtistName').textContent = artistNames[index];
    document.getElementById('modalArtistLifespan').textContent = artistLifespans[index];
    document.getElementById('modalArtistNationality').textContent = artistNationalities[index];
    document.getElementById('modalArtistBio').textContent = artistBios[index];

    // Show modal with animation
    showModal(modal);
}

// Helper function to show modals
function showModal(modal) {
    modal.style.display = 'block';
    modal.classList.add('show');
    document.body.style.overflow = 'hidden';
}

// Helper function to close modals
function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (!modal) return;

    modal.classList.remove('show');
    setTimeout(() => {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }, 300);
}

// Filter functions
function filterArtworks(artist) {
    const cards = document.querySelectorAll('.artwork-card');
    cards.forEach(card => {
        const shouldShow = artist === 'all' || card.dataset.artist === artist;
        card.closest('.col-12').style.display = shouldShow ? 'block' : 'none';
    });
}

function filterArtistsByEra(era) {
    const cards = document.querySelectorAll('#artist-container > div');
    cards.forEach(card => {
        const shouldShow = era === 'all' || card.dataset.era === era;
        card.style.display = shouldShow ? 'block' : 'none';
    });
}

// Search function
function searchArtworks(query) {
    query = query.toLowerCase();
    const cards = document.querySelectorAll('.artwork-card');
    cards.forEach(card => {
        const title = card.querySelector('.card-title').textContent.toLowerCase();
        const artist = card.querySelector('.card-text').textContent.toLowerCase();
        const shouldShow = title.includes(query) || artist.includes(query);
        card.closest('.col-12').style.display = shouldShow ? 'block' : 'none';
    });
}

// Mobile navigation
function toggleMobileNav() {
    const nav = document.querySelector('.site-menu');
    const toggler = document.querySelector('.nav-toggler');
    nav.classList.toggle('active');
    toggler.classList.toggle('active');
}

// Virtual Tour functions
function initVirtualTour() {
    const startBtn = document.getElementById('startTourBtn');
    const exitBtn = document.getElementById('exitTourBtn');
    const tourFrame = document.getElementById('virtualTourFrame');
    
    if (startBtn && tourFrame) {
        startBtn.addEventListener('click', () => {
            tourFrame.style.display = 'block';
            document.body.style.overflow = 'hidden';
        });
    }
    
    if (exitBtn && tourFrame) {
        exitBtn.addEventListener('click', () => {
            tourFrame.style.display = 'none';
            document.body.style.overflow = 'auto';
        });
    }
}

// Newsletter subscription
function handleNewsletterSubmit(event) {
    event.preventDefault();
    const email = event.target.querySelector('input[type="email"]').value;
    // Here you would typically send this to a server
    alert('Thank you for subscribing! You will receive our updates at: ' + email);
    event.target.reset();
}

// Favorites system
let favorites = JSON.parse(localStorage.getItem('artFavorites')) || [];

function toggleFavorite(artworkIndex) {
    const index = favorites.indexOf(artworkIndex);
    if (index === -1) {
        favorites.push(artworkIndex);
    } else {
        favorites.splice(index, 1);
    }
    localStorage.setItem('artFavorites', JSON.stringify(favorites));
    updateFavoriteButtons();
}

function updateFavoriteButtons() {
    document.querySelectorAll('.btn-favorite').forEach((btn, index) => {
        const isFavorite = favorites.includes(index);
        btn.innerHTML = `<i class="${isFavorite ? 'fas' : 'far'} fa-heart"></i> ${isFavorite ? 'Remove from' : 'Add to'} Favorites`;
    });
}

// Share functionality
function shareArtwork(index) {
    if (navigator.share) {
        navigator.share({
            title: artTitles[index],
            text: `Check out ${artTitles[index]} by ${artArtists[index]}`,
            url: window.location.href
        }).catch(console.error);
    } else {
        // Fallback
        const dummy = document.createElement('input');
        document.body.appendChild(dummy);
        dummy.value = window.location.href;
        dummy.select();
        document.execCommand('copy');
        document.body.removeChild(dummy);
        alert('Link copied to clipboard!');
    }
}

// Room navigation in virtual tour
function navigateRoom(direction) {
    const rooms = ['Main Hall', 'Impressionist Wing', 'Renaissance Collection', 'Modern Art Gallery'];
    const currentRoom = document.querySelector('.current-room');
    const dots = document.querySelectorAll('.room-dot');
    let currentIndex = rooms.indexOf(currentRoom.textContent);
    
    if (direction === 'next') {
        currentIndex = (currentIndex + 1) % rooms.length;
    } else {
        currentIndex = (currentIndex - 1 + rooms.length) % rooms.length;
    }
    
    currentRoom.textContent = rooms[currentIndex];
    dots.forEach((dot, i) => {
        dot.classList.toggle('active', i === currentIndex);
    });
}

// Initialize all functionality when the page loads
document.addEventListener('DOMContentLoaded', function() {
    // Initialize content based on page
    if (document.getElementById('gallery-container')) {
        loadArtworks();
        
        // Initialize search
        const searchInput = document.getElementById('artSearch');
        if (searchInput) {
            searchInput.addEventListener('input', (e) => searchArtworks(e.target.value));
        }
        
        // Initialize filter buttons
        const filterBtns = document.querySelectorAll('.filter-btn');
        filterBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                filterBtns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                filterArtworks(btn.dataset.filter);
            });
        });
    } 
    else if (document.getElementById('artist-container')) {
        loadArtists();
        
        // Initialize era filters
        const eraTabs = document.querySelectorAll('.era-tab');
        eraTabs.forEach(tab => {
            tab.addEventListener('click', () => {
                eraTabs.forEach(t => t.classList.remove('active'));
                tab.classList.add('active');
                filterArtistsByEra(tab.dataset.era);
            });
        });
    }
    else if (document.querySelector('.virtual-tour-page')) {
        initVirtualTour();
    }

    // Initialize mobile navigation
    const navToggler = document.querySelector('.nav-toggler');
    if (navToggler) {
        navToggler.addEventListener('click', toggleMobileNav);
    }

    // Initialize modal close buttons
    document.querySelectorAll('.modal-close').forEach(button => {
        button.addEventListener('click', () => {
            closeModal(button.closest('.artwork-modal, .artist-modal').id);
        });
    });

    // Initialize modal overlay close
    document.querySelectorAll('.modal-overlay').forEach(overlay => {
        overlay.addEventListener('click', () => {
            closeModal(overlay.closest('.artwork-modal, .artist-modal').id);
        });
    });

    // Initialize newsletter form
    const newsletterForm = document.querySelector('.newsletter-form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', handleNewsletterSubmit);
    }

    // Initialize room navigation
    const prevRoomBtn = document.querySelector('.prev-room');
    const nextRoomBtn = document.querySelector('.next-room');
    if (prevRoomBtn && nextRoomBtn) {
        prevRoomBtn.addEventListener('click', () => navigateRoom('prev'));
        nextRoomBtn.addEventListener('click', () => navigateRoom('next'));
    }

    // Initialize favorites
    updateFavoriteButtons();

    // Handle escape key for modals
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            const openModal = document.querySelector('.artwork-modal.show, .artist-modal.show');
            if (openModal) {
                closeModal(openModal.id);
            }
        }
    });
});

// Add scroll-based animations
window.addEventListener('scroll', function() {
    // Add .sticky class to navbar when scrolling
    const navbar = document.querySelector('.navbar-area');
    if (window.scrollY > 100) {
        navbar.classList.add('sticky');
    } else {
        navbar.classList.remove('sticky');
    }
    
    // Animate elements when they come into view
    const animateElements = document.querySelectorAll('.fade-in:not(.shown)');
    animateElements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        if (elementTop < window.innerHeight - 50) {
            element.classList.add('shown');
        }
    });
});