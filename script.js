const io=new IntersectionObserver(e=>e.forEach(x=>x.isIntersecting&&x.target.classList.add('in')),{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>io.observe(el));


const filters = document.querySelectorAll('.filter');
const items = document.querySelectorAll('.item');

// Show item counts on each tab
['all', 'coffee', 'specials', 'pastries'].forEach((cat) => {
  const count = cat === 'all'
    ? items.length
    : [...items].filter((item) => item.dataset.cat === cat).length;
  document.getElementById('c-' + cat).textContent = count;
});

// Filter items when a tab is clicked
filters.forEach((btn) => {
  btn.addEventListener('click', () => {
    filters.forEach((b) => b.classList.remove('active'));
    btn.classList.add('active');

    const selected = btn.dataset.filter;
    items.forEach((item) => {
      item.classList.toggle('hide', selected !== 'all' && item.dataset.cat !== selected);
    });
  });
});