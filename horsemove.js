//создаем массивы букв и номеров, который будем использовать для подписи строк и столбцов и счетчик для id ячеек
let alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
let nums = [8, 7, 6, 5, 4, 3, 2, 1];

function showmoves() {
  document.querySelectorAll('.posible').forEach(item => item.classList.remove('posible'));
  document.querySelector('.select')?.classList.remove('select');
  
  this.classList.add('select'); 
 
  let move = {
    alhpabet: [1, 2, -1, -2],
    num: [2, 1, -2, -1]
  };
  
  const [selectedLetter, selectedNumber] = this.id.split('');
  let posibleId = [];
  for (let i = 0; i < 4; i++) {
    posibleId = [
      ...posibleId, 
      `${alphabet[alphabet.indexOf(selectedLetter) + move.alhpabet[i]]}` +
      `${nums[nums.indexOf(+selectedNumber) + move.num[i]]}`,
      `${alphabet[alphabet.indexOf(selectedLetter) + move.alhpabet[i]]}` +
      `${nums[nums.indexOf(+selectedNumber) - move.num[i]]}`
      ];
  }
  posibleId.forEach(item => document.querySelector(`#${item}`)?.classList.add('posible'));
  //запоминаем исходные цвета и меняем цвет ячеек, куда возможен ход
}
  
document.querySelectorAll('td').forEach(item => item.addEventListener('click', showmoves));
