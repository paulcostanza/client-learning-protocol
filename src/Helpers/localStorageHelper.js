export function getSectionProgress(quizKey) {
    const key = `section-${quizKey}`;
    return JSON.parse(localStorage.getItem(key) || '{}');
}

export function saveSectionQuestionResult(quizKey, questionId, result) {
    const key = `section-${quizKey}`;
    const progress = JSON.parse(localStorage.getItem(key) || '{}');
    progress[questionId] = result;
    localStorage.setItem(key, JSON.stringify(progress));
}

export function clearSectionProgress(quizKey) {
    const key = `section-${quizKey}`;
    localStorage.removeItem(key);
}

export function getQuestionStatus(quizKey, questionId) {
    const key = `section-${quizKey}`;
    const progress = JSON.parse(localStorage.getItem(key) || '{}');
    return progress[questionId]; // 'correct', 'incorrect', or undefined
}