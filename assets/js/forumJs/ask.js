document.getElementById('publishButton').addEventListener('click', function() {
    // Capturar os valores do formulário
    var username = document.getElementById('username').value;
    var questionTitle = document.getElementById('questionTitle').value;
    var questionDetails = document.getElementById('questionDetails').value;

    // Criar um objeto com os dados do formulário
    var newQuestion = {
        username: username,
        questionTitle: questionTitle,
        questionDetails: questionDetails
    };

    // Recuperar a lista existente de perguntas do localStorage
    var questions = JSON.parse(localStorage.getItem('questions')) || [];

    // Adicionar a nova pergunta à lista
    questions.push(newQuestion);

    // Salvar a lista atualizada de perguntas no localStorage
    localStorage.setItem('questions', JSON.stringify(questions));

    // Redirecionar para a página onde a pergunta será exibida
    window.location.href = 'forumPage.html';

    
});