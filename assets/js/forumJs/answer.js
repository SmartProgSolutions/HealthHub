// Função para obter o índice da pergunta da URL
function getQuestionIndexFromURL() {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('index');
    
}


// Função para carregar a pergunta e as respostas
function loadQuestionAndAnswers() {
    const questionIndex = getQuestionIndexFromURL();
    console.log('Índice da pergunta antes de verificar o localStorage:', questionIndex);
    if (questionIndex === null) {
        alert('Pergunta não encontrada!');
        window.location.href = 'forumPage.html';
        return;
    }

    const questions = JSON.parse(localStorage.getItem('questions')) || [];
    if (!questions[questionIndex]) {
        alert('Pergunta não encontrada!');
        window.location.href = 'forumPage.html';
        return;
    }

    const question = questions[questionIndex];
    const questionHtml = `
        <div class="question-type2033">
            <div class="row">
                <div class="col-md-9">
                    <div class="right-description893">
                        <div id="que-hedder2983">
                            <h4 id="nome_usuario"><b>${question.username}</b></h4>
                            <h3 id="nome_usuario" >${question.questionTitle}</h3>
                        </div>
                        <div class="ques-details10018">
                            <p>${question.questionDetails}</p>
                        </div>
                        <hr>
                    </div>
                </div>
            </div>
        </div>
    `;

    document.getElementById('question-container').innerHTML = questionHtml;

    const answers = JSON.parse(localStorage.getItem('answers')) || {};
    const questionAnswers = answers[questionIndex] || [];

    questionAnswers.forEach((answer) => {
        const answerHtml = `
            <div class="answer-type2033">
                <div class="row">
                    <div class="col-md-9">
                        <div class="right-description893">
                            <div id="ans-hedder2983">
                                <h4 id="nome_usuario"><b>${answer.username}</b></h4>
                            </div>
                            <div class="ans-details10018">
                                <p>${answer.answerDetails}</p>
                            </div>
                            <hr>
                        </div>
                    </div>
                </div>
            </div>
        `;

        document.getElementById('answers-container').insertAdjacentHTML('beforeend', answerHtml);
    });
}

// Função para publicar uma resposta
document.getElementById('publishAnswerButton').addEventListener('click', function() {
    console.log('Botão Publicar Resposta clicado');
    const questionIndex = getQuestionIndexFromURL();
    console.log('Índice da pergunta:', questionIndex);
    const username = document.getElementById('answer-username').value;
    const answerDetails = document.getElementById('answerDetails').value;

    if (username.trim() === '' || answerDetails.trim() === '') {
        alert('Por favor, preencha todos os campos.');
        return;
    }

    const newAnswer = {
        username: username,
        answerDetails: answerDetails
    };

    const answers = JSON.parse(localStorage.getItem('answers')) || {};
    if (!answers[questionIndex]) {
        answers[questionIndex] = [];
    }
    answers[questionIndex].push(newAnswer);
    localStorage.setItem('answers', JSON.stringify(answers));

    // Adiciona a nova resposta à lista de respostas
    const answerHtml = `
        <div class="answer-type2033">
            <div class="row">
                <div class="col-md-9">
                    <div class="right-description893">
                        <div id="ans-hedder2983">
                            <h4 class="nome_usuario"><b>${username}</b></h4>
                        </div>
                        <div class="ans-details10018">
                            <p>${answerDetails}</p>
                        </div>
                        <hr>
                    </div>
                </div>
            </div>
        </div>
    `;

    document.getElementById('answers-container').insertAdjacentHTML('beforeend', answerHtml);
    document.getElementById('answer-form').reset();
});

// Carregar a pergunta e as respostas ao carregar a página
window.addEventListener('DOMContentLoaded', loadQuestionAndAnswers);
