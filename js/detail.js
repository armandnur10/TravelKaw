// Detail Data
const detailData = {
    1: {
        name: 'Raja Ampat, Papua',
        location: 'Papua Barat',
        category: 'alam',
        image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1920',
        description: `
            <p>Raja Ampat adalah kepulauan yang terletak di barat laut Papua. Destinasi ini terkenal sebagai surga bawah laut dengan keanekaragaman hayati laut yang sangat tinggi. Raja Ampat memiliki lebih dari 1.500 pulau kecil dan memiliki lebih dari 75% spesies karang dunia.</p>
            <p>Keindahan bawah laut Raja Ampat tidak ada duanya. Anda dapat menyelam atau snorkeling di berbagai spot yang menawarkan pemandangan terumbu karang yang masih sangat alami, berbagai jenis ikan tropis, dan bahkan bisa bertemu dengan hiu, manta ray, dan berbagai biota laut lainnya.</p>
            <p>Selain keindahan bawah laut, Raja Ampat juga menawarkan pemandangan darat yang tidak kalah menakjubkan. Pulau-pulau kecil dengan pasir putih, laguna biru, dan hutan tropis yang masih asri menjadi daya tarik tersendiri bagi para pengunjung.</p>
        `,
        hours: '24 Jam (Buka Setiap Hari)',
        price: 'Rp 500.000 - Rp 1.000.000',
        mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127672.1234567890!2d130.5!3d-0.5!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMMKwMzAnMDAuMCJTIDEzMMKwMzAnMDAuMCJF!5e0!3m2!1sen!2sid!4v1234567890123!5m2!1sen!2sid',
        gallery: [
            'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800',
            'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800',
            'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800',
            'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800'
        ]
    },
    2: {
        name: 'Candi Borobudur',
        location: 'Magelang, Jawa Tengah',
        category: 'budaya',
        image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1920',
        description: `
            <p>Candi Borobudur adalah candi Buddha terbesar di dunia dan merupakan salah satu warisan budaya UNESCO. Candi ini dibangun pada abad ke-9 dan terletak di Magelang, Jawa Tengah. Borobudur merupakan mahakarya arsitektur yang menggambarkan perjalanan spiritual menuju pencerahan.</p>
            <p>Candi ini memiliki struktur yang unik dengan 9 tingkat yang melambangkan perjalanan dari dunia nafsu menuju dunia tanpa bentuk. Di setiap dindingnya terdapat relief yang menceritakan kisah-kisah Buddha dan kehidupan sehari-hari pada masa itu.</p>
            <p>Borobudur tidak hanya menjadi tempat wisata, tetapi juga tempat ziarah bagi umat Buddha. Setiap tahun, pada hari Waisak, ribuan umat Buddha berkumpul di sini untuk merayakan hari suci mereka. Pemandangan sunrise dari puncak candi juga menjadi daya tarik utama bagi para wisatawan.</p>
        `,
        hours: '06:00 - 17:00 WIB (Setiap Hari)',
        price: 'Rp 50.000 (Domestik) / Rp 350.000 (Mancanegara)',
        mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3953.1234567890!2d110.2!3d-7.6!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zN8KwMzYnMDAuMCJTIDExMMKwMTInMDAuMCJF!5e0!3m2!1sen!2sid!4v1234567890123!5m2!1sen!2sid',
        gallery: [
            'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800',
            'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800',
            'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800',
            'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800'
        ]
    },
    3: {
        name: 'Pantai Kuta, Bali',
        location: 'Badung, Bali',
        category: 'alam',
        image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1920',
        description: `
            <p>Pantai Kuta adalah salah satu pantai paling terkenal di Bali. Terletak di Kabupaten Badung, pantai ini terkenal dengan ombaknya yang cocok untuk berselancar dan sunset yang sangat indah. Pantai Kuta memiliki pasir putih yang halus dan panjang pantai yang cukup luas.</p>
            <p>Selain aktivitas berselancar, pengunjung juga dapat menikmati berbagai aktivitas seperti berjalan-jalan di sepanjang pantai, bermain voli pantai, atau sekadar bersantai sambil menikmati pemandangan. Banyak restoran dan kafe di sepanjang pantai yang menawarkan makanan dan minuman sambil menikmati pemandangan laut.</p>
            <p>Pantai Kuta juga terkenal dengan kehidupan malamnya. Setelah matahari terbenam, area sekitar pantai menjadi ramai dengan berbagai bar, klub, dan restoran yang menawarkan hiburan hingga larut malam.</p>
        `,
        hours: '24 Jam (Buka Setiap Hari)',
        price: 'Gratis',
        mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3944.1234567890!2d115.1!3d-8.7!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zOMKwNDInMDAuMCJTIDExNcKwMDYnMDAuMCJF!5e0!3m2!1sen!2sid!4v1234567890123!5m2!1sen!2sid',
        gallery: [
            'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800',
            'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800',
            'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800',
            'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800'
        ]
    },
    4: {
        name: 'Candi Prambanan',
        location: 'Sleman, Yogyakarta',
        category: 'budaya',
        image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1920',
        description: `
            <p>Candi Prambanan adalah kompleks candi Hindu terbesar di Indonesia dan juga merupakan warisan budaya UNESCO. Candi ini dibangun pada abad ke-9 dan terletak di perbatasan antara Yogyakarta dan Jawa Tengah. Prambanan dikenal dengan arsitektur yang sangat indah dan detail relief yang menakjubkan.</p>
            <p>Kompleks candi ini terdiri dari tiga candi utama yang didedikasikan untuk Trimurti: Brahma (pencipta), Wisnu (pemelihara), dan Siwa (penghancur). Candi Siwa adalah yang tertinggi dengan ketinggian 47 meter. Di sekeliling candi utama terdapat ratusan candi kecil yang disebut candi perwara.</p>
            <p>Setiap malam, di area candi diadakan pertunjukan sendratari Ramayana yang menceritakan kisah epik Ramayana dengan latar belakang candi yang diterangi cahaya. Pertunjukan ini menjadi daya tarik utama bagi para wisatawan yang ingin menikmati kombinasi antara keindahan candi dan seni pertunjukan tradisional.</p>
        `,
        hours: '06:00 - 17:00 WIB (Setiap Hari)',
        price: 'Rp 50.000 (Domestik) / Rp 350.000 (Mancanegara)',
        mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3952.1234567890!2d110.4!3d-7.7!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zN8KwNDInMDAuMCJTIDExMMKwMjQnMDAuMCJF!5e0!3m2!1sen!2sid!4v1234567890123!5m2!1sen!2sid',
        gallery: [
            'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800',
            'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800',
            'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800',
            'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800'
        ]
    }
};

// Get category label
function getCategoryLabel(category) {
    const labels = {
        'alam': '🏔️ Alam',
        'budaya': '🏛️ Budaya',
        'kuliner': '🍜 Kuliner'
    };
    return labels[category] || category;
}

// Initialize detail page
document.addEventListener('DOMContentLoaded', function() {
    const urlParams = new URLSearchParams(window.location.search);
    const id = parseInt(urlParams.get('id')) || 1;
    const data = detailData[id] || detailData[1];

    // Set hero image
    const detailHero = document.getElementById('detailHero');
    if (detailHero) {
        detailHero.innerHTML = `<img src="${data.image}" alt="${data.name}">`;
    }

    // Set title
    const detailTitle = document.getElementById('detailTitle');
    if (detailTitle) {
        detailTitle.textContent = data.name;
    }

    // Set category and location
    const detailCategory = document.getElementById('detailCategory');
    const detailLocation = document.getElementById('detailLocation');
    if (detailCategory) {
        detailCategory.textContent = getCategoryLabel(data.category);
    }
    if (detailLocation) {
        detailLocation.textContent = `📍 ${data.location}`;
    }

    // Set description
    const detailDescription = document.getElementById('detailDescription');
    if (detailDescription) {
        detailDescription.innerHTML = data.description;
    }

    // Set info
    const infoLocation = document.getElementById('infoLocation');
    const infoHours = document.getElementById('infoHours');
    const infoPrice = document.getElementById('infoPrice');
    
    if (infoLocation) infoLocation.textContent = data.location;
    if (infoHours) infoHours.textContent = data.hours;
    if (infoPrice) infoPrice.textContent = data.price;

    // Set gallery
    const detailGallery = document.getElementById('detailGallery');
    if (detailGallery) {
        detailGallery.innerHTML = data.gallery.map((img, index) => `
            <img src="${img}" alt="${data.name} - Foto ${index + 1}" onclick="openLightbox('${img}')">
        `).join('');
    }

    // Set map
    const mapContainer = document.getElementById('mapContainer');
    if (mapContainer) {
        mapContainer.innerHTML = `<iframe src="${data.mapUrl}" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`;
    }
});

// Lightbox function for gallery
function openLightbox(imageSrc) {
    const lightbox = document.getElementById('lightbox');
    const lightboxImage = document.getElementById('lightboxImage');
    if (lightbox && lightboxImage) {
        lightboxImage.src = imageSrc;
        lightbox.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
}

// Close lightbox
document.addEventListener('DOMContentLoaded', function() {
    const lightbox = document.getElementById('lightbox');
    if (lightbox) {
        lightbox.addEventListener('click', function(e) {
            if (e.target === lightbox || e.target.classList.contains('lightbox-close')) {
                lightbox.classList.remove('active');
                document.body.style.overflow = '';
            }
        });

        // Close on Escape key
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape' && lightbox.classList.contains('active')) {
                lightbox.classList.remove('active');
                document.body.style.overflow = '';
            }
        });
    }
});

