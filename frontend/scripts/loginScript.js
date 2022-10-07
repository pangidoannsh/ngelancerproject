function toLoginKlien() {
    document.querySelector(".option-login").firstElementChild.classList.add("login-active");
    document.querySelector(".option-login").lastElementChild.classList.remove("login-active");
}
function toLoginFreelancer() {
    document.querySelector(".option-login").firstElementChild.classList.remove("login-active");
    document.querySelector(".option-login").lastElementChild.classList.add("login-active");
}

function submit() {
    const email = document.getElementById('emailinput').value;
    const password = document.getElementById('passwordinput').value;

    if (email == 'admin' && password == 'admin123') {
        this.location.href = "../admin-home.html"
    } else {
        alert('email dan password salah')
    }
}