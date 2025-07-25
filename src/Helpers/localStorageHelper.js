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

/*
Keeping track of correct questions

- questions are grouped into categories: C#, python, Redis, etc.
- in quiz format
    - this is easy to keep track of 
- in question format
    - this is not easy

How do I want to keep track?
key:                        value
section-{section name}      {id: {correct/incorrect}}




*/