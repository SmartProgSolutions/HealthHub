 
      window.addEventListener('DOMContentLoaded', (event) => {
        var questions = JSON.parse(localStorage.getItem('questions')) || [];
    
        if (questions.length > 0) {
            questions.forEach(function(questionData, index) {
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
                                    <div class="add-comment-link">
                                        <a href="answerQuestion.html?index=${index}">Adicionar comentário</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                `;
    
                document.getElementById('questions-container').insertAdjacentHTML('beforeend', newQuestionHtml);
            });
    
            document.getElementById('clearStorageButton').addEventListener('click', function() {
                localStorage.clear();
                alert('Questions cleared!');
                location.reload();
            });
        }
    });
    