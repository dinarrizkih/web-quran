document.getElementById('loginForm').addEventListener('submit', function (event) {
  event.preventDefault();

  const email = document.getElementById('emailInput').value;
  const password = document.getElementById('passwordInput').value;

  fetch('https://deen.eventin.pw/login', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
      },
      body: JSON.stringify({
          email: email,
          password: password,
      }),
  })
      .then(response => {
          if (!response.ok) {
              throw new Error('Login failed. Please check your credentials and try again.');
          }
          return response.json();
      })
      .then(data => {
          console.log(data);
          // Handle respons dari backend (set session atau tampilkan pesan sukses atau error)

          // Contoh: Jika login berhasil, arahkan ke halaman dashboard
          window.location.href = '../page/dashboard.html';
      })
      .catch(error => {
          console.error('Error:', error);
          // Handle error, misalnya tampilkan pesan ke pengguna
          alert(error.message || 'An error occurred during login.');
      });
});
