let alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
let nums = [8, 7, 6, 5, 4, 3, 2, 1];

function showMoves() {
  document.querySelectorAll('.posible').forEach(item => item.classList.remove('posible'));
  document.querySelector('.select')?.classList.remove('select');
  
  this.classList.add('select'); 
 
  //i have only this idea how to count moves
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
}
  
document.querySelectorAll('td').forEach(item => item.addEventListener('click', showMoves));
