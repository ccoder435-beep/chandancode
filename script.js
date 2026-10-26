/**
 * Chandan Code — Minimalist JavaScript Engine
 * Author: Chandan Kumar (https://chandancode.github.io)
 * Multi-Page Navigation Support, Typewriter, Search & Form Handlers
 */

document.addEventListener('DOMContentLoaded', () => {

  /* ==========================================
     1. MOBILE NAVIGATION DRAWER
     ========================================== */
  const mobileToggle = document.getElementById('mobileToggle');
  const navMenu = document.getElementById('navMenu');

  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener('click', () => {
      const isOpen = navMenu.classList.toggle('open');
      mobileToggle.classList.toggle('active');
      mobileToggle.setAttribute('aria-expanded', String(isOpen));
    });

    document.addEventListener('click', (e) => {
      if (!navMenu.contains(e.target) && !mobileToggle.contains(e.target) && navMenu.classList.contains('open')) {
        navMenu.classList.remove('open');
        mobileToggle.classList.remove('active');
        mobileToggle.setAttribute('aria-expanded', 'false');
      }
    });
  }

  /* ==========================================
     2. DYNAMIC HERO TYPEWRITER (Home Page)
     ========================================== */
  const typewriterElement = document.getElementById('heroTypewriter');
  if (typewriterElement) {
    const roles = [
      'Electronics Engineering Student',
      'Python & C/C++ Developer',
      'ESP32 & Embedded Systems Creator',
      'Web & IoT Builder',
      'Learning Japanese (日本語)'
    ];

    let roleIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    const typingSpeed = 80;
    const deletingSpeed = 40;
    const pauseEnd = 1900;

    function runTypewriter() {
      const currentRole = roles[roleIndex];

      if (!isDeleting) {
        typewriterElement.textContent = currentRole.substring(0, charIndex + 1);
        charIndex++;

        if (charIndex === currentRole.length) {
          isDeleting = true;
          setTimeout(runTypewriter, pauseEnd);
          return;
        }
      } else {
        typewriterElement.textContent = currentRole.substring(0, charIndex - 1);
        charIndex--;

        if (charIndex === 0) {
          isDeleting = false;
          roleIndex = (roleIndex + 1) % roles.length;
          setTimeout(runTypewriter, 350);
          return;
        }
      }

      setTimeout(runTypewriter, isDeleting ? deletingSpeed : typingSpeed);
    }

    runTypewriter();
  }

  /* ==========================================
     3. BLOG / CODING NOTES LIVE SEARCH (blog.html)
     ========================================== */
  const blogSearch = document.getElementById('blogSearch');
  const noteCards = document.querySelectorAll('.note-card');

  if (blogSearch && noteCards.length > 0) {
    blogSearch.addEventListener('input', (e) => {
      const query = e.target.value.trim().toLowerCase();

      noteCards.forEach(card => {
        const text = card.textContent.toLowerCase();
        if (!query || text.includes(query)) {
          card.style.display = 'flex';
        } else {
          card.style.display = 'none';
        }
      });
    });
  }

  /* ==========================================
     4. DOWNLOAD NOTE NOTIFICATION
     ========================================== */
  const downloadBtns = document.querySelectorAll('.btn-download-note');
  downloadBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const title = btn.getAttribute('data-note') || 'Notes';
      showToast(`📥 Preparing "${title}" for download...`);
    });
  });

  /* ==========================================
     5. CONTACT FORM VALIDATION (contact.html)
     ========================================== */
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const name = document.getElementById('formName');
      const email = document.getElementById('formEmail');
      const message = document.getElementById('formMessage');

      const nameErr = document.getElementById('nameErr');
      const emailErr = document.getElementById('emailErr');
      const msgErr = document.getElementById('msgErr');

      [nameErr, emailErr, msgErr].forEach(el => { if (el) el.textContent = ''; });

      let valid = true;

      if (!name.value.trim() || name.value.trim().length < 2) {
        nameErr.textContent = 'Please enter your name.';
        valid = false;
      }

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!email.value.trim() || !emailRegex.test(email.value.trim())) {
        emailErr.textContent = 'Please enter a valid email address.';
        valid = false;
      }

      if (!message.value.trim() || message.value.trim().length < 8) {
        msgErr.textContent = 'Please write a message (at least 8 characters).';
        valid = false;
      }

      if (!valid) return;

      const submitBtn = contactForm.querySelector('button[type="submit"]');
      const originalText = submitBtn.textContent;
      submitBtn.textContent = 'Sending...';
      submitBtn.disabled = true;

      setTimeout(() => {
        submitBtn.textContent = 'Message Sent';
        showToast('✓ Message sent successfully to Chandan Kumar!');
        contactForm.reset();

        setTimeout(() => {
          submitBtn.textContent = originalText;
          submitBtn.disabled = false;
        }, 3000);
      }, 1000);
    });
  }

  /* ==========================================
     6. TOAST NOTIFICATION HELPER
     ========================================== */
  window.showToast = function(message) {
    let toast = document.getElementById('toastBox');
    if (!toast) {
      toast = document.createElement('div');
      toast.id = 'toastBox';
      toast.className = 'toast-box';
      document.body.appendChild(toast);
    }

    toast.innerHTML = `<span>${message}</span>`;
    toast.classList.add('active');

    if (window.toastTimer) clearTimeout(window.toastTimer);
    window.toastTimer = setTimeout(() => {
      toast.classList.remove('active');
    }, 3800);
  };

});
