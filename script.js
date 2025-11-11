// ===== SMOOTH SCROLL BEHAVIOR =====
document.addEventListener('DOMContentLoaded', function() {
    // Enable smooth scrolling for all anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href && href !== '#') {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    const headerOffset = 80;
                    const elementPosition = target.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                    window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });

    // ===== SCROLL TO TOP BUTTON =====
    const scrollTopBtn = document.getElementById('scrollTop');
    
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            scrollTopBtn.classList.add('visible');
        } else {
            scrollTopBtn.classList.remove('visible');
        }
    });

    scrollTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // ===== HEADER SHADOW ON SCROLL =====
    const header = document.querySelector('.header');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 10) {
            header.style.boxShadow = '0 4px 12px rgba(0,0,0,0.1)';
        } else {
            header.style.boxShadow = '0 2px 5px rgba(0,0,0,0.05)';
        }
    });

    // ===== INSTAGRAM GALLERY SCROLL =====
    const instagramGallery = document.querySelector('.instagram-gallery');
    
    if (instagramGallery) {
        let isDown = false;
        let startX;
        let scrollLeft;

        instagramGallery.addEventListener('mousedown', (e) => {
            isDown = true;
            instagramGallery.style.cursor = 'grabbing';
            startX = e.pageX - instagramGallery.offsetLeft;
            scrollLeft = instagramGallery.scrollLeft;
        });

        instagramGallery.addEventListener('mouseleave', () => {
            isDown = false;
            instagramGallery.style.cursor = 'grab';
        });

        instagramGallery.addEventListener('mouseup', () => {
            isDown = false;
            instagramGallery.style.cursor = 'grab';
        });

        instagramGallery.addEventListener('mousemove', (e) => {
            if (!isDown) return;
            e.preventDefault();
            const x = e.pageX - instagramGallery.offsetLeft;
            const walk = (x - startX) * 2;
            instagramGallery.scrollLeft = scrollLeft - walk;
        });
    }

    // ===== TESTIMONIALS CAROUSEL =====
    const testimonials = document.querySelectorAll('.testimonial');
    const dots = document.querySelectorAll('.dot');
    let currentTestimonial = 0;

    function showTestimonial(index) {
        dots.forEach(dot => dot.classList.remove('active'));
        dots[index].classList.add('active');
        currentTestimonial = index;
    }

    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            showTestimonial(index);
        });
    });

    // Auto-rotate testimonials every 5 seconds
    setInterval(() => {
        currentTestimonial = (currentTestimonial + 1) % dots.length;
        showTestimonial(currentTestimonial);
    }, 5000);

    // ===== MOBILE MENU TOGGLE =====
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const navLeft = document.querySelector('.nav-left');

    if (mobileMenuToggle) {
        mobileMenuToggle.addEventListener('click', function() {
            navLeft.classList.toggle('active');
            this.classList.toggle('active');
        });
    }

    // ===== LAZY LOADING IMAGES =====
    const images = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
                observer.unobserve(img);
            }
        });
    });

    images.forEach(img => imageObserver.observe(img));

    // ===== ANIMATE ON SCROLL =====
    const animateElements = document.querySelectorAll('.category-card, .value-card, .product-showcase');
    
    const elementObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, {
        threshold: 0.15,
        rootMargin: '0px 0px -50px 0px'
    });

    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(40px)';
        el.style.transition = 'opacity 0.8s cubic-bezier(0.4, 0, 0.2, 1), transform 0.8s cubic-bezier(0.4, 0, 0.2, 1)';
        elementObserver.observe(el);
    });

    // ===== PRODUCT CARDS HOVER EFFECT =====
    const productCards = document.querySelectorAll('.category-card');
    
    productCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.02)';
            this.style.transition = 'transform 0.4s cubic-bezier(0.4, 0, 0.2, 1)';
            this.style.boxShadow = '0 8px 25px rgba(0, 0, 0, 0.12)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
            this.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.05)';
        });
    });

    // ===== STICKY BANNER DISMISS =====
    const stickyBanner = document.getElementById('stickyBanner');
    
    if (stickyBanner) {
        // Create close button
        const closeBtn = document.createElement('button');
        closeBtn.innerHTML = '×';
        closeBtn.style.cssText = 'position: absolute; right: 10px; top: 50%; transform: translateY(-50%); background: none; border: none; color: white; font-size: 24px; cursor: pointer; padding: 0; width: 25px; height: 25px;';
        stickyBanner.appendChild(closeBtn);
        
        closeBtn.addEventListener('click', function() {
            stickyBanner.style.animation = 'slideDown 0.5s ease';
            setTimeout(() => {
                stickyBanner.style.display = 'none';
            }, 500);
        });
    }

    // ===== NEWSLETTER FORM SUBMISSION =====
    const newsletterForm = document.querySelector('.newsletter-form');
    
    if (newsletterForm) {
        newsletterForm.addEventListener('click', function() {
            const email = prompt('Enter your email address:');
            if (email && validateEmail(email)) {
                alert('Thank you for subscribing!');
            } else if (email) {
                alert('Please enter a valid email address.');
            }
        });
    }

    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }

    // ===== SHOP BUTTONS INTERACTION =====
    const shopButtons = document.querySelectorAll('.btn-shop');
    
    shopButtons.forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            // Add ripple effect
            const ripple = document.createElement('span');
            ripple.style.cssText = 'position: absolute; width: 100%; height: 100%; background: rgba(255,255,255,0.5); border-radius: 50%; transform: scale(0); animation: ripple 0.6s ease-out;';
            this.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
            
            // Simulate add to cart
            alert('Product added to cart!');
        });
    });

    // Add ripple animation
    const style = document.createElement('style');
    style.textContent = `
        @keyframes ripple {
            to {
                transform: scale(4);
                opacity: 0;
            }
        }
        @keyframes slideDown {
            from {
                transform: translateY(0);
            }
            to {
                transform: translateY(100%);
            }
        }
    `;
    document.head.appendChild(style);

    // ===== PERFORMANCE OPTIMIZATION =====
    // Debounce scroll events
    let scrollTimeout;
    window.addEventListener('scroll', function() {
        if (scrollTimeout) {
            window.cancelAnimationFrame(scrollTimeout);
        }
        scrollTimeout = window.requestAnimationFrame(function() {
            // Scroll event handling here
        });
    }, { passive: true });

    // ===== ACCESSIBILITY IMPROVEMENTS =====
    // Add focus indicators for keyboard navigation
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Tab') {
            document.body.classList.add('keyboard-nav');
        }
    });

    document.addEventListener('mousedown', function() {
        document.body.classList.remove('keyboard-nav');
    });

    // Add keyboard navigation for carousel
    document.addEventListener('keydown', function(e) {
        if (e.key === 'ArrowLeft') {
            const prevIndex = currentTestimonial === 0 ? dots.length - 1 : currentTestimonial - 1;
            showTestimonial(prevIndex);
        } else if (e.key === 'ArrowRight') {
            const nextIndex = (currentTestimonial + 1) % dots.length;
            showTestimonial(nextIndex);
        }
    });

    // ===== LOADING ANIMATION =====
    window.addEventListener('load', function() {
        document.body.style.opacity = '0';
        setTimeout(() => {
            document.body.style.transition = 'opacity 0.5s ease';
            document.body.style.opacity = '1';
        }, 100);
    });

    // ===== RESPONSIVE NAVIGATION =====
    let lastScrollTop = 0;
    const headerHeight = header.offsetHeight;

    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        if (scrollTop > lastScrollTop && scrollTop > headerHeight) {
            // Scrolling down
            header.style.transform = 'translateY(-100%)';
        } else {
            // Scrolling up
            header.style.transform = 'translateY(0)';
        }
        
        lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
    }, { passive: true });

    // Ensure header has transition
    header.style.transition = 'transform 0.4s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.3s ease';

    // ===== CONSOLE GREETING =====
    console.log('%cWoodendot', 'font-size: 48px; color: #000; font-weight: bold;');
    console.log('%cFurniture designed to live in harmony', 'font-size: 16px; color: #666;');
    console.log('%cWebsite built with ❤️ and attention to detail', 'font-size: 12px; color: #999;');
});

// ===== EXTERNAL LINK HANDLING =====
document.addEventListener('click', function(e) {
    if (e.target.tagName === 'A' && e.target.hostname !== window.location.hostname) {
        e.preventDefault();
        window.open(e.target.href, '_blank', 'noopener,noreferrer');
    }
});

// ===== ERROR HANDLING =====
window.addEventListener('error', function(e) {
    console.error('Error occurred:', e.error);
});

// ===== SERVICE WORKER REGISTRATION (Optional - for PWA) =====
if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
        // Uncomment to enable service worker
        // navigator.serviceWorker.register('/sw.js')
        //     .then(reg => console.log('Service Worker registered'))
        //     .catch(err => console.log('Service Worker registration failed'));
    });
}
