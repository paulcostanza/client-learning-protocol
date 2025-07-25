import { saveSectionQuestionResult } from '../../Helpers/localStorageHelper';

export function checkAnswer(question, selectedIdx, selectedCheckboxes) {
    let result = '';
    let description = question.description || '';
    if (question.type === 'radio') {
        if (question.options[selectedIdx] === question.answer) {
            result = 'Correct!';
            saveSectionQuestionResult(question.quizKey, question.id, 'correct');
        } else {
            result = 'Wrong!';
            saveSectionQuestionResult(question.quizKey, question.id, 'incorrect');
        }
    } else if (question.type === 'checkbox') {
        const selectedOptions = selectedCheckboxes.map(idx => question.options[idx]);
        const correct = Array.isArray(question.answer) &&
            question.answer.length === selectedOptions.length &&
            question.answer.every(ans => selectedOptions.includes(ans));
        if (correct) {
            result = 'Correct!';
            saveSectionQuestionResult(question.quizKey, question.id, 'correct');
        } else {
            result = 'Wrong!';
            saveSectionQuestionResult(question.quizKey, question.id, 'incorrect');
        }
    }
    return { result, description };
}

export function forfeitQuestion(question) {
    saveSectionQuestionResult(question.quizKey, question.id, 'incorrect');
    return {
        result: 'Need to study bro...',
        description: question.description || ''
    };
}