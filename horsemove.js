//создаем массивы букв и номеров, который будем использовать для подписи строк и столбцов и счетчик для id ячеек
let alph = ['', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', '']
let nums = ['', 8, 7, 6, 5 ,4 ,3 ,2, 1, '']
let idcount = 0;

//создаем таблицу
let table = document.getElementById('table');
let tbody = document.createElement('table');
for (let i = 0; i < 10; i++) {
	let tr = document.createElement('tr');
	for (let j = 0; j < 10; j++) {
	if (j === 0 && i === 0) {
		let td = document.createElement('td');
		tr.appendChild(td);
		} else if ((j > 0 && j < 9) && (i === 0 || i === 9)) {
		
		//в ячейки нижних и верхних граничных строк, за исключением угловых, пишем номер стоблца
			let td = document.createElement('td');
			td.innerHTML = alph[j];
			tr.appendChild(td);
			} else if (i > 0 && j === 0 || j === 9) {
				
			//в ячейки левых и правых граничных столбцов, пишем обозначение строки, остальные оставляем пустыми
				let td = document.createElement('td');
				td.innerHTML = nums[i];
				tr.appendChild(td);
				} else {
				
				//устанавливаем id и функцию клика на ячейки шахматной доски
		let td = document.createElement('td');
		td.id = alph[j] + i;
		td.setAttribute('onClick', 'showmoves(this.id);');
		
		//закрашиваем ячейки в шахматном порядке
		if (i%2 === 0 && j%2 !== 0)
			td.setAttribute("class","black");
			else if (i%2 !== 0 && j%2 === 0)
			td.setAttribute("class","black");
		else 
			td.setAttribute("class","white");
		tr.appendChild(td);
		idcount++;
		}
	}
	tbody.appendChild(tr);
}
table.appendChild(tbody);

//создаем массивы для использованных id и исходных цветов, чтобы вернуть исходные цвета ячейкам после очередного шага
let posid = [];
let prevcolors = [];

function showmoves(cell) {
//возвращаем исходные цвета шахматной доске
for (let i = 0; i < posid.length; i++) {
document.getElementById(posid[i]).setAttribute('class', prevcolors[i]);
}

//очищаем массивы и объявляем переменные, где n это размер шахматной доски, count счетчик, posmoves переменная для вычисления возможных шагов
prevcolors.length = posid.length = 0;
let n = 8;
let count = 1;
let posmoves = 0;
let move = {};

//записываем значения исходного цвета и айди выбранной ячейки в соответствующие массивы
prevcolors[0] = document.getElementById(cell).className;
posid[0] = cell;
document.getElementById(cell).setAttribute('class','select');
move.alph = [1,2,-1,-2];
move.num = [2,1,2,1];

//запускаем цикл для вычисления возможных шагов, подходящие значения записываем в массив для айди
const initPos = cell;

//проверяем допустимость введенного значения
if (initPos.length === 2 && initPos !== "") {
 for (let k = 1; k <= 8; k++) {

 	//проверяем попадает ли оно в шахматную доску
	if (initPos[0].toUpperCase() === alph[k] && initPos[1] > 0 && initPos[1] <= 8) {
		dur = true;
		for(let i = 0; i <= 4; i++){

			//переменная которая высчитывает возможную букву, она должна быть от 1 до 8
			let tmpalph = k + move.alph[i];
			if (tmpalph > 0 && tmpalph <= 8){

				//аналогично с возможным номером
				let numplus = +initPos[1]+move.num[i];
				if(numplus > 0 && numplus <= 8){
					posid[count] = alph[tmpalph]+numplus;
					count+=1;
					}
				let nummin = +initPos[1]-move.num[i];
				if(nummin > 0 && nummin <= 8){
					posid[count] = alph[tmpalph]+nummin;
					count+=1;
					}
			}
		
		} 
	}
 }
}

//запоминаем исходные цвета и меняем цвет ячеек, куда возможен ход
for (let i = 1; i < posid.length; i++) {
prevcolors[i] = document.getElementById(posid[i]).className;
document.getElementById(posid[i]).setAttribute('class','posible');
}
}