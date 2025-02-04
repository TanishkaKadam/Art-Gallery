document.addEventListener('DOMContentLoaded', () => {
    const artGrid = document.querySelector('.art-grid');

    artPieces.forEach(art => {
        const artCard = document.createElement('div');
        artCard.classList.add('art-card');

        const artImage = document.createElement('img');
        artImage.src = `images/${art.image}`; // Path to the image
        artImage.alt = art.title;

        const artTitle = document.createElement('h3');
        artTitle.textContent = art.title;

        artCard.appendChild(artImage);
        artCard.appendChild(artTitle);

        artGrid.appendChild(artCard);
    });
});


document.addEventListener('DOMContentLoaded', () => {
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const closeBtn = document.querySelector('.close');
    const galleryImages = document.querySelectorAll('.gallery-image');

    galleryImages.forEach(image => {
        image.addEventListener('click', () => {
            lightbox.style.display = 'block';
            lightboxImg.src = image.src;
        });
    });

    closeBtn.addEventListener('click', () => {
        lightbox.style.display = 'none';
    });

    lightbox.addEventListener('click', (e) => {
        if (e.target !== lightboxImg) {
            lightbox.style.display = 'none';
        }
    });
});


document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('search-input');
    const artCards = document.querySelectorAll('.art-card');

    searchInput.addEventListener('input', () => {
        const searchTerm = searchInput.value.toLowerCase();

        artCards.forEach(card => {
            const title = card.querySelector('h3').textContent.toLowerCase();
            if (title.includes(searchTerm)) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const likeButtons = document.querySelectorAll('.like-btn');

    likeButtons.forEach(button => {
        button.addEventListener('click', () => {
            const likeCount = button.querySelector('.like-count');
            let count = parseInt(likeCount.textContent);
            count++;
            likeCount.textContent = count;
        });
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const backToTopButton = document.getElementById('back-to-top');

    window.onscroll = function() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            backToTopButton.style.display = 'block';
        } else {
            backToTopButton.style.display = 'none';
        }
    };

    backToTopButton.addEventListener('click', () => {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    });
});

window.addEventListener('load', () => {
    const loading = document.getElementById('loading');
    loading.style.display = 'none';
});

function shareArt(title, imageUrl) {
    const shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(imageUrl)}&quote=${encodeURIComponent(title)}`;
    window.open(shareUrl, '_blank');
}


