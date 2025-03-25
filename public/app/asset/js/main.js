document.addEventListener('DOMContentLoaded', function () {
    const navbar = document.querySelector('.navbar');
    const ProfileSaya = document.querySelector('.Profile');
    
    const observer = new IntersectionObserver((scroll) => {
        scroll.forEach(entry => {
            if (entry.isIntersecting) {
                navbar.classList.add('navbar-colored');
            } else {
                navbar.classList.remove('navbar-colored');
            }
        });
    }, {
        threshold: 0.7 // buka animasi jika prodile sudah terlihat 
    });
    
    observer.observe(ProfileSaya);

    const texts = ["Developer", "Web Designer", "Pentesting"];
    const typingElement = document.querySelector('.type-animation .typing-text');
    let index = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typingSpeed = 150;
    let deletingSpeed = 100;
    let pauseBetween = 1000;

    function type() {
        const currentText = texts[index];

        typingElement.textContent = currentText.substring(0, charIndex);

        typingElement.style.borderRight = isDeleting ? 'none' : '2px solid #14f3db';

        if (!isDeleting) {
            charIndex++;

            if (charIndex <= currentText.length) {
                setTimeout(type, typingSpeed);
            } else {
                isDeleting = true;
                setTimeout(type, pauseBetween);
            }
        } else {
            charIndex--;

            if (charIndex >= 0) {
                setTimeout(type, deletingSpeed);
            } else {
                isDeleting = false;
                index = (index + 1) % texts.length;
                setTimeout(type, typingSpeed);
            }
        }
    }

    type();
});