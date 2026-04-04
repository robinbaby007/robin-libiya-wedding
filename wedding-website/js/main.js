/* ==========================================
   Wedding Website - JavaScript
   Robin Baby & Libiya Joseph
   ========================================== */

document.addEventListener('DOMContentLoaded', () => {

  /* ---------- Navigation ---------- */
  const navbar = document.getElementById('navbar');
  const navToggle = document.getElementById('navToggle');
  const navMenu = document.getElementById('navMenu');
  const navLinks = document.querySelectorAll('.nav-link');

  // Scroll-based navbar styling
  function handleNavScroll() {
    if (window.scrollY > 80) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  }

  window.addEventListener('scroll', handleNavScroll);
  handleNavScroll();

  // Mobile menu toggle
  navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    navToggle.classList.toggle('active');
  });

  // Close mobile menu on link click
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('active');
      navToggle.classList.remove('active');
    });
  });

  // Active nav link on scroll
  function updateActiveLink() {
    const sections = document.querySelectorAll('section[id]');
    const scrollPos = window.scrollY + 150;

    sections.forEach(section => {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      const id = section.getAttribute('id');

      if (scrollPos >= top && scrollPos < top + height) {
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('active');
          }
        });
      }
    });
  }

  window.addEventListener('scroll', updateActiveLink);

  // Smooth scroll for nav links
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = link.getAttribute('href');
      const target = document.querySelector(targetId);
      if (target) {
        const offset = navbar.offsetHeight;
        const targetPosition = target.offsetTop - offset;
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    });
  });

  // Smooth scroll for hero CTA
  const heroCta = document.querySelector('.hero-cta');
  if (heroCta) {
    heroCta.addEventListener('click', (e) => {
      e.preventDefault();
      const target = document.querySelector(heroCta.getAttribute('href'));
      if (target) {
        const offset = navbar.offsetHeight;
        window.scrollTo({
          top: target.offsetTop - offset,
          behavior: 'smooth'
        });
      }
    });
  }

  /* ---------- Parallax Effect on Hero ---------- */
  const heroBg = document.querySelector('.hero-bg img');

  function handleParallax() {
    if (heroBg) {
      const scrolled = window.scrollY;
      const heroHeight = document.querySelector('.hero').offsetHeight;

      if (scrolled < heroHeight) {
        const speed = 0.3;
        heroBg.style.transform = `scale(1.05) translateY(${scrolled * speed}px)`;
      }
    }
  }

  window.addEventListener('scroll', handleParallax);

  /* ---------- Scroll Animations ---------- */
  const observerOptions = {
    root: null,
    rootMargin: '0px 0px -60px 0px',
    threshold: 0.15
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        // Stagger animations for siblings
        const siblings = entry.target.parentElement.querySelectorAll('.animate-on-scroll');
        let delay = 0;
        siblings.forEach((sibling, i) => {
          if (sibling === entry.target) {
            delay = i * 100;
          }
        });

        setTimeout(() => {
          entry.target.classList.add('visible');
        }, delay);

        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  document.querySelectorAll('.animate-on-scroll').forEach(el => {
    observer.observe(el);
  });

  /* ---------- Countdown Timer ---------- */
  function updateCountdown() {
    const weddingDate = new Date('January 1, 2026 00:00:00').getTime();
    const now = new Date().getTime();
    const distance = weddingDate - now;

    if (distance < 0) {
      document.getElementById('days').textContent = '000';
      document.getElementById('hours').textContent = '00';
      document.getElementById('minutes').textContent = '00';
      document.getElementById('seconds').textContent = '00';
      return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById('days').textContent = String(days).padStart(3, '0');
    document.getElementById('hours').textContent = String(hours).padStart(2, '0');
    document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
    document.getElementById('seconds').textContent = String(seconds).padStart(2, '0');
  }

  updateCountdown();
  setInterval(updateCountdown, 1000);

  /* ---------- Photo Gallery Lightbox ---------- */
  const galleryItems = document.querySelectorAll('.gallery-item');
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightboxImg');
  const lightboxClose = document.getElementById('lightboxClose');
  const lightboxPrev = document.getElementById('lightboxPrev');
  const lightboxNext = document.getElementById('lightboxNext');
  const lightboxCounter = document.getElementById('lightboxCounter');

  let currentImageIndex = 0;
  const images = [];

  galleryItems.forEach((item, index) => {
    const img = item.querySelector('img');
    images.push(img.src);

    item.addEventListener('click', () => {
      currentImageIndex = index;
      openLightbox(index);
    });
  });

  function openLightbox(index) {
    lightboxImg.src = images[index];
    lightboxCounter.textContent = `${index + 1} / ${images.length}`;
    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeLightbox() {
    lightbox.classList.remove('active');
    document.body.style.overflow = '';
  }

  function nextImage() {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    lightboxImg.src = images[currentImageIndex];
    lightboxCounter.textContent = `${currentImageIndex + 1} / ${images.length}`;
  }

  function prevImage() {
    currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
    lightboxImg.src = images[currentImageIndex];
    lightboxCounter.textContent = `${currentImageIndex + 1} / ${images.length}`;
  }

  lightboxClose.addEventListener('click', closeLightbox);
  lightboxNext.addEventListener('click', nextImage);
  lightboxPrev.addEventListener('click', prevImage);

  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
      closeLightbox();
    }
  });

  // Keyboard navigation
  document.addEventListener('keydown', (e) => {
    if (!lightbox.classList.contains('active')) return;
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowRight') nextImage();
    if (e.key === 'ArrowLeft') prevImage();
  });

  /* ---------- RSVP Form ---------- */
  const rsvpForm = document.getElementById('rsvpForm');
  const rsvpSuccess = document.getElementById('rsvpSuccess');

  if (rsvpForm) {
    rsvpForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const formData = new FormData(rsvpForm);
      const name = formData.get('name');
      const attending = formData.get('attending');
      const message = formData.get('message');

      // In production, you'd send this to a server
      console.log('RSVP Submitted:', { name, attending, message });

      // Show success message
      rsvpForm.style.display = 'none';
      rsvpSuccess.style.display = 'block';

      // Animate success
      rsvpSuccess.style.opacity = '0';
      rsvpSuccess.style.transform = 'translateY(20px)';
      rsvpSuccess.style.transition = 'all 0.5s ease';

      requestAnimationFrame(() => {
        rsvpSuccess.style.opacity = '1';
        rsvpSuccess.style.transform = 'translateY(0)';
      });
    });
  }

  /* ---------- Hero Image Load Effect ---------- */
  const heroImg = document.querySelector('.hero-bg img');
  if (heroImg) {
    heroImg.style.opacity = '0';
    heroImg.style.transition = 'opacity 1.2s ease';

    heroImg.onload = () => {
      heroImg.style.opacity = '1';
    };

    if (heroImg.complete) {
      heroImg.style.opacity = '1';
    }
  }

});
