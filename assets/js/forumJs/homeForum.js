 
        window.addEventListener('DOMContentLoaded', (event) => {
            // Recuperar a lista de perguntas do localStorage
            var questions = JSON.parse(localStorage.getItem('questions')) || [];
            
            // Verificar se há perguntas na lista
            if (questions.length > 0) {
                // Percorrer a lista de perguntas e criar o novo conteúdo HTML para cada pergunta
                questions.forEach(function(questionData) {
                    var newQuestionHtml = `
                        <div class="question-type2033">
                            <div class="row">
                                <div class="col-md-9">
                                    <div class="right-description893">
                                        <div id="que-hedder2983">
                                            <h4 class="nome_usuario"><b>${questionData.username}</b></h4>
                                            <h3>${questionData.questionTitle}</h3>
                                        </div>
                                        <div class="ques-details10018">
                                            <p>${questionData.questionDetails}</p>
                                        </div>
                                        <hr>
                                    </div>
                                </div>
                            </div>
                        </div>
                    `;

                    // Inserir o novo conteúdo na seção correta
                    document.getElementById('questions-container').insertAdjacentHTML('beforeend', newQuestionHtml);
                    document.getElementById('clearStorageButton').addEventListener('click', function() {
            localStorage.clear();
            alert('Questions cleared!');
            location.reload(); // Recarregar a página para atualizar a exibição
        });
                });

                // Opcional: Remover os dados do localStorage após a exibição
                // localStorage.removeItem('questions');
            }
        });