document.getElementById('accountType').addEventListener('change', function() {
    var accountType = this.value;
    var doctorField = document.getElementById('doctorField');
    if (accountType === 'doctor') {
      doctorField.style.display = 'block';
    } else {
      doctorField.style.display = 'none';
    }
  });
  
  document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Oprire comportamentul implicit al formularului
    
    var accountType = document.getElementById('accountType').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var parafa = ''; // Inițializăm parafa cu o valoare nulă
  
    if (accountType === 'doctor') {
      // Dacă utilizatorul este medic, obținem valoarea pentru parafă
      parafa = document.getElementById('parafa').value;
    }
  
    if (accountType === 'patient') {
      // Autentificare pentru pacient
      console.log('Autentificare ca pacient:', email, password);
      window.location.href = 'nou roxi is.html';

      // Aici poți redirecționa către pagina de profil a pacientului
    } else if (accountType === 'doctor') {
      // Autentificare pentru medic
      console.log('Autentificare ca medic:', email, password, parafa);
      window.location.href = 'pag.principala medic.html';

      // Aici poți redirecționa către pagina de profil a medicului
    }
  });
  