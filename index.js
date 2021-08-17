/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/


/* Write your implementation of greet() */
/* Write your implementation of displayMessage() */

function displayMessage(str) {
  document.getElementById("greeting").innerText = str;
}

function greet(t) {
  const tToStr = t.split(":", 1)
  const clock = parseInt(tToStr);
  if (clock > 17) return "Good Evening";
  if (clock < 12) return "Good Morning";
  return "Good Afternoon";
}

