import React, { useState } from "react";
import Modal from '@mui/material/Modal';
import Box from "@mui/material/Box";
import ReactMarkdown from 'react-markdown';

export default function ModalForQuestions({ open, onClose, question }) {
    // Local state for this modal instance
    const [checked, setChecked] = useState(false);
    const [selectedIdx, setSelectedIdx] = useState(null);
    const [selectedCheckboxes, setSelectedCheckboxes] = useState([]);
    const [result, setResult] = useState('');
    const [displayDescription, setDisplayDescription] = useState('');

    if (!question) return null;

    function onSelect(optionIdx) {
        if (question.type === 'radio') {
            setSelectedIdx(optionIdx);
        } else if (question.type === 'checkbox') {
            setSelectedCheckboxes(prev =>
                prev.includes(optionIdx)
                    ? prev.filter(idx => idx !== optionIdx)
                    : [...prev, optionIdx]
            );
        }
    }

    function checkAnswer() {
        if (question.type === 'radio') {
            if (selectedIdx === null) return;
            setChecked(true);
            if (question.options[selectedIdx] === question.answer) {
                setResult('Correct!');
            } else {
                setResult('Wrong!');
            }
        } else if (question.type === 'checkbox') {
            setChecked(true);
            const selectedOptions = selectedCheckboxes.map(idx => question.options[idx]);
            const correct = Array.isArray(question.answer) &&
                question.answer.length === selectedOptions.length &&
                question.answer.every(ans => selectedOptions.includes(ans));
            if (correct) {
                setResult('Correct!');
            } else {
                setResult('Wrong!');
            }
        }
        if (question.description) {
            setDisplayDescription(question.description);
        }
    }

    function forfeitQuestion() {
        setChecked(true);
        setResult('Need to study bro...');
        if (question.description) {
            setDisplayDescription(question.description);
        }
    }

    function handleExit() {
        // Reset modal state on exit
        setChecked(false);
        setSelectedIdx(null);
        setSelectedCheckboxes([]);
        setResult('');
        setDisplayDescription('');
        onClose();
    }

    return (
        <Modal open={open} onClose={handleExit}>
            <Box sx={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                bgcolor: 'background.paper',
                boxShadow: 24,
                p: 4,
                minWidth: 300,
                maxWidth: 1000,
                borderRadius: 2,
                maxHeight: '90vh',
                overflowY: 'auto'
            }}
                className="modal-for-questions">
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
                                    <ReactMarkdown components={{ ul: 'span', ol: 'span', li: 'span', p: 'span' }}>
                                        {option}
                                    </ReactMarkdown>
                                </label>
                            </li>
                        );
                    })}
                </ul>
                <div className="questions-footer">
                    <div className="buttons">
                        <button onClick={forfeitQuestion} disabled={checked}>I'm cooked</button>
                        <button
                            onClick={checkAnswer}
                            disabled={
                                checked || (
                                    question.type === 'radio'
                                        ? selectedIdx === null
                                        : selectedCheckboxes.length === 0
                                )
                            }
                        >Check Answer</button>
                        <button onClick={handleExit}>Exit</button>
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
                        <ReactMarkdown

                        >{displayDescription}</ReactMarkdown>
                    </div>
                )}
            </Box>
        </Modal>
    );
}