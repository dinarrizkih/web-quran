document.getElementById('signupForm').addEventListener('submit', function (event) {
  event.preventDefault();

  const fullName = document.getElementById('fullName').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  fetch('https://deen.eventin.pw/register', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
      },
      body: JSON.stringify({
          fullName: fullName,
          email: email,
          password: password,
      }),
  })
      .then(response => {
          if (!response.ok) {
              throw new Error('Registration failed. Please try again.');
          }
          return response.json();
      })
      .then(data => {
          console.log(data);
          // Handle respons dari backend (tampilkan pesan sukses atau error)

          // Contoh: Jika registrasi berhasil, arahkan ke halaman login
          window.location.href = '../index.html';
      })
      .catch(error => {
          console.error('Error:', error);
          // Handle error, misalnya tampilkan pesan ke pengguna
          alert(error.message || 'An error occurred during registration.');
      });
});
