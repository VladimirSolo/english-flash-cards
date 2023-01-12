const { addNewList } = document.forms;
const doubleLists = document.querySelector('.slovo')

addNewList.addEventListener('submit', async (event) => {
  event.preventDefault();
  const title = event.target.newList.value;
  // console.log('------title------', title);
  try {
    const response = await fetch('/user/newList/new', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({ title }),
    })

    const { newUserList } = await response.json();
    document.querySelector('#newList').value = '';
    
    if (newUserList[1] === false) {
      const doubleList = '<div style="color red">Эта тема уже находится в базе</div>';
      doubleLists?.insertAdjacentHTML('beforeend', doubleList);
    } else {
      const newList = '<div>Тема успешно добавлена</div>';
      doubleLists?.insertAdjacentHTML('beforeend', newList);
    }
    
  } catch (err) {
    console.log('eer18addList<==========', err);
  }

})
