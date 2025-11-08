// Optional JS - for sticky effects or navbar shadow
window.addEventListener('scroll', () => {
    const nav = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        nav.classList.add('shadow-sm');
    } else {
        nav.classList.remove('shadow-sm');
    }
});

// Optional JS animation
window.addEventListener('scroll', () => {
    const imageBox = document.querySelector('.image-box');
    if (window.scrollY > 100) {
        imageBox.style.transform = 'scale(1.05)';
    } else {
        imageBox.style.transform = 'scale(1)';
    }
});

// Optional animation when scrolling
window.addEventListener('scroll', () => {
    const cards = document.querySelectorAll('.destination-card');
    cards.forEach(card => {
        const rect = card.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
            card.style.transform = 'translateY(0)';
            card.style.opacity = '1';
        }
    });
});


// Example: Animate counters (optional)
const counters = document.querySelectorAll('.stats h2');
counters.forEach(counter => {
    const update = () => {
        const target = +counter.textContent.replace(/\D/g, '');
        const count = +counter.innerText.replace(/\D/g, '');
        const speed = 50;
        if (count < target) {
            counter.innerText = count + 1 + '+';
            setTimeout(update, speed);
        }
    };
    update();
});

// Optional small fade-in animation
window.addEventListener("scroll", () => {
    document.querySelectorAll(".tourwala-info p").forEach(p => {
        const position = p.getBoundingClientRect().top;
        if (position < window.innerHeight - 100) {
            p.style.transition = "opacity 0.6s ease";
            p.style.opacity = 1;
        }
    });
});

let currentIndex = 0;
const testimonials = document.querySelectorAll('.testimonial-item');
const dots = document.querySelectorAll('.dot');

function showTestimonial(index) {
    testimonials.forEach((item, i) => {
        item.style.display = i === index ? 'block' : 'none';
    });
    dots.forEach((dot, i) => {
        dot.classList.toggle('active', i === index);
    });
}
function nextTestimonial() {
    currentIndex = (currentIndex + 1) % testimonials.length;
    showTestimonial(currentIndex);
}
dots.forEach((dot, i) => {
    dot.addEventListener('click', () => {
        currentIndex = i;
        showTestimonial(currentIndex);
    });
});

// Show only the first testimonial for carousel effect
showTestimonial(currentIndex);

// (Optional) Auto-slide every 8 seconds
setInterval(nextTestimonial, 8000);

document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('videoModal');
    const closeBtn = document.querySelector('.close-button');
    const videoPlayer = document.getElementById('videoPlayer');
    const videoCards = document.querySelectorAll('.video-review-card');
    const playButtons = document.querySelectorAll('.play-button');

    // Function to open the modal and load the video
    function openModal(videoId) {
        // Construct the YouTube embed URL
        const embedUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1`;
        
        // Set the iframe source and make it visible
        videoPlayer.src = embedUrl;
        modal.style.display = 'block';
    }

    // Function to close the modal and stop the video
    function closeModal() {
        // Stop the video by removing the iframe source
        videoPlayer.src = '';
        modal.style.display = 'none';
    }

    // Attach click listeners to the video cards (or play buttons)
    // The play button is preferred as it's the main click target for video play
    playButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            // Stop propagation so clicking the button doesn't trigger a parent click listener if one exists
            event.stopPropagation(); 
            const videoId = button.getAttribute('data-video-id');
            openModal(videoId);
        });
    });

    // Attach click listeners to the entire card as well
    videoCards.forEach(card => {
        card.addEventListener('click', () => {
            const videoId = card.getAttribute('data-video-id');
            openModal(videoId);
        });
    });

    // Attach event listener for the close button
    closeBtn.addEventListener('click', closeModal);

    // Close the modal if the user clicks anywhere outside of it
    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            closeModal();
        }
    });

    // Close modal on escape key press
    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape' && modal.style.display === 'block') {
            closeModal();
        }
    });
});

document.addEventListener('DOMContentLoaded', () => {
    // 1. Get DOM elements
    const modal = document.getElementById('videoModal');
    const closeBtn = document.querySelector('.close-button');
    const videoPlayer = document.getElementById('videoPlayer');
    const playButtons = document.querySelectorAll('.play-button');
    const videoCards = document.querySelectorAll('.video-review-card');

    // NOTE: Replace 'VIDEO_ID_1' in index.html with an actual YouTube Video ID (e.g., 'dQw4w9WgXcQ')
    const YOUTUBE_BASE_URL = 'https://www.youtube.com/embed/';

    // 2. Function to open the modal and load the video
    function openModal(videoId) {
        // Construct the YouTube embed URL with autoplay
        const embedUrl = `${YOUTUBE_BASE_URL}${videoId}?autoplay=1&rel=0`;
        
        // Set the iframe source and make it visible
        videoPlayer.src = embedUrl;
        modal.style.display = 'block';
    }

    // 3. Function to close the modal and stop the video
    function closeModal() {
        // Stop the video by removing the iframe source (essential for stopping playback)
        videoPlayer.src = '';
        modal.style.display = 'none';
    }

    // 4. Attach click listeners to the video cards and play buttons
    
    // Listener for Play Buttons (ensures only the button click handles the event)
    playButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            event.stopPropagation(); // Prevent the parent card click handler from also firing
            const videoId = button.getAttribute('data-video-id');
            openModal(videoId);
        });
    });
    
    // Listener for the entire card (in case the user clicks the image)
    videoCards.forEach(card => {
        card.addEventListener('click', () => {
            const videoId = card.getAttribute('data-video-id');
            openModal(videoId);
        });
    });

    // 5. Attach event listener for the close button
    closeBtn.addEventListener('click', closeModal);

    // 6. Close the modal if the user clicks anywhere outside of it
    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            closeModal();
        }
    });

    // 7. Close modal on escape key press
    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape' && modal.style.display === 'block') {
            closeModal();
        }
    });
});
