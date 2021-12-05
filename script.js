let interval = setInterval(countDown,1000);

function countDown() {
  const noti = document.querySelector('.time');

  const days = 17 - new Date().getDate() - 1;
  const hours = 23 - new Date().getHours(); 
  const mins = 59 - new Date().getMinutes(); 
  const secs = 59 - new Date().getSeconds(); 

  noti.textContent = "Terrorist birthday in " + days + "d " + hours + "h " + mins + "m " + secs + "s ";

  if (mins < 0){
    clearInterval(interval);
    noti.textContent = "happy bday raa Aditya :)";
  }
}