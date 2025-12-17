const galleryImages = [
    { src: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800', title: 'Raja Ampat' },
    { src: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800', title: 'Borobudur' },
    { src: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800', title: 'Pantai Kuta' },
    { src: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800', title: 'Prambanan' },
    { src: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800', title: 'Gunung Bromo' },
    { src: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800', title: 'Pulau Komodo' },
    { src: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800', title: 'Danau Toba' },
    { src: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800', title: 'Bali' },
    { src: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800', title: 'Yogyakarta' },
    { src: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800', title: 'Lombok' },
    { src: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800', title: 'Bromo Tengger' },
    { src: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800', title: 'Raja Ampat' }
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
        // Close on background click
        lightbox.addEventListener('click', function(e) {
            if (e.target === lightbox) {
                closeLightbox();
            }
        });

        // Close button
        if (lightboxClose) {
            lightboxClose.addEventListener('click', closeLightbox);
        }

        // Previous button
        if (lightboxPrev) {
            lightboxPrev.addEventListener('click', function(e) {
                e.stopPropagation();
                navigateLightbox('prev');
            });
        }

        // Next button
        if (lightboxNext) {
            lightboxNext.addEventListener('click', function(e) {
                e.stopPropagation();
                navigateLightbox('next');
            });
        }

        // Keyboard navigation
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

