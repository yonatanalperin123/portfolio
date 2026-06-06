const cursor = document.getElementById('cursor');
let cx = -200, cy = -200, tx = -200, ty = -200;

document.addEventListener('mousemove', e => { tx = e.clientX; ty = e.clientY; }, { passive: true });

(function loop() {
    cx += (tx - cx) * .18;
    cy += (ty - cy) * .18;
    cursor.style.transform = `translate(${cx}px, ${cy}px) translate(-50%, -50%)`;
    requestAnimationFrame(loop);
})();

document.querySelectorAll('a').forEach(el => {
    el.addEventListener('mouseenter', () => cursor.classList.add('big'));
    el.addEventListener('mouseleave', () => cursor.classList.remove('big'));
});

const thread = document.getElementById('thread');
window.addEventListener('scroll', () => {
    const p = window.scrollY / (document.documentElement.scrollHeight - window.innerHeight);
    thread.style.height = (p * 100) + '%';
}, { passive: true });

const io = new IntersectionObserver(
    entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('in'); }),
    { threshold: .08 }
);
document.querySelectorAll('.reveal').forEach(el => io.observe(el));
