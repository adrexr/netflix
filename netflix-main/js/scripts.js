
const inputemail = $('#correo')
const inputpassword = $('#contra');
const registerbutton = $('#boton');

registerbutton.click(
function() {
if (localStorage.correo == inputemail.val() && localStorage.contra == inputpassword.val()) {
    alert("Has iniciado sesión");
    document.location.href = "pagina.html"
} else{
    alert("Las credenciales son incorrectas")
}
}
)