// Random number

let randNumber = Math.floor(Math.random() * 50);

document.querySelector(".userBtn").addEventListener("click", () => {
  // Declarations
  let userGuess = Number(document.querySelector(".userGuess").value);
  let winStatus = document.querySelector("#winStatus");
  // The Logic
  if (userGuess) {
    if (userGuess > randNumber) {
      winStatus.innerHTML = "too big";
    } else if (userGuess < randNumber) {
      winStatus.innerHTML = "too small";
    } else {
      document.querySelector("body").style.background = "#7CFC00";
      document.querySelector(".userGuess").disabled = true;
      winStatus.innerHTML = "you won!";
    }
  }
});
