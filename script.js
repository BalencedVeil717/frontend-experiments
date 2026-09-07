const cards = [...document.querySelectorAll('.project-card')];
const filterButtons = [...document.querySelectorAll('.filter-button')];
const searchInput = document.querySelector('#project-search');
const emptyState = document.querySelector('#empty-state');
const surpriseButton = document.querySelector('#surprise-button');
const toast = document.querySelector('#toast');

let activeFilter = 'all';

cards.forEach((card) => {
  const link = card.querySelector('.card-link');
  const title = card.querySelector('h3').textContent;

  card.setAttribute('role', 'link');
  card.setAttribute('tabindex', '0');
  card.setAttribute('aria-label', `Open ${title}`);
  card.addEventListener('click', (event) => {
    if (event.target.closest('a')) return;
    window.location.href = link.href;
  });
  card.addEventListener('keydown', (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      window.location.href = link.href;
    }
  });
});

function updateProjects() {
  const search = searchInput.value.trim().toLowerCase();
  let visibleCount = 0;

  cards.forEach((card) => {
    const matchesFilter = activeFilter === 'all' || card.dataset.category === activeFilter;
    const matchesSearch = !search || card.dataset.search.includes(search);
    const visible = matchesFilter && matchesSearch;
    card.classList.toggle('is-hidden', !visible);
    if (visible) visibleCount += 1;
  });

  emptyState.hidden = visibleCount !== 0;
}

filterButtons.forEach((button) => {
  button.addEventListener('click', () => {
    activeFilter = button.dataset.filter;
    filterButtons.forEach((item) => item.classList.toggle('active', item === button));
    updateProjects();
  });
});

searchInput.addEventListener('input', updateProjects);

surpriseButton.addEventListener('click', () => {
  const availableCards = cards.filter((card) => !card.classList.contains('is-hidden'));
  const card = availableCards[Math.floor(Math.random() * availableCards.length)] || cards[0];
  const title = card.querySelector('h3').textContent;

  card.scrollIntoView({ behavior: 'smooth', block: 'center' });
  card.animate(
    [{ transform: 'scale(1)' }, { transform: 'scale(1.025)' }, { transform: 'scale(1)' }],
    { duration: 650, easing: 'ease-out' }
  );
  toast.textContent = `Your next stop: ${title}`;
  toast.classList.add('visible');
  window.setTimeout(() => toast.classList.remove('visible'), 2600);
});
