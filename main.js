//Créer un objet avec id, question, reponse, bonne réponse
// Gérer les question
// Gérer les réponses
// Afficher le score

const quizz = [
    { id: "1", question: "Question 1 ?", reponse: ["A", "b", "c", "d"], goodAnswer: "A" },
    { id: "2", question: "Question 2 ?", reponse: ["a", "B", "c", "d"], goodAnswer: "B" }
]

document.addEventListener('DOMContentLoaded', () => {

    const btn = document.querySelectorAll('button')
    const scoreDiv = document.getElementById('score')
    let questionDiv = document.getElementById('question')

    let idQuestion = 0

    let id = quizz[idQuestion].id
    let question = quizz[idQuestion].question
    let goodAnswer = quizz[idQuestion].goodAnswer
    let reponse = quizz[idQuestion].reponse

    /**
     * Mise à jour des éléments de l'objet Quizz
     * @param {string} id
     * @param {string} question
     * @param {string} goodAnswer
     * @param {string} reponse
     */

    const update = () => {
        idQuestion++
        id = quizz[idQuestion].id
        question = quizz[idQuestion].question
        goodAnswer = quizz[idQuestion].goodAnswer
        reponse = quizz[idQuestion].reponse
    }
    
    /**
     * Function pour mettre les réponses dans les btn
     * 
     */
     
    const generateReponse = () => {
        for (let i = 0; i < btn.length; i++) {
            btn[i].innerText = reponse[i]
        }
    }
    
    /**
     * Function pour mettre générer question dans HTML
     * 
     */

    const generateQuestion = () => {
        questionDiv.innerHTML = `<p> ${question}</p>`
    }
    
     /**
     * Function pour vérifier si la réponse est bonne
     * 
     */

    const verifyAnswer = () => {
        for (let i = 0; i < btn.length; i++) {
            btn[i].addEventListener('click', () => {
                if (btn[i].innerText === goodAnswer) {
                    alert('Bonne Réponse!')
                    scoreDiv.innerText = parseInt(scoreDiv.innerText) + 1
                }
                else {
                    alert(`Mauvaise réponse ! La bonne réponse était ${goodAnswer}`)
                }
                update()
                generateQuestion()
                generateReponse()
            })
        }

    }

    verifyAnswer()
    generateQuestion()
    generateReponse()
})
