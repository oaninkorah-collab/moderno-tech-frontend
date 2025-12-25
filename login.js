async function login() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  const error = document.getElementById("error");

  error.innerText = "";

  if (!username || !password) {
    error.innerText = "Username and password are required";
    return;
  }

  try {
    const res = await fetch(
      "https://moderno-tech-backend-1.onrender.com/login",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ username, password })
      }
    );

    if (!res.ok) {
      error.innerText = "Invalid login details";
      return;
    }

    const data = await res.json();
    localStorage.setItem("user", JSON.stringify(data));

    alert("Login successful");
  } catch (err) {
    error.innerText = "Server not reachable";
  }
}
