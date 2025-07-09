const jokeCard = document.getElementById('jokeCard');
const joke = document.getElementById('jokeText');

const getJoke = () => {
	const xhr = new XMLHttpRequest();
	xhr.open('GET', 'https://api.chucknorris.io/jokes/random');

	xhr.onreadystatechange = function () {
		if (this.readyState === 4) {
			if (this.status === 200) {
				// console.log(JSON.parse(this.responseText).value);
				joke.innerHTML = `<h3>${JSON.parse(this.responseText).value}</h3>`;
			} else {
				joke.innerHTML = `<h3> Something went Wrong... </h3>`;
			}
		}
	};

	xhr.send();
};

jokeCard.addEventListener('click', () => {
	jokeCard.classList.toggle('flipped');
	getJoke();
});
