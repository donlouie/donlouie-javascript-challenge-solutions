//* Fetch dad jokes from api
const jokes = document.querySelector('#jokes');
const button = document.querySelector('button');

const adddNewJoke = async () => {
  const jokeText = await getDadJoke();
  const newLi = document.createElement('LI');
  newLi.append(jokeText);
  jokes.append(newLi);
};

const getDadJoke = async () => {
  try {
    const config = { headers: { Accept: 'application/json' } };
    const res = await axios.get('https://icanhazdadjoke.com/', config);
    return res.data.joke;
  } catch (error) {
    return 'NO JOKES AVAILABLE! SORRY :(';
  }
};

button.addEventListener('click', adddNewJoke);
