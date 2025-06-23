document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault(); // Prevent form from submitting

  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  // Simple validation
  if (username && password) {
    console.log("Username:", username);
    console.log("Password:", password);
    alert("Login successful (demo only)");
  } else {
    alert("Please fill in both fields.");
  }
});
