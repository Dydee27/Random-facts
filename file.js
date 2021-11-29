const roulette = [
	"Water on our planet may have originated from ice specks floating in a cosmic cloud 4.6 billion years ago.",
	"The hottest inhabited place in the world is in Ethiopia.",
	"Like humans, koalas actually have unique individual fingerprints.",
	"Russia has 11 time zones within the country.",
	"Saint Lucia is the only country in the world named after a woman.",
];

const russian = (array) => {
	return array[Math.floor(Math.random() * array.length)];
};

console.log(russian(roulette));
