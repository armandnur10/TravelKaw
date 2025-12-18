const destinations = [
    {
        id: 1,
        name: 'Raja Ampat, Papua',
        location: 'West Papua',
        category: 'alam',
        image: 'https://images.unsplash.com/photo-1703769605297-cc74106244d9?q=80&w=884',
        description: 'Underwater paradise with stunning coral reefs and rich marine life',
        popular: true
    },
    {
        id: 2,
        name: 'Candi Borobudur',
        location: 'Magelang, Central Java',
        category: 'budaya',
        image: 'https://images.unsplash.com/photo-1705905343745-6d901a93e946?q=80&w=449',
        description: 'The largest Buddhist temple in the world and a UNESCO World Heritage site',
        popular: true
    },
    {
        id: 3,
        name: 'Pantai Kuta, Bali',
        location: 'Badung, Bali',
        category: 'alam',
        image: 'https://images.unsplash.com/photo-1666873536534-7b1a5a333d24?q=80&w=910',
        description: 'An exotic beach famous for its breathtaking sunset views',
        popular: true
    },
    {
        id: 4,
        name: 'Candi Prambanan',
        location: 'Sleman, Yogyakarta',
        category: 'budaya',
        image: 'https://images.unsplash.com/photo-1576233475048-55f08b53a8bd?q=80&w=387',
        description: 'The largest Hindu temple complex in Indonesia',
        popular: true
    },
    {
        id: 5,
        name: 'Gunung Bromo',
        location: 'Probolinggo, East Java',
        category: 'alam',
        image: 'https://plus.unsplash.com/premium_photo-1697729935951-420138024919?q=80&w=774',
        description: 'An active volcano with spectacular sunrise panoramas',
        popular: false
    },
    {
        id: 6,
        name: 'Pulau Komodo',
        location: 'East Nusa Tenggara',
        category: 'alam',
        image: 'https://plus.unsplash.com/premium_photo-1661876927993-bedb3ab87208?q=80&w=955',
        description: 'The natural habitat of Komodo dragons with incredible landscapes',
        popular: false
    },
    {
        id: 7,
        name: 'Kampung Budaya Betawi',
        location: 'Jakarta',
        category: 'budaya',
        image: 'https://nativeindonesia.com/foto/2021/09/situ-babakan.jpg',
        description: 'Experience Betawi culture with various traditional performances',
        popular: false
    },
    {
        id: 8,
        name: 'Pasar Gede Solo',
        location: 'Surakarta, Central Java',
        category: 'kuliner',
        image: 'https://www.jogjasuper.co.id/wp-content/uploads/2024/03/lokasi-Pasar-Gede-Hardjonagoro.png',
        description: 'Traditional market offering various authentic Solo culinary delights',
        popular: false
    },
    {
        id: 9,
        name: 'Danau Toba',
        location: 'North Sumatra',
        category: 'alam',
        image: 'https://images.unsplash.com/photo-1623598122059-9b5ef17619c8?q=80&w=870',
        description: 'The largest volcanic lake in Indonesia with breathtaking scenery',
        popular: false
    },
    {
        id: 10,
        name: 'Warung Mak Beng',
        location: 'Sanur, Bali',
        category: 'kuliner',
        image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/11/4f/ea/b6/view-from-outside.jpg?w=900',
        description: 'Legendary eatery serving signature Balinese grilled fish',
        popular: false
    },
    {
        id: 11,
        name: 'Museum Nasional',
        location: 'Jakarta',
        category: 'budaya',
        image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/17/6e/01/bb/the-building.jpg?w=900',
        description: 'The largest museum in Indonesia with a rich collection of historical artifacts',
        popular: false
    },
    {
        id: 12,
        name: 'Gudeg Jogja',
        location: 'Yogyakarta',
        category: 'kuliner',
        image: 'https://cdn-1.timesmedia.co.id/images/2022/12/21/gudeg-2.jpg',
        description: 'Iconic Yogyakarta dish that every visitor should try',
        popular: false
    }
];

let currentCategory = 'all';
let currentSort = 'az';

document.addEventListener('DOMContentLoaded', function() {
    const urlParams = new URLSearchParams(window.location.search);
    const kategoriParam = urlParams.get('kategori');
    if (kategoriParam) {
        currentCategory = kategoriParam;
        const filterBtn = document.querySelector(`[data-category="${kategoriParam}"]`);
        if (filterBtn) {
            document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
            filterBtn.classList.add('active');
        }
    }

    renderDestinations();
    setupFilters();
    setupSorting();
});

function renderDestinations() {
    const grid = document.getElementById('destinationGrid');
    if (!grid) return;

    let filtered = [...destinations];

    if (currentCategory !== 'all') {
        filtered = filtered.filter(dest => dest.category === currentCategory);
    }

    if (currentSort === 'az') {
        filtered.sort((a, b) => a.name.localeCompare(b.name));
    } else if (currentSort === 'popular') {
        filtered.sort((a, b) => {
            if (a.popular && !b.popular) return -1;
            if (!a.popular && b.popular) return 1;
            return a.name.localeCompare(b.name);
        });
    }

    grid.innerHTML = filtered.map(dest => `
        <div class="destination-card">
            <div class="card-image">
                <img src="${dest.image}" alt="${dest.name}" loading="lazy">
                <div class="card-overlay">
                    <a href="detail.html?id=${dest.id}" class="btn-detail">Lihat Detail</a>
                </div>
            </div>
            <div class="card-content">
                <span class="card-category">${getCategoryLabel(dest.category)}</span>
                <h3>${dest.name}</h3>
                <p class="card-location">📍 ${dest.location}</p>
                <p class="card-description">${dest.description}</p>
            </div>
        </div>
    `).join('');
}

function getCategoryLabel(category) {
    const labels = {
        'alam': '🏔️ Nature',
        'budaya': '🏛️ Historical',
        'kuliner': '🍜 Culinary'
    };
    return labels[category] || category;
}

function setupFilters() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    filterBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            filterBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');

            currentCategory = this.getAttribute('data-category');
            renderDestinations();
        });
    });
}

function setupSorting() {
    const sortSelect = document.getElementById('sortSelect');
    if (sortSelect) {
        sortSelect.addEventListener('change', function() {
            currentSort = this.value;
            renderDestinations();
        });
    }
}

