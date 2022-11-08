// 1 Навесить на все ячейкт событие клика по клику привязывать значение Х или О
// 2 Очередность значения Х О
// 3 Отвязать событие, запретить изменять знаяенее
// 4 Добавить проверку на выйгрыш

let checkingWinnings = (winner) => {
	let elems = document.querySelectorAll('.elem1');
	let optionOne = (elems[0].textContent === elems[1].textContent && elems[2].textContent === elems[0].textContent) && elems[0].textContent;
	let optionTwo = (elems[3].textContent === elems[4].textContent && elems[5].textContent === elems[3].textContent) && elems[3].textContent;
	let optionThree = (elems[6].textContent === elems[7].textContent && elems[8].textContent === elems[6].textContent) && elems[6].textContent;
	let optionFour = (elems[0].textContent === elems[3].textContent && elems[6].textContent === elems[0].textContent) && elems[0].textContent;
	let optionFive = (elems[1].textContent === elems[4].textContent && elems[7].textContent === elems[1].textContent) && elems[1].textContent;
	let optionSix = (elems[2].textContent === elems[5].textContent && elems[8].textContent === elems[2].textContent) && elems[2].textContent;
	let optionSeven = (elems[0].textContent === elems[4].textContent && elems[8].textContent === elems[0].textContent) && elems[0].textContent;
	let optionEight = (elems[2].textContent === elems[4].textContent && elems[6].textContent === elems[2].textContent) && elems[2].textContent;

	if ((optionOne || optionTwo || optionThree || optionFour ||
		optionFive || optionSix || optionSeven || optionEight) && winner) {
		setTimeout(() => {
			alert(`Победил ${winner}`)
		}, 50)
		return true;
	} 
}

let addEventAllCells = () => {
	let isX = true;
	let elems = document.querySelectorAll('.elem1');
	let assignValue = event => {
		if (event.target.textContent) return;
		event.target.textContent = isX ? 'X' : 'O';
		isX = !isX;
		let isFinish = checkingWinnings(event.target.textContent)
		if (isFinish) {	
			elems.forEach(elem => {
			elem.removeEventListener('click', assignValue);
		})	

		}
	}

	elems.forEach(elem => {
		elem.addEventListener('click', assignValue);
	})	
}

addEventAllCells();
