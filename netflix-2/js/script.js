const inputname = $('#nombre');
const inputemail = $('#correo')
const inputpassword = $('#contra');
const registerbutton = $('#boton');

registerbutton.click(
function() {
if (inputemail.val()=='') {
    alert('Please write your email');
} else if (inputemail.val()=='') {
    alert('Please write your email');
} else if (inputpassword.val()=='') {
    alert('Please write your password');
} else{
    localStorage.setItem('nombre', inputname.val());
    alert('Name saved successfully');
    localStorage.setItem('correo', inputemail.val());
    alert('Email saved successfully');
    localStorage.setItem('contra', inputpassword.val());
    alert('Password saved successfully');
}
}
)