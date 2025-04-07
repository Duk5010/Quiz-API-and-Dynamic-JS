document.addEventListener("DOMContentLoaded", function () {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((data) => {
      displayFriends(data);
    })
    .catch((error) => {
      console.error("There was a problem with the fetch operation:", error);
      document.getElementById("friends-container").innerHTML =
        "Failed to load friends.";
    });
});

function displayFriends(users) {
  const container = document.getElementById("friends-container");
  container.innerHTML = "";

  let displayFriends = [];

  users.forEach((user) => {
    displayFriends.push(user);
  });

  while (displayFriends.length < 10) {
    displayFriends.push(users[displayFriends.length % users.length]);
  }

  displayFriends = displayFriends.slice(0, 10);

  displayFriends.forEach((user) => {
    const friendCard = document.createElement("div");
    friendCard.className = "friend-card";

    friendCard.innerHTML = `
      <div class="friend-name">${user.name} @${user.username}</div>
      <div class="friend-city">City: ${user.address.city}</div>
      <div class="friend-website">Website: <a href="http://${user.website}" target="_blank">${user.website}</a></div>
      <div class="friend-company">${user.company.name}</div>
      <div class="friend-catchPhrase">${user.company.catchPhrase}</div>
    `;

    container.appendChild(friendCard);
  });
}
