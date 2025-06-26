document.getElementById('search').addEventListener('input', function() {
  const term = this.value.toLowerCase();
  document.querySelectorAll('.bot-card').forEach(card => {
    card.style.display = card.innerText.toLowerCase().includes(term) ? 'block' : 'none';
  });
});
