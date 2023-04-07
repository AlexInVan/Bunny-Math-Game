const ball = document.getElementById('ball');
const bite = document.getElementById('bite');

function generateQuestion() {
  const num1 = Math.floor(Math.random()*9+2);
  const num2 = Math.floor(Math.random()*9+2);
  const num3 = num1*num2;
  document.getElementById("question").innerHTML= num1+ "x" + num2+ "=?";
  return num3;
}

let answer = generateQuestion();

document.getElementById('quantity').addEventListener('keydown', function(e) {
  if(e.keyCode === 13) {
    e.preventDefault();
    const input = parseInt(document.getElementById('quantity').value);
    
    if (input === answer) {
      let currentPos = parseInt(ball.style.left) || 0;
      ball.style.left = (currentPos + 100) + 'px';
      document.getElementById('quantity').value = '';
   if (currentPos + 300 >= window.innerWidth - ball.clientWidth) {
    bite.style.display = 'block';     
document.getElementById('quantity').disabled = true;
document.getElementById("askquestion").innerHTML= "Good Job!!";
pauseTimer()
      }
      }
      else {
        let currentPos = parseInt(ball.style.left) || 0;
        ball.style.left = (currentPos - 100) + 'px';
        document.getElementById('quantity').value = '';
    }
    
    answer = generateQuestion();
  }
});


  function refreshPage() {
  history.go(0);
  }


  const startingTime = 60; // in seconds
  let timeLeft = startingTime;
  let timerId;
  
  const timeLeftDisplay = document.querySelector('.time-left');
  const startBtn = document.querySelector('.start-btn');
  
  
  function formatTime(time) {
    const minutes = Math.floor(time / 60).toString().padStart(2, '0');
    const seconds = (time % 60).toString().padStart(2, '0');
    return `${minutes}:${seconds}`;
  }
  
  function updateTimer() {
    timeLeft--;
    timeLeftDisplay.textContent = formatTime(timeLeft);
    if (timeLeft <= 0) {
      timeLeftDisplay.textContent = "Time's up!";
      document.getElementById('quantity').disabled = true;
      clearInterval(timerId);
    }
  }
  
  function startTimer() {
    timerId = setInterval(updateTimer, 1000);
    startBtn.disabled = true;
  }
  

  
  startBtn.addEventListener('click', startTimer);
  
  function pauseTimer() {
    clearTimeout(timerId);
  }
  
