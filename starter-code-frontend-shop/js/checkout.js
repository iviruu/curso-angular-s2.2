
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



const validarForm = (e) =>{
    switch(e.target.id) {
		case 'fName' :
			if(expresiones.fName.test(e.target.value)){
				fName.classList.remove("is-invalid");
				fName.classList.add("is-valid");
				
			} else{
				fName.classList.add("is-invalid");
				
			}
		break;
		case 'fLastN' :
			if(expresiones.fLastN.test(e.target.value)){
				fLastN.classList.remove("is-invalid");
				fLastN.classList.add("is-valid");
			} else{
				fLastN.classList.add("is-invalid");
				
			}
		break;
		case 'fEmail' :
			if(expresiones.fEmail.test(e.target.value)){
				fEmail.classList.remove("is-invalid");
				fEmail.classList.add("is-valid");
			} else{
				fEmail.classList.add("is-invalid");
				
			}
		break;
		case 'fPassword' :
			if(expresiones.fPassword.test(e.target.value)){
				fPassword.classList.remove("is-invalid");
				fPassword.classList.add("is-valid");
			} else{
				fPassword.classList.add("is-invalid");
				
			}
		break;
		case 'fPhone' :
			if(expresiones.fPhone.test(e.target.value)){
				fPhone.classList.remove("is-invalid");
				fPhone.classList.add("is-valid");
			} else{
				fPhone.classList.add("is-invalid");
				
			}
		break;
		case 'fAddress' :
			if(expresiones.fAddress.test(e.target.value)){
				fAddress.classList.remove("is-invalid");
				fAddress.classList.add("is-valid");
			} else{
				fAddress.classList.add("is-invalid");
				
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




	function validate(event) {
		event.preventDefault(); 
		const inputs = document.querySelectorAll('.form input');
		
		const allValid = Array.from(inputs).every(input => input.classList.contains('is-valid'));
		
		const noInvalid = Array.from(inputs).every(input => !input.classList.contains('is-invalid'));
	
		if(allValid && noInvalid) {
			alert("Formulario enviado correctamente.");
			setTimeout(function() {
				window.location.reload();
			}, 500);
		} else {
			alert("Asegúrate de que todos los campos estén correctamente llenados y validados.");
		}
	}
	
	


