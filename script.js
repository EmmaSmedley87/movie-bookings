const container = document.querySelector(".container");
const seat = document.querySelectorAll(".row .seat:not(.occupied");
const count = document.getElementById("count");
const total = document.getElementById("total");
const movieSelect = document.getElementById("movie");

let ticketPrice = +movieSelect.value;

container.addEventListener("click", (e) => {
  // if statement to check if we are selecting the seat, it should not contain occupied seat
  if (
    e.target.classList.contains("seat") &&
    !e.target.classList.contains("occupied")
  ) {
    // toggle function to turn occupied seat to blue when clicked
    e.target.classList.toggle("selected");
  }
});
