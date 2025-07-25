import React from 'react';
import ReactMarkdown from 'react-markdown';

export default function QuizLayout({
    question,
    checked,
    selectedIdx,
    selectedCheckboxes,
    onSelect,
    onCheckAnswer,
    onForfeit,
    onNext,
    result,
    displayDescription,
    showResult,
    correctQuestions,
    totalQuestions,
    restartQuiz,
    navigate,
}) {
    return (
        <main>
            <div className="container" id="space-on-top-of-page">
                <div className="quiz-page">
                    {!showResult ? <h1>Quiz Time</h1> : <h1>Quiz Results</h1>}
                    {!showResult && (
                        <div className="questions">
                            <h4>
                                <ReactMarkdown>
                                    {question.question}
                                </ReactMarkdown>
                            </h4>
                            <ul key={question.id}>
                                {question.options.map((option, optionIdx) => {
                                    let className = "";

                                    if (checked) {
                                        if (question.type === 'radio') {
                                            if (option === question.answer) {
                                                className = "correct";
                                            } else if (optionIdx === selectedIdx) {
                                                className = "wrong";
                                            }
                                        } else if (question.type === 'checkbox') {
                                            if (question.answer.includes(option)) {
                                                className = "correct";
                                            } else if (selectedCheckboxes.includes(optionIdx)) {
                                                className = "wrong";
                                            }
                                        }
                                    }

                                    return (
                                        <li
                                            key={optionIdx}
                                            className={className}
                                            onClick={() => !checked && onSelect(optionIdx)}
                                            style={{ cursor: checked ? "default" : "pointer" }}
                                        >
                                            <input
                                                type={question.type === "radio" ? "radio" : "checkbox"}
                                                checked={
                                                    question.type === "radio"
                                                        ? selectedIdx === optionIdx
                                                        : selectedCheckboxes.includes(optionIdx)
                                                }
                                                name="options"
                                                id={`q${optionIdx}-option`}
                                                disabled={checked}
                                                onChange={() => onSelect(optionIdx)}
                                            />
                                            <label htmlFor={`q${optionIdx}-option`}>
                                                <ReactMarkdown components={{ p: 'span' }}>
                                                    {option}
                                                </ReactMarkdown>
                                            </label>
                                        </li>
                                    );
                                })}
                            </ul>
                            <div className="questions-footer">
                                <div className="buttons">
                                    <button onClick={onForfeit} disabled={checked}>I'm cooked</button>
                                    <button
                                        onClick={onCheckAnswer}
                                        disabled={
                                            checked || (
                                                question.type === 'radio'
                                                    ? selectedIdx === null
                                                    : selectedCheckboxes.length === 0
                                            )
                                        }
                                    >Check Answer</button>
                                    <button onClick={onNext} disabled={!checked}>Next Question</button>
                                    <button onClick={() => navigate(-1)}>Quiz Page</button>
                                </div>
                                {result &&
                                    <div id='questions-footer-result' className={result === 'Correct!' ? 'result-correct' : 'result-incorrect'}>
                                        {result}
                                    </div>
                                }
                            </div>
                            {displayDescription && (
                                <div className={
                                    `answer-description ${result === 'Correct!' ? 'answer-description-correct' : 'answer-description-incorrect'
                                    }`
                                }>
                                    <ReactMarkdown>{displayDescription}</ReactMarkdown>
                                </div>
                            )}
                        </div>
                    )}

                    {showResult && (
                        <div>
                            <h2>Results</h2>
                            <p>
                                You got {correctQuestions} out of {totalQuestions} correct.
                            </p>
                            <button onClick={restartQuiz}>Restart Quiz</button>
                        </div>
                    )}
                </div>
            </div>
        </main>
    );
}