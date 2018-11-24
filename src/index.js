const myHeading = document.getElementById("myHeading");
const myButton = document.getElementById("myButton");
const myInput = document.getElementById("myInput");

myButton.addEventListener("click", () => {
  let answer = myInput.value;
  if (answer === "red") {
    myHeading.style.color = "green";
    myHeading.innerHTML = "You got it!";
  } else {
    myHeading.style.color = "red";
    myHeading.innerHTML = "Try again.";
  }
});
