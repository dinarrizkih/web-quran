document.getElementById('updateProfileForm').addEventListener('submit', function (event) {
  event.preventDefault();

  const userId = getUserIdFromSession(); // Implementasi fungsi untuk mendapatkan ID pengguna dari sesi (terserah implementasi Anda)
  const name = document.getElementById('nameInput').value;
  const email = document.getElementById('emailInput').value;
  const password = document.getElementById('passwordInput').value;

  fetch(`https://deen.eventin.pw/update/${userId}`, {
      method: 'PUT',
      headers: {
          'Content-Type': 'application/json',
      },
      body: JSON.stringify({
          name: name,
          email: email,
          password: password,
      }),
  })
  .then(response => response.json())
  .then(data => {
      console.log(data);
      // Handle respons dari backend (tampilkan pesan sukses atau error)
  })
  .catch(error => console.error('Error:', error));
});