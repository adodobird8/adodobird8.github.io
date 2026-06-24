// Scroll-triggered reveal animations.
// Adds .is-visible to elements with class .reveal-on-scroll when they enter the viewport.
(function() {
  const items = document.querySelectorAll('.reveal-on-scroll');
  if (!('IntersectionObserver' in window) || items.length === 0) {
    // Older browser or nothing to observe — make everything visible immediately.
    items.forEach(el => el.classList.add('is-visible'));
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });

  items.forEach(el => observer.observe(el));
})();
