const addWords = document.forms.addListAndWords;

addWords.addEventListener('submit', async (event) => {
  event.preventDefault();
  const id = event.target.addWords.value;
})
