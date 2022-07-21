import './App.css';
import {useState} from "react";

function App() {

  const questions = [
    {
      questionText: 'Столица России ?',
      answerOptions: [
        {answerText: 'Санкт-Петербург', isCorrect: false},
        {answerText: 'Новосибирск', isCorrect: false},
        {answerText: 'Москва', isCorrect: true},
        {answerText: 'Воронеж', isCorrect: false},
      ]
    },
    {
      questionText: 'Какое население в Москве?',
      answerOptions: [
        {answerText: '10 млн', isCorrect: false},
        {answerText: '12 млн', isCorrect: true},
        {answerText: '15 млн', isCorrect: false},
        {answerText: '17 млн', isCorrect: false},
      ]
    },
    {
      questionText: 'Самая крупная компания России?',
      answerOptions: [
        {answerText: 'Лукойл', isCorrect: false},
        {answerText: 'Роснефть', isCorrect: false},
        {answerText: 'Сбербанк', isCorrect: false},
        {answerText: 'Газпром', isCorrect: true},
      ]
    },
    {
      questionText: 'Самый древний город России ?',
      answerOptions: [
        {answerText: 'Дербент (Дагестан)', isCorrect: true},
        {answerText: 'Муром (Владимирская область)', isCorrect: false},
        {answerText: 'Ростов Великий (Ярославская область)', isCorrect: false},
        {answerText: 'Старая Ладога (Ленинградская область)', isCorrect: false},
      ]
    },
  ]

//state
  const [currentQuestion, setCurrentQuestion] = useState(0); //массив состояний
  const [score, setScore] =useState(0); //где храним ответы
  const [showScore, setShowScore] =useState(false); // когдв вопросы закончатся


  //Функция, которая будет отвечать за логику квиза
  const handelAnswerOptionClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1) //правильно мы ответили или нет
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion) //указываем следующий вопрос
    } else {
      setShowScore(true)
    }
  }

  //функция, чтобы пройти тест заново - обновление всего state
  const refresh = () => {
    setCurrentQuestion(0)
    setScore(0)
    setShowScore(false)
  }


  return (
    <div className="app">
      {
        showScore ? <div className="section__score">
          <div>Правильных ответов {score} из {questions.length}</div>
              <button
                  onClick={refresh}
                  className="refresh__btn">Попробовать ещё раз</button>
          </div>
            :
            <div className="quizz">
              <div className="question__section">
                <div className="question__count">
                  <span>Вопрос {currentQuestion+1} </span> / {questions.length}
                </div>
                <div className="question__text"> {questions[currentQuestion].questionText}</div>
              </div>
              <div className="answer__section">
                {questions[currentQuestion].answerOptions.map(item =>
                    (<button
                        onClick={() => handelAnswerOptionClick(item.isCorrect)}>
                      {item.answerText}
                    </button>)
                )}
              </div>
            </div>
      }
    </div>
  );
}

export default App;
