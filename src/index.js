import './style.css';
import Score from './modules/gameScore.js';

const containerScore = document.querySelector('.scores');
const Scores = new Score();
Scores.collection.forEach((score) => {
  containerScore.innerHTML += `
    <li>${score.name}:${score.score}</li>
  `;
});

const form = document.querySelector('.board-new form');
form.innerHTML = `
  <div class="field-input">
    <input type="text" name="name" id="name" placeholder="Your Name" aria-label="Name">
  </div>
  <div class="field-input">
    <input type="text" name="name" id="score" placeholder="Your Score" aria-label="Score">
  </div>
  <div class="field-input btn">
    <input type="submit" name="name" id="submit" value="Submit" aria-label="submit">
  </div>
`;
