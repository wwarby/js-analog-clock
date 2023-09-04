const updateClock = () => {
  const time = new Date();

  const seconds = time.getSeconds();
  const minutes = time.getMinutes();
  const hours = time.getHours();

  const secondRotation = (seconds * 6) - 180;
  const minuteRotation = (minutes * 6) - 180 + (secondRotation / 60);
  const hourRotation = (hours * 30) - 180 + (minuteRotation / 60);

  document.getElementsByClassName('hour')[0].style.transform = `rotate(${hourRotation}deg)`;
  document.getElementsByClassName('minute')[0].style.transform = `rotate(${minuteRotation}deg)`;
  document.getElementsByClassName('second')[0].style.transform = `rotate(${secondRotation}deg)`;
}

setInterval(updateClock, 1000);

updateClock();
