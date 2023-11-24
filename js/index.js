document.addEventListener('DOMContentLoaded', function () {
  document.getElementById('btnEnviar').addEventListener('click', function () {
    var formularioValido = validarFormulario();
    if (formularioValido) {

      var nombre = document.getElementById('inputName').value.trim();
      var apellido = document.getElementById('inputLastName').value.trim();

      document.getElementById('nombreModal').textContent = '' + nombre + ' ' + apellido + ' te responderemos a la brevedad.';


      $('#staticBackdrop').modal('show');
    }
  });

  function validarFormulario() {

    var nombre = document.getElementById('inputName').value.trim();
    var apellido = document.getElementById('inputLastName').value.trim();
    var email = document.getElementById('inputEmail2').value.trim();
    var telefono = document.getElementById('inputPhone').value.trim();
    var consulta = document.getElementById('exampleFormControlTextarea1').value.trim();
    var aceptoTerminos = document.getElementById('gridCheck').checked;

    if (nombre === '' || apellido === '' || email === '' || telefono === '' || consulta === '' || !aceptoTerminos) {
      alert('Por favor, completa todos los campos obligatorios.');
      return false;
    }


    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert('Por favor, ingresa una dirección de correo electrónico válida.');
      return false;
    }

    var telefonoRegex = /^\d+$/;
    if (!telefonoRegex.test(telefono)) {
      alert('Por favor, ingresa un número de teléfono válido.');
      return false;
    }

    return true;
  }
});
