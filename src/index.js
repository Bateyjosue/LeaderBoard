import './style.css';
import { fetchData, postGames } from './modules/gameScore.js';

const containerScore = document.querySelector('.scores');
fetchData().then((data) => {
  if (data.result.length !== 0) {
    data.result.forEach((score) => {
      containerScore.innerHTML += `
        <li>${score.user}:${score.score}</li>
      `;
    });
  } else {
    containerScore.innerHTML = 'No Score Found';
    containerScore.classList.add('table-style');
  }
});

const form = document.querySelector('.board-new form');
form.innerHTML = `
  <div class="field-input">
    <input type="text" name="name" id="name" placeholder="Your Name" aria-label="Name">
  </div>
  <div class="field-input">
    <input type="text" name="score" id="score" placeholder="Your Score" aria-label="Score">
  </div>
  <div class="field-input btn">
    <input type="submit" name="submit" id="submit" value="Submit" aria-label="submit">
  </div>
`;

const submit = document.querySelector('.board-new form input[type="submit"]');
const user = document.querySelector('.board-new form input[name="name"]');
const score = document.querySelector('.board-new form input[name="score"]');
const popup = document.querySelector('.popup');
submit.addEventListener('click', (e) => {
  e.preventDefault();
  postGames(user.value, score.value).then((res) => {
    popup.classList.add('show');
    popup.innerHTML = `
      <span class="material-symbols-outlined"> task_alt </span>
      <p>${res.result}</p>
    `;
    setTimeout(() => {
      popup.classList.add('hide');
    }, 3000);
  });
  user.value = '';
  score.value = '';
});

const refresh = document.querySelector('.refresh-btn');
refresh.addEventListener('click', () => window.location.reload());