// Initialize Lenis for smooth scrolling
const lenis = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    smooth: true,
});

function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

// Integrate GSAP with Lenis
gsap.registerPlugin(ScrollTrigger);

ScrollTrigger.config({ ignoreMobileResize: true });

// Sync ScrollTrigger with Lenis
lenis.on('scroll', ScrollTrigger.update);

gsap.ticker.add((time) => {
    lenis.raf(time * 1000);
});
gsap.ticker.lagSmoothing(0);

// Set up default config
gsap.defaults({ ease: "power3.out" });

// Loader Animation
window.addEventListener('load', () => {
    const tl = gsap.timeline();

    // Fake loading progress
    tl.to(".progress-bar", {
        width: "100%",
        duration: 2,
        ease: "power2.inOut"
    })
    .to(".loader-content > h1", {
        y: -20,
        opacity: 0,
        duration: 0.5
    }, "+=0.2")
    .to(".preloader", {
        y: "-100%",
        duration: 1,
        ease: "power4.inOut"
    }, "+=0.1")
    .from(".navbar", {
        y: -100,
        duration: 1,
        opacity: 0
    }, "-=0.5")
    .from(".hero-subtitle", {
        y: 20,
        opacity: 0,
        duration: 0.8
    }, "-=0.5")
    .from(".hero-title", {
        y: 50,
        opacity: 0,
        stagger: 0.2,
        duration: 1
    }, "-=0.6")
    .from(".hero-desc", {
        y: 20,
        opacity: 0,
        duration: 0.8
    }, "-=0.6")
    .from(".hero-cta", {
        y: 20,
        opacity: 0,
        duration: 0.8
    }, "-=0.6")
    .from(".scroll-indicator", {
        opacity: 0,
        duration: 1
    }, "-=0.4");
});

// Parallax Background
gsap.to(".parallax-bg", {
    yPercent: 30,
    ease: "none",
    scrollTrigger: {
        trigger: ".hero",
        start: "top top",
        end: "bottom top",
        scrub: true
    }
});

// Section Headers Animation
gsap.utils.toArray('.section-header').forEach(header => {
    gsap.from(header.querySelector('.section-title'), {
        x: -50,
        opacity: 0,
        duration: 1,
        scrollTrigger: {
            trigger: header,
            start: "top 80%",
            toggleActions: "play none none reverse"
        }
    });

    gsap.from(header.querySelector('.section-line'), {
        scaleX: 0,
        transformOrigin: "left center",
        duration: 1.5,
        ease: "power4.out",
        scrollTrigger: {
            trigger: header,
            start: "top 80%",
            toggleActions: "play none none reverse"
        }
    });
});

// Skills Card Scroll Animation
gsap.from(".skill-card", {
    y: 100,
    opacity: 0,
    stagger: 0.2,
    duration: 1,
    scrollTrigger: {
        trigger: ".skills-grid",
        start: "top 80%",
        toggleActions: "play none none reverse"
    }
});

// About Me Text Reveal
gsap.from(".about-text", {
    y: 30,
    opacity: 0,
    stagger: 0.2,
    duration: 1,
    scrollTrigger: {
        trigger: ".about-me",
        start: "top 80%",
        toggleActions: "play none none reverse"
    }
});

// Tech Tree Animations
gsap.utils.toArray('.reveal-node').forEach((node, index) => {
    const isLeft = node.classList.contains('left');
    
    gsap.from(node, {
        x: isLeft ? -100 : 100,
        opacity: 0,
        duration: 1,
        scrollTrigger: {
            trigger: node,
            start: "top 85%",
            toggleActions: "play none none reverse"
        }
    });
});

// Animate the tree line drawing
gsap.from(".tree-line", {
    scaleY: 0,
    transformOrigin: "top center",
    ease: "none",
    scrollTrigger: {
        trigger: ".tech-tree",
        start: "top 80%",
        end: "bottom 80%",
        scrub: true
    }
});

// Initialize VanillaTilt for 3D effect on skill cards
VanillaTilt.init(document.querySelectorAll(".tilt-card"), {
    max: 15,
    speed: 400,
    glare: true,
    "max-glare": 0.2,
});

// Navbar background on scroll
window.addEventListener('scroll', () => {
    const nav = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
});

// Contact Elements Animation
gsap.from(".contact-info > *", {
    y: 30,
    opacity: 0,
    stagger: 0.2,
    duration: 1,
    scrollTrigger: {
        trigger: ".contact-wrapper",
        start: "top 80%",
        toggleActions: "play none none reverse"
    }
});

// Lightbox logic moved to global scope in index.html to better handle dynamic data.
