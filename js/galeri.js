const galleryImages = [
    { src: 'https://images.unsplash.com/photo-1703769605297-cc74106244d9?q=80&w=884', title: 'Raja Ampat' },
    { src: 'https://images.unsplash.com/photo-1631340729644-8b8aad1e9dba?q=80&w=870', title: 'Borobudur' },
    { src: 'https://images.unsplash.com/photo-1551008475-4533d141425b?q=80&w=774', title: 'Pantai Kuta' },
    { src: 'https://plus.unsplash.com/premium_photo-1700954929488-82c05cebb075?q=80&w=928', title: 'Prambanan' },
    { src: 'https://images.unsplash.com/photo-1588668214407-6ea9a6d8c272?q=80&w=871', title: 'Gunung Bromo' },
    { src: 'https://plus.unsplash.com/premium_photo-1661913064849-ece1ab4ddbe7?q=80&w=1170', title: 'Pulau Komodo' },
    { src: 'https://images.unsplash.com/photo-1601058497548-f247dfe349d6?q=80&w=870', title: 'Danau Toba' },
    { src: 'https://plus.unsplash.com/premium_photo-1677829177642-30def98b0963?q=80&w=870', title: 'Bali' },
    { src: 'https://images.unsplash.com/photo-1602057512587-76d5cc4b34e2?q=80&w=872', title: 'Yogyakarta' },
    { src: 'https://images.unsplash.com/photo-1583022846753-83a4eba54ac1?q=80&w=774', title: 'Lombok' },
    { src: 'https://plus.unsplash.com/premium_photo-1663047414065-40ec161a11bf?q=80&w=1033', title: 'Bromo Tengger' },
    { src: 'https://images.unsplash.com/photo-1650445332429-75ceee3f3226?q=80&w=1032', title: 'Raja Ampat' }
];

let currentImageIndex = 0;

document.addEventListener('DOMContentLoaded', function() {
    renderGallery();
    setupLightbox();
});

function renderGallery() {
    const galleryGrid = document.getElementById('galleryGrid');
    if (!galleryGrid) return;

    galleryGrid.innerHTML = galleryImages.map((img, index) => `
        <div class="gallery-item" onclick="openLightbox(${index})">
            <img src="${img.src}" alt="${img.title}" loading="lazy">
            <div class="gallery-overlay">
                <span>${img.title}</span>
            </div>
        </div>
    `).join('');
}

function openLightbox(index) {
    currentImageIndex = index;
    const lightbox = document.getElementById('lightbox');
    const lightboxImage = document.getElementById('lightboxImage');
    
    if (lightbox && lightboxImage) {
        lightboxImage.src = galleryImages[index].src;
        lightboxImage.alt = galleryImages[index].title;
        lightbox.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
}

function closeLightbox() {
    const lightbox = document.getElementById('lightbox');
    if (lightbox) {
        lightbox.classList.remove('active');
        document.body.style.overflow = '';
    }
}

function navigateLightbox(direction) {
    if (direction === 'prev') {
        currentImageIndex = (currentImageIndex - 1 + galleryImages.length) % galleryImages.length;
    } else {
        currentImageIndex = (currentImageIndex + 1) % galleryImages.length;
    }
    
    const lightboxImage = document.getElementById('lightboxImage');
    if (lightboxImage) {
        lightboxImage.src = galleryImages[currentImageIndex].src;
        lightboxImage.alt = galleryImages[currentImageIndex].title;
    }
}

function setupLightbox() {
    const lightbox = document.getElementById('lightbox');
    const lightboxClose = document.querySelector('.lightbox-close');
    const lightboxPrev = document.querySelector('.lightbox-prev');
    const lightboxNext = document.querySelector('.lightbox-next');

    if (lightbox) {
        lightbox.addEventListener('click', function(e) {
            if (e.target === lightbox) {
                closeLightbox();
            }
        });

        if (lightboxClose) {
            lightboxClose.addEventListener('click', closeLightbox);
        }

        if (lightboxPrev) {
            lightboxPrev.addEventListener('click', function(e) {
                e.stopPropagation();
                navigateLightbox('prev');
            });
        }

        if (lightboxNext) {
            lightboxNext.addEventListener('click', function(e) {
                e.stopPropagation();
                navigateLightbox('next');
            });
        }

        document.addEventListener('keydown', function(e) {
            if (lightbox.classList.contains('active')) {
                if (e.key === 'Escape') {
                    closeLightbox();
                } else if (e.key === 'ArrowLeft') {
                    navigateLightbox('prev');
                } else if (e.key === 'ArrowRight') {
                    navigateLightbox('next');
                }
            }
        });
    }
}

