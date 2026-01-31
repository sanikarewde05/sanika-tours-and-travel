function loginUser() {
  const user = document.getElementById("username").value;
  alert("Welcome, " + user + "!");
  return false; // prevent page reload
}

function addReview() {
  const name = document.getElementById("reviewer").value;
  const comment = document.getElementById("comment").value;
  const reviewsDiv = document.getElementById("reviews");

  const newReview = document.createElement("div");
  newReview.className = "card";
  newReview.innerHTML = `<strong>${name}</strong><p>${comment}</p>`;
  reviewsDiv.appendChild(newReview);

  document.getElementById("reviewer").value = "";
  document.getElementById("comment").value = "";
  return false;
}
function addReview() {
  const name = document.getElementById("reviewer").value;
  const destination = document.getElementById("destination").value;
  const rating = document.getElementById("rating").value;
  const comment = document.getElementById("comment").value;

  const reviewsDiv = document.getElementById("reviews");

  const newReview = document.createElement("div");
  newReview.className = "card";
  newReview.innerHTML = `
    <strong>${name}</strong> <span>visited <em>${destination}</em></span>
    <div class="stars">${"⭐".repeat(rating)}</div>
    <p>${comment}</p>
  `;

  reviewsDiv.prepend(newReview);

  // Reset form
  document.getElementById("reviewer").value = "";
  document.getElementById("destination").value = "";
  document.getElementById("rating").value = "5";
  document.getElementById("comment").value = "";

  return false;
}
function toggleDropdown() {
  document.getElementById("dropdownMenu").classList.toggle("show");
}

window.onclick = function(event) {
  if (!event.target.matches('.dropdown-button')) {
    const dropdowns = document.getElementsByClassName("dropdown");
    for (let i = 0; i < dropdowns.length; i++) {
      dropdowns[i].classList.remove("show");
    }
  }
};
