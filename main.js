const roles = ['Backend Engineer in Rust and Python', 'Rust Web Developer', 'Python Web Developer', 'Systems Engineer'];
let ri = 0, ci = 0, deleting = false;
const el = document.getElementById('typewriter');

function type() {
    const current = roles[ri];
    if (!deleting) {
      el.textContent = current.slice(0, ++ci);
      if (ci === current.length) { deleting = true; setTimeout(type, 1800); return; }
    } else {
      el.textContent = current.slice(0, --ci);
      if (ci === 0) { deleting = false; ri = (ri + 1) % roles.length; }
    }
    setTimeout(type, deleting ? 50 : 90);
}
setTimeout(type, 1200);

const reveals = document.querySelectorAll('.reveal');
const obs = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); } });
  }, { threshold: 0.1 });
reveals.forEach(r => obs.observe(r));