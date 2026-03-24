// Capturamos os elementos necessários
const formulario = document.getElementById('meuFormulario');
const nomeInput = document.getElementById('nome');
const emailInput = document.getElementById('email');
const mensagemSucesso = document.getElementById('mensagem-sucesso');

// Escutamos o evento de "submit" (enviar) do formulário
formulario.addEventListener('submit', function(evento) {
    // Evita que a página recarregue
    evento.preventDefault();

    // Validação simples: verificar se os campos estão vazios
    if (nomeInput.value === "" || emailInput.value === "") {
        alert("Por favor, preencha todos os campos!");
        return; // Para a execução aqui se houver erro
    }

    // Simulação de sucesso
    // Escondemos o formulário para dar um efeito legal
    formulario.style.display = "none";
    
    // Mostramos a mensagem de sucesso removendo a classe 'escondido'
    mensagemSucesso.classList.remove('escondido');
    mensagemSucesso.classList.add('sucesso');
});