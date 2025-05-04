document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('loginForm');
  
    form.addEventListener('submit', function (e) {
      e.preventDefault();
  
      const email = form.email.value;
      const password = form.password.value;
  
      const users = JSON.parse(localStorage.getItem('users')) || [];
  
      const foundUser = users.find(user => user.email === email && user.password === password);
  
      if (foundUser) {
        alert(`Welcome, ${foundUser.name}!`);
        window.location.href = "users.html"; // redirect to users list
      } else {
        alert("Invalid email or password.");
      }
  
      form.reset();
    });
  });
  