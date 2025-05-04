document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('registrationForm');
  
    form.addEventListener('submit', function (e) {
      e.preventDefault();
  
      const user = {
        name: form.name.value,
        email: form.email.value,
        password: form.password.value,
      };
  
      // Simulated AJAX POST
      fakeAjaxPost(user, (response) => {
        console.log('User registered:', response);
  
        // Store in localStorage
        let users = JSON.parse(localStorage.getItem('users')) || [];
        users.push(response);
        localStorage.setItem('users', JSON.stringify(users));
  
        alert("User registered successfully!");
        form.reset();
      });
    });
  });

  
  // Simulated AJAX POST method using setTimeout
  function fakeAjaxPost(data, callback) {
    setTimeout(() => {
      callback(data); // Simulate success response
    }, 500);
  }




  
  
  document.addEventListener('DOMContentLoaded', () => {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const table = document.getElementById('usersTable');
  
    users.forEach(user => {
      const row = table.insertRow();
      row.innerHTML = `<td>${user.name}</td><td>${user.email}</td>`;
    });
  });
  