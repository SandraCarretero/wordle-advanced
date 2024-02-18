import deleteImg from '../assets/images/delete.svg';

// Aquí van los getElementById y los querySelectorAll que pondrías al principio.
const gameElement = document.getElementById('game');
const popupElement = document.getElementById('pop-up');

const ALL_WORDS = [
	'perro',
	'gato',
	'portatil',
	'programa',
	'montaña',
	'playa',
	'silueta',
	'natural',
	'libro',
	'musica'
];

const letterColors = {
	correct: 'letter-correct',
	present: 'letter-present',
	incorrect: 'letter-incorrect'
};
const NUMBER_OF_TRIES = 5;

let secretWord;
let currentRow = 0;
let userGuess = '';

// Función para generar el teclado virtual
const generateKeyboard = () => {
	const alphabet = 'qwertyuiopasdfghjklñzxcvbnm';
	const keyboardElement = document.getElementById('keyboard');
	for (const letter of alphabet) {
		const button = document.createElement('button');
		button.textContent = letter.toUpperCase();
		button.classList.add('keyboard__letter');
		button.addEventListener('click', () => addLetter(letter));
		keyboardElement.appendChild(button);
	}

	const deleteButton = document.createElement('button');
	const deleteButtonImage = document.createElement('img');
	deleteButtonImage.src = deleteImg;
	deleteButton.classList.add('keyboard__letter');
	deleteButton.classList.add('keyboard__delete');
	deleteButton.addEventListener('click', deleteLastLetter);
	deleteButton.append(deleteButtonImage);
	keyboardElement.appendChild(deleteButton);

	const sendButton = document.createElement('button');
	sendButton.textContent = 'Enviar';
	sendButton.classList.add('keyboard__letter');
	sendButton.classList.add('keyboard__send');
	sendButton.addEventListener('click', checkGuess);
	keyboardElement.appendChild(sendButton);
};

const deleteLastLetter = () => {
	if (userGuess.length > 0) {
		userGuess = userGuess.slice(0, -1); // Elimina la última letra de la cadena
		updateGameDisplay(); // Actualiza la visualización del juego
	}
};

// Función para crear la tabla del juego
const createGameTable = () => {
	const fragment = document.createDocumentFragment();
	for (let i = 0; i < NUMBER_OF_TRIES; i++) {
		const newRow = document.createElement('div');
		newRow.classList.add('game__row');
		for (let j = 0; j < secretWord.length; j++) {
			const newLetterContainer = document.createElement('span');
			newLetterContainer.classList.add('letter');
			newRow.append(newLetterContainer);
		}
		fragment.append(newRow);
	}
	gameElement.append(fragment);
};

// Función para generar una palabra aleatoria
const generateRandomWord = () => {
	const random = Math.floor(Math.random() * ALL_WORDS.length);
	secretWord = ALL_WORDS[random];
	createGameTable();
};

// Función para agregar una letra a la suposición del usuario
const addLetter = letter => {
	userGuess += letter;
	updateGameDisplay();
};

// Función para actualizar la visualización del juego
// Función para actualizar la visualización del juego
const updateGameDisplay = () => {
	// Obtiene la fila actual del juego
	const currentRowElement = gameElement.children[currentRow];

	if (userGuess.length <= secretWord.length) {
		// Borra el contenido de la fila actual
		currentRowElement.innerHTML = '';

		// Agrega las letras de la suposición del usuario al final de la fila
		for (let i = 0; i < userGuess.length; i++) {
			const newLetterContainer = document.createElement('span');
			newLetterContainer.classList.add('letter');
			newLetterContainer.textContent = userGuess[i].toUpperCase();
			currentRowElement.appendChild(newLetterContainer);
		}

		// Agrega espacios en blanco para las letras restantes
		for (let i = userGuess.length; i < secretWord.length; i++) {
			const newLetterContainer = document.createElement('span');
			newLetterContainer.classList.add('letter');
			currentRowElement.appendChild(newLetterContainer);
		}
	}
};

// Funciones para verificar si el usuario ha ganado o perdido
const checkWin = () => {
	if (userGuess === secretWord) {
		printAllCells(letterColors.correct);
		showPopup('¡Felicidades! ¡Has ganado!');
	} else {
		checkLose();
	}
};

const checkLose = () => {
	if (currentRow === NUMBER_OF_TRIES) {
		showPopup(
			`Has alcanzado el límite de intentos. La palabra era: ${secretWord}`
		);
	}
};

// Función para mostrar un mensaje emergente
const showPopup = message => {
	popupElement.textContent = message;
	popupElement.classList.add('pop-up--show');

	setTimeout(() => {
		popupElement.classList.remove('pop-up--show');
	}, 3000);
};

// Función para pintar todas las celdas con un color dado
const printAllCells = color => {
	for (let index = 0; index < userGuess.length; index++) {
		paintLetters(color, index);
	}
};

// Función para pintar una letra con un color dado
const paintLetters = (color, position) => {
	gameElement.children[currentRow].children[position].classList.add(color);
};

// Función para verificar la suposición del usuario y actualizar el juego
const checkGuess = () => {
	if (userGuess.length !== secretWord.length) {
		showPopup(`La palabra debe tener ${secretWord.length} letras`);
		return;
	}

	for (let i = 0; i < userGuess.length; i++) {
		const userLetter = userGuess[i];
		const secretLetter = secretWord[i];
		if (userLetter === secretLetter) {
			paintLetters(letterColors.correct, i);
		} else if (secretWord.includes(userLetter)) {
			paintLetters(letterColors.present, i);
		} else {
			paintLetters(letterColors.incorrect, i);
		}
	}

	checkWin();
	currentRow++;
	checkLose();
	userGuess = '';
};

generateRandomWord();
generateKeyboard();

// Evento para verificar la suposición del usuario cuando presiona Enter
document.addEventListener('keypress', event => {
	if (event.key === 'Enter') {
		checkGuess();
	}
});

document.addEventListener('keydown', event => {
	if (event.key === 'Enter') {
		event.preventDefault(); // Evita que ocurra el comportamiento predeterminado
	}
});
