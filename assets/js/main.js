// Neon Wheels — site interactions

// Mobile nav toggle
document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.querySelector('.nav-toggle');
  const menu = document.getElementById('nav');
  if (toggle && menu) {
    toggle.addEventListener('click', () => menu.classList.toggle('open'));
  }

  // Scroll reveal
  const reveals = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && reveals.length) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add('in');
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.12 });
    reveals.forEach((el) => io.observe(el));
  } else {
    reveals.forEach((el) => el.classList.add('in'));
  }
});
