
    document.getElementById('loginForm').addEventListener('submit', function(event) {
      event.preventDefault();

      // Obtener los valores de usuario y contraseña ingresados
      var username = document.getElementById('usuario').value;
      var password = document.getElementById('password').value;

      // Valido aqui el nombre de usuario y contraseña
      if (username === 'Maria' && password === 'maria123') {
        $('#approvalModal').modal('show'); // Muestro el modal de aprobación
      } else {
        $('#errorModal').modal('show'); // Muestro el modal de error
      }
    });
 