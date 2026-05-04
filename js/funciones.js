

// función para validar el email
function validarEmail(valor) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if(regex.test(email))
  		return true;
  	else
  		return false;
}



// función para validar el teléfono
function validarTelefono(valor){
	const regex = /^\d{9}$/;
  	if(regex.test(telefono))
  		return true;
  	else
  		return false;
}



// función para validar el formulario de presupuesto
function validar_presupuesto(){

	nombre=document.getElementById('nombre').value;
	email=document.getElementById('email').value;
	telefono=document.getElementById('telefono').value;
	comentario=document.getElementById('comentario').value;

	if( nombre==""){
		alert('Debes de introducir un nombre.');
		return false;
	}
	if( email=="" || !validarEmail(email) ){
		alert('Debes de introducir un email valido.');
		return false;
	}
	if( telefono=="" || !validarTelefono(telefono) ){
		alert('Debes de introducir un teléfono de 9 dígitos.');
		return false;
	}
	if( comentario==""){
		alert('Debes de introducir un comentario.');
		return false;
	}
	if( !document.getElementById('privacidad').checked){
		alert('Debes de aceptar las condiciones de privacidad.');
		return false;
	}
	alert("Formulario rellenado correctamente");
	return false;
}