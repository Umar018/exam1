const container = document.querySelector("#container");
let products = [];

async function fetchUsers() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    displayUsers(data);
  } catch (error) {
    console.error("Error fetching users:", error);
  }
}

function displayUsers(data) {
  data.forEach((user) => {
    const userCard = document.createElement("div");
    userCard.classList.add("card");
    userCard.innerHTML = `
    <h2>${user.name}</h2>
    <p style="opacity: 0.7;"><i class="fas fa-at"></i> ${user.username}</p>
    <p style="opacity: 0.7;"><i class="fas fa-envelope"></i> ${user.email}</p>
    <p style="opacity: 0.7;"><i class="fas fa-phone"></i> ${user.phone}</p>
    <p style="opacity: 0.7;"><i class="fas fa-globe"></i> 
        <a style="text-decoration:none; color: dark-blue;" href="#">${user.website}</a>
    </p>
    <p style="opacity: 0.7;"><i class="fas fa-building"></i> ${user.company.name}</p>
`;

    container.appendChild(userCard);
  });
}

fetchUsers();
