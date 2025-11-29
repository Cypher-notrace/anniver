// Run when the page loads
document.addEventListener("DOMContentLoaded", showWishes);

const sendBtn = document.getElementById("sendBtn");
sendBtn.addEventListener("click", addWish);

function addWish() {
  const name = document.getElementById("name").value || "Anonymous";
  const message = document.getElementById("message").value.trim();

  if (message === "") {
    alert("Please enter a message!");
    return;
  }

  const wish = {
    name,
    message,
    time: new Date().toLocaleString()
  };

  // Get existing wishes
  const wishes = JSON.parse(localStorage.getItem("wishes")) || [];

  // Add new one
  wishes.push(wish);

  // Save to localStorage
  localStorage.setItem("wishes", JSON.stringify(wishes));

  // Clear message box
  document.getElementById("message").value = "";

  // Display all wishes
  showWishes();
}

function showWishes() {
  const wishList = document.getElementById("wishList");
  wishList.innerHTML = "";

  const wishes = JSON.parse(localStorage.getItem("wishes")) || [];

  wishes.forEach(wish => {
    const div = document.createElement("div");
    div.classList.add("wish");
    div.innerHTML = `
      <strong>${wish.name}</strong>
      <p>${wish.message}</p>
      <small>${wish.time}</small>
    `;
    wishList.appendChild(div);
  });
}