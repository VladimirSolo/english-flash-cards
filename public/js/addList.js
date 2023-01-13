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
      const doubleList = '<div style="color:red">Эта тема уже находится в базе</div>';
      doubleLists?.insertAdjacentHTML('afterend', doubleList);
    } else {
      const newList = '<div style="color:green">Тема успешно добавлена</div>';
      doubleLists?.insertAdjacentHTML('afterend', newList);
    }
  } catch (err) {
    console.log('eer18addList<==========', err);
  }

})
