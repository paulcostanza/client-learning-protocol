## To Do

***Check Trello for full list of what needs to be worked on and/or updated***

#### Quiz

- tags to questions (chips with material ui)
- change 'Next Question' to 'Results' after answering the last question
- add a count of which number question you are on out of a total number of questions
- a modal where the user can select type of quiz -> arrays, strings, everything, ...

#### About

**Me**
- List what projects I am working on

**CLP**
- goal
- how to use
- ETA on features?

#### index.html

Can I delete all of that? I added a bunch of stuff before I understood JSX 101 and tried adding a bunch of stuff. I will experiment and delete things when the time is right. 

#### Random

- Incorporate Three.js into the scroll for a more visually appealing website (not too much though!)
- change intro into Programming 101
- should I make the *react-syntax-highlighter* into my own code component and access/customize it with props to make it more simple to understand?
- figure out how to have that button that copies code in the top right corner of code blocks
- spacing between headers is bad, it needs to be fixed. Padding and margins in general are bad, look up the standard ways to do this for websites
- Should have a quick notes section (**tl/dr** button) that gives you the most important information first, followed by the long format of what you need to know. This should be a button that exposes the good stuff (like a cheat sheet)

---

## Database

No database yet. Questions are stored inside of <code>json</code> files. They look like so: 

```javascript
 {
    id: 1,
    type: 'radio',
    category: 'programming language',
    subcategory: 'strings',
    title: 'Question Title',
    question: "What is the answer?",
    options: [
        'This is the answer',
        'No wait, this one',
        'I\'m pretty sure it\'s me!',
    ],
    random: true,
    answer:  'This is the answer',
    description: 'Example of a question from CLP'
}      
```

Trying to set this up so it is an easier transition to an actual database setup. 

## Backend

Lol, far away from this rn.

Postgres is looking like the database for this project. 

Dashboard for users - hold all data in database (duh). Add all the data analytics for the user I want, line graphs, stats, pie charts, graphs, etc.

---

## End Goal

People can choose what they want to study by picking the most important ideas or removing things that do not interest them. They will be tested on the material in the form of spaced repetition. If they start to do bad, they need to revisit certain ideas/concepts until they get it stuck in there head. If they do well, questions will be asked further out. 