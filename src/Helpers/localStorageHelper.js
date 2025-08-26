export function getSectionProgress(quizKey) {
    const key = `section-${quizKey}`;
    return JSON.parse(localStorage.getItem(key) || '{}');
}

export function saveSectionQuestionResult(quizKey, questionId, result) {
    const key = `section-${quizKey}`;
    const progress = JSON.parse(localStorage.getItem(key) || '{}');
    const rightNow = Date.now()

    let interval = progress[questionId]?.interval ?? 1
    let nextReview = progress[questionId]?.nextReview ?? rightNow

    if (rightNow >= nextReview) {
        if (result === 'correct') {
            interval += 1
        } else {
            interval = Math.max(1, Math.floor(interval / 2))
        }
    } else {
        if (result === 'incorrect') {
            interval = Math.max(1, Math.floor(interval / 2))
        }
    }

    const setToMidnight = new Date(rightNow)
    setToMidnight.setHours(0, 0, 0, 0)
    nextReview = setToMidnight.getTime() + (interval * 24 * 60 * 60 * 1000)

    progress[questionId] = {
        result,
        lastAttempt: rightNow,
        interval,
        nextReview
    };
    localStorage.setItem(key, JSON.stringify(progress));
}

export function clearSectionProgress(quizKey) {
    const key = `section-${quizKey}`;
    localStorage.removeItem(key);
}

export function getQuestionStatus(quizKey, questionId) {
    const key = `section-${quizKey}`;
    const progress = JSON.parse(localStorage.getItem(key) || '{}');
    return progress[questionId]?.result; // 'correct', 'incorrect', or undefined
}

export function getLastAttempt(quizKey, questionId) {
    const key = `section-${quizKey}`;
    const progress = JSON.parse(localStorage.getItem(key) || '{}');
    return progress[questionId]?.lastAttempt;
}

export function getInterval(quizKey, questionId) {
    const key = `section-${quizKey}`;
    const progress = JSON.parse(localStorage.getItem(key) || '{}');
    return progress[questionId]?.interval ?? 0;
}

export function getNextReview(quizKey, questionId) {
    const key = `section-${quizKey}`;
    const progress = JSON.parse(localStorage.getItem(key) || '{}');
    return progress[questionId]?.nextReview;
}

export function getHumanReadableNextReview(nextReview) {
    if (!nextReview) return ''

    const now = new Date()
    const reviewDate = new Date(nextReview)

    now.setHours(0, 0, 0, 0)
    reviewDate.setHours(0, 0, 0, 0)

    const diffDays = Math.round((reviewDate - now) / (24 * 60 * 60 * 1000))

    if (diffDays <= 0) return 'Ready!'
    if (diffDays === 1) return 'Tomorrow'
    return `${diffDays} days`
}