document.addEventListener('DOMContentLoaded', function () {
  document.getElementById('btnEnviar').addEventListener('click', function () {
    var formularioValido = validarFormulario();
    if (formularioValido) {
      let nombre = document.getElementById('inputName').value.trim();
      let apellido = document.getElementById('inputLastName').value.trim();
      document.getElementById('nombreModal').textContent = '' + nombre + ' ' + apellido + ' te responderemos a la brevedad.';
      $('#staticBackdrop').modal('show');
    }
  });

  function validarFormulario() {
    let nombre = document.getElementById('inputName').value.trim();
    let apellido = document.getElementById('inputLastName').value.trim();
    let email = document.getElementById('inputEmail2').value.trim();
    let telefono = document.getElementById('inputPhone').value.trim();
    let consulta = document.getElementById('exampleFormControlTextarea1').value.trim();
    let aceptoTerminos = document.getElementById('gridCheck').checked;

    if (nombre === '') {
      alert('Por favor, ingresa tu nombre.');
      return false;
    }

    if (apellido === '') {
      alert('Por favor, ingresa tu apellido.');
      return false;
    }

    if (email === '') {
      alert('Por favor, ingresa tu dirección de correo electrónico.');
      return false;
    }

    if (telefono === '') {
      alert('Por favor, ingresa tu número de teléfono.');
      return false;
    }

    if (consulta === '') {
      alert('Por favor, detalla tu consulta.');
      return false;
    }

    if (!aceptoTerminos) {
      alert('Por favor, acepta los términos y condiciones.');
      return false;
    }

    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert('Por favor, ingresa una dirección de correo electrónico válida.');
      return false;
    }

    let telefonoRegex = /^\d+$/;
    if (!telefonoRegex.test(telefono)) {
      alert('Por favor, ingresa un número de teléfono válido.');
      return false;
    }

    return true;
  }
});

