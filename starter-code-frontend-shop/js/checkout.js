
// Exercise 6


const form = document.getElementsByClassName('form');
const inputs = document.querySelectorAll('.form input');
const expresiones ={
	fName:/^[A-Za-z\s]{3,}$/,
	fLastN:/^[A-Za-z\s]{3,}$/,
	fEmail:/^[^\s@]+@[^\s@]+\.[^\s@]+$/,
	fPassword:/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{3,}$/,
	fPhone:/^\d+$/,
	fAddress:/^.{3,}$/
}

var error = 0;

const validarForm = (e) =>{
    switch(e.target.id) {
		case 'fName' :
			if(expresiones.fName.test(e.target.value)){
				fName.classList.remove("is-invalid");
				error= 0;
			} else{
				fName.classList.add("is-invalid");
				error= 1;
			}
		break;
		case 'fLastN' :
			if(expresiones.fLastN.test(e.target.value)){
				fLastN.classList.remove("is-invalid");
				error= 0;
			} else{
				fLastN.classList.add("is-invalid");
				error=1;
			}
		break;
		case 'fEmail' :
			if(expresiones.fEmail.test(e.target.value)){
				fEmail.classList.remove("is-invalid");
				error= 0;
			} else{
				fEmail.classList.add("is-invalid");
				error=1;
			}
		break;
		case 'fPassword' :
			if(expresiones.fPassword.test(e.target.value)){
				fPassword.classList.remove("is-invalid");
				error= 0;
			} else{
				fPassword.classList.add("is-invalid");
				error=1;
			}
		break;
		case 'fPhone' :
			if(expresiones.fPhone.test(e.target.value)){
				fPhone.classList.remove("is-invalid");
				error= 0;
			} else{
				fPhone.classList.add("is-invalid");
				error=1;
			}
		break;
		case 'fAddress' :
			if(expresiones.fAddress.test(e.target.value)){
				fAddress.classList.remove("is-invalid");
				error= 0;
			} else{
				fAddress.classList.add("is-invalid");
				error=1;
			}
		break;
	}
}
inputs.forEach((input)=>{
    input.addEventListener('keyup', validarForm);
    input.addEventListener('blur', validarForm);
})


// Get the input fields
    var fName = document.getElementById("fName");
    var fLastN = document.getElementById("fLastN");
    var fEmail = document.getElementById("fEmail");
    var fPassword = document.getElementById("fPassword");
    var fPhone = document.getElementById("fPhone");
    var fAddress = document.getElementById("fAddress");



function validate() {
	if(error>0){
		alert("Hay errores en el formulario.");
	}else{
		alert("Formulario enviado correctamente.");
	}

}
