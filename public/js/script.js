const cards = document.querySelectorAll('.wrapper_card');

cards.forEach((card) => card.addEventListener('click', async (event) => {
  // reverse card
  if (!event.target.classList.contains('btnDelete')) {
    card.classList.toggle('flip');
  }

  // fetch method DELETE card
  if (event.target.classList.contains('btnDelete')) {
    console.log('DELETE pony id', event.target.parentNode.parentNode.dataset.id);
    const response = await fetch(`/list/${event.target.parentNode.parentNode.dataset.id}`, { method: 'PUT' });
    if (response.status === 200) {
      event.target.parentNode.parentNode.remove();
    } else if (response.status === 500) {
      alert('удалить не удалось, попробуйте позднее');
    }
  }
}));
