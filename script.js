const jokeCard = document.getElementById('jokeCard');
const joke = document.getElementById('jokeText');

const getJoke = async () => {
	try {
		const res = await fetch('https://api.chucknorris.io/jokes/random');
		const data = await res.json();
		joke.innerHTML = `<h3>${data.value}</h3>`;
	} catch (error) {
		console.log(error);
	}
};

jokeCard.addEventListener('click', () => {
	jokeCard.classList.toggle('flipped');
	getJoke();
});
