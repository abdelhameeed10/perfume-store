document.addEventListener("DOMContentLoaded", () => {

    // 1. Initialize Lenis (Smooth Scroll)
    const lenis = new Lenis({
        duration: 1.5,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        direction: 'vertical',
        gestureDirection: 'vertical',
        smooth: true,
        mouseMultiplier: 1,
        smoothTouch: false,
        touchMultiplier: 2,
        infinite: false,
    });

    function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // 2. Custom Luxury Cursor
    const cursor = document.querySelector('.cursor-dot');
    if (cursor) {
        document.addEventListener('mousemove', (e) => {
            cursor.style.left = e.clientX + 'px';
            cursor.style.top = e.clientY + 'px';
        });

        // Hover effects for all interactive elements
        const interactables = document.querySelectorAll('a, button, .quiz-option, .nav-icons svg, .editorial-item');
        interactables.forEach(el => {
            el.addEventListener('mouseenter', () => cursor.classList.add('hover-active'));
            el.addEventListener('mouseleave', () => cursor.classList.remove('hover-active'));
        });
    }

    // 3. Magnetic Buttons
    const magnets = document.querySelectorAll('.magnetic-wrap');
    magnets.forEach(magnet => {
        const btn = magnet.querySelector('.btn');
        if (!btn) return;

        magnet.addEventListener('mousemove', (e) => {
            const pos = magnet.getBoundingClientRect();
            const x = e.clientX - pos.left - pos.width / 2;
            const y = e.clientY - pos.top - pos.height / 2;

            gsap.to(btn, { x: x * 0.4, y: y * 0.4, duration: 1, ease: "power3.out" });
        });

        magnet.addEventListener('mouseleave', () => {
            gsap.to(btn, { x: 0, y: 0, duration: 1, ease: "elastic.out(1, 0.3)" });
        });
    });

    // 4. Cinematic Loading Sequence with GSAP
    const loader = document.querySelector('.loader');
    const loaderText = document.querySelector('.loader-text');
    const heroContent = document.querySelector('.hero-content');

    if (loader && typeof gsap !== 'undefined') {
        const tl = gsap.timeline();

        // Stop scrolling during loader
        lenis.stop();

        tl.to(loaderText, { opacity: 1, duration: 2, ease: "power2.inOut" })
            .to(loaderText, { opacity: 0, duration: 1.5, ease: "power2.inOut", delay: 1 })
            .to(loader, { yPercent: -100, duration: 1.5, ease: "power4.inOut" }, "-=0.5")
            .to(heroContent, { opacity: 1, duration: 2, ease: "power2.out" }, "-=0.5")
            .call(() => lenis.start()); // Start scroll again
    } else if (heroContent) {
        heroContent.style.opacity = 1; // Fallback if no GSAP
    }

    // 5. Advanced Scroll Animations (GSAP ScrollTrigger or simple Intersection)
    // We will use GSAP if available, otherwise fallback
    if (typeof gsap !== 'undefined') {
        gsap.registerPlugin(ScrollTrigger);

        // Hero Background Parallax
        gsap.to('.hero-bg', {
            yPercent: 30,
            ease: "none",
            scrollTrigger: {
                trigger: '.hero',
                start: "top top",
                end: "bottom top",
                scrub: true
            }
        });



        // Fade in elements
        const animateEls = document.querySelectorAll('.gsap-fade-up');
        animateEls.forEach(el => {
            gsap.from(el, {
                opacity: 0,
                y: 60,
                duration: 1.5,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: el,
                    start: "top 85%",
                    toggleActions: "play none none reverse"
                }
            });
        });

        // Breathing Bottles (Dynamic class assignment)
        document.querySelectorAll('.editorial-img-wrapper img, #product-image').forEach(img => {
            img.classList.add('breathing');
        });

        // Elite Mouse Parallax for Product Page
        const productGallery = document.querySelector('.product-gallery');
        const productImg = document.getElementById('product-image');
        if (productGallery && productImg) {
            productGallery.addEventListener('mousemove', (e) => {
                const { width, height, left, top } = productGallery.getBoundingClientRect();
                const x = (e.clientX - left - width / 2) / 25;
                const y = (e.clientY - top - height / 2) / 25;
                
                gsap.to(productImg, {
                    x: x,
                    y: y,
                    rotationY: x * 0.5,
                    rotationX: -y * 0.5,
                    duration: 1,
                    ease: "power2.out"
                });
            });

            productGallery.addEventListener('mouseleave', () => {
                gsap.to(productImg, {
                    x: 0,
                    y: 0,
                    rotationY: 0,
                    rotationX: 0,
                    duration: 1.5,
                    ease: "elastic.out(1, 0.3)"
                });
            });
        }

        // Cinematic Page Transitions
        const links = document.querySelectorAll('a');
        links.forEach(link => {
            link.addEventListener('click', (e) => {
                const href = link.getAttribute('href');
                if (href && href !== '#' && !href.startsWith('#') && !link.target) {
                    e.preventDefault();
                    const wipe = document.querySelector('.scent-wipe');
                    gsap.to(wipe, {
                        x: "0%",
                        duration: 0.8,
                        ease: "power4.inOut",
                        onComplete: () => {
                            window.location.href = href;
                        }
                    });
                }
            });
        });

        // Entry Wipe (Fade out the wipe on page load)
        const wipe = document.querySelector('.scent-wipe');
        if (wipe) {
            gsap.to(wipe, {
                x: "100%",
                duration: 1,
                ease: "power4.inOut",
                delay: 0.5
            });
        }
    }

    // 7. Elite Search Engine (Automatic Discovery)
    const searchTrigger = document.getElementById('search-trigger');
    const searchOverlay = document.getElementById('search-overlay');
    const searchClose = document.getElementById('search-close');
    const searchInput = document.getElementById('search-input');
    const searchResults = document.getElementById('search-results');

    if (searchTrigger && searchOverlay) {
        searchTrigger.addEventListener('click', () => {
            searchOverlay.classList.add('active');
            lenis.stop();
            setTimeout(() => searchInput.focus(), 500);
        });

        searchClose.addEventListener('click', () => {
            searchOverlay.classList.remove('active');
            lenis.start();
        });

        // Close on Esc
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                searchOverlay.classList.remove('active');
                lenis.start();
            }
        });

        // Search logic using perfumeDatabase from product-data.js
        searchInput.addEventListener('input', (e) => {
            const query = e.target.value.toLowerCase();
            searchResults.innerHTML = '';

            if (query.length < 2) return;

            // Search in centralized database
            Object.entries(perfumeDatabase).forEach(([id, product]) => {
                const searchableText = `${product.name} ${product.description} ${product.notes.top} ${product.notes.heart} ${product.notes.base} ${product.category}`.toLowerCase();
                
                if (searchableText.includes(query)) {
                    const resultItem = document.createElement('a');
                    resultItem.href = `perfume.html?id=${id}`;
                    resultItem.className = 'search-result-item';
                    resultItem.innerHTML = `
                        <img src="${product.image}" alt="${product.name}">
                        <div class="search-result-name">${product.name}</div>
                        <div style="font-size: 0.7rem; opacity: 0.5; letter-spacing: 0.1em; color: var(--color-gold);">${product.category.toUpperCase()}</div>
                    `;
                    searchResults.appendChild(resultItem);
                }
            });
        });
    }

    // 8. Handle Deep Linking (Filter from other pages)
    const urlParams = new URLSearchParams(window.location.search);
    const filterParam = urlParams.get('filter');
    if (filterParam && filterLinks.length > 0) {
        const targetLink = Array.from(filterLinks).find(l => l.getAttribute('data-filter') === filterParam);
        if (targetLink) targetLink.click();
    }

    // 9. Quiz Card Parallax (Elite Interaction)
    const quizOptions = document.querySelectorAll('.quiz-option');
    if (quizOptions.length > 0) {
        quizOptions.forEach(card => {
            card.addEventListener('mousemove', (e) => {
                const { width, height, left, top } = card.getBoundingClientRect();
                const x = (e.clientX - left - width / 2) / 10;
                const y = (e.clientY - top - height / 2) / 10;
                
                gsap.to(card, {
                    rotationY: x,
                    rotationX: -y,
                    transformPerspective: 1000,
                    duration: 0.6,
                    ease: "power2.out"
                });
            });

            card.addEventListener('mouseleave', () => {
                gsap.to(card, {
                    rotationY: 0,
                    rotationX: 0,
                    duration: 1,
                    ease: "power3.out"
                });
            });
        });
    }

    // 10. Mobile Menu Toggle
    const mobileToggle = document.getElementById('mobile-toggle');
    const mobileMenu = document.getElementById('mobile-menu');

    if (mobileToggle && mobileMenu) {
        mobileToggle.addEventListener('click', () => {
            mobileToggle.classList.toggle('active');
            mobileMenu.classList.toggle('active');
            
            // Toggle Scroll
            if (mobileMenu.classList.contains('active')) {
                lenis.stop();
            } else {
                lenis.start();
            }
        });

        // Close menu when clicking a link
        const mobileLinks = mobileMenu.querySelectorAll('a');
        mobileLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileToggle.classList.remove('active');
                mobileMenu.classList.remove('active');
                lenis.start();
            });
        });
    }

});
