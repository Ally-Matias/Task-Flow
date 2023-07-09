const container = document.getElementById('container');
const signInEmail = document.getElementById('signInEmail');
const signUpEmail = document.getElementById('signUpEmail');

function openSignIn() {
    container.classList.remove("right-panel-active");
    if (signUpEmail.value !== "") {
        signInEmail.value = signUpEmail.value;
    }
}

function openSignUp() {
    container.classList.add("right-panel-active");
    if (signInEmail.value !== "") {
        signUpEmail.value = signInEmail.value;
    }
}

function handleSubmitLogin(event) {
    event.preventDefault(); // Impede o envio padrão do formulário
    // Lógica de autenticação ou ação do formulário de login aqui
}

