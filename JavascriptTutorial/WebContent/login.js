function checkParameters(){
	alert("check");
	var email=document.getElementById("email");
	var pass=document.getElementById("password");
	if(pass.value.length<9){
		alert("Password demasiado corto");
	}
	
}
function init(){
	alert("init");
	var enviar=document.getElementById("registerData");
	enviar.onsubmit=checkParameters();
	
}
window.onload=init();
