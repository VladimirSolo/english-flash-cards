const addWords = document.forms.addListAndWords;
const dubbleWords = document.querySelector('.slovo');

addWords.addEventListener('submit', async (event) => {
  event.preventDefault();
  const id = event.target.addWords.value;
  const title_rus = event.target.title_rus.value;
  const title_eng = event.target.title_eng.value;
  try {
    const response = await fetch('/user/newWords/new', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({ id, title_rus, title_eng }),
    });

    const { newWords } = await response.json();

    document.querySelector('#title_rus').value = '';
    document.querySelector('#title_eng').value = '';
    
    if (newWords[1] === false) {
      const doubleWord = '<div>Данные слова уже находятся в базе</div>';
      dubbleWords?.insertAdjacentHTML('beforeend', doubleWord);
      // console.log('уже существуют');
    } else {
      const newWord = '<div>Слова успешно добавлены</div>';
      dubbleWords?.insertAdjacentHTML('beforeend', newWord);
    }
  } catch (err) {
    console.log('eer31application<==========', err);
  }
});
