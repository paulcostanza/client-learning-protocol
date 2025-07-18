## To Do

***Check Trello for full list of what needs to be worked on and/or updated***

#### Quiz

- tags to questions (chips with material ui)
- change 'Next Question' to 'Results' after answering the last question
- add a count of which number question you are on out of a total number of questions
- rework entire quiz section. Save if the user gets it right or wrong in local memory (for now)

#### Flash card page

*Not sure if I will bring this back*

- Have a list of sections: python, cybersecurity, memory, etc
- Click on a section to work on it
- have a *correct* and a *wrong* button. 
    - hit *correct* -> card is placed in correct pile
    - hit *wrong* -> card is place in wrong pile
- after you go through the cards, it automatically brings up the wrong pile for you to try again

#### Navigation

**Top**
Reconstruct the top nav bar, too many topics right now

**Left**
List out all subsections so user can click and move to that section. On mobile this needs to be a drawer

**Mobile** Do I want up/down buttons to jump to next/prev section?

#### About Me

List what projects I am working on

#### index.html

Can I delete all of that? I added a bunch of stuff before I understood JSX 101 and tried adding a bunch of stuff. I will experiment and delete things when the time is right. 

#### Random

- Incorporate Three.js into the scroll for a more visually appealing website (not too much though!). Edit the landing page to something like **[Corn Revolution](https://cornrevolution.resn.global/)**, because it looks badass
- change intro into Programming 101
- should I make the *react-syntax-highlighter* into my own code component and access/customize it with props to make it more simple to understand?
- figure out how to have that button that copies code in the top right corner of code blocks
- spacing between headers is bad, it needs to be fixed. Padding and margins in general are bad, look up the standard ways to do this for websites
- Eventually: create a dashboard for users. Shows stats, pie charts, graphs, etc. (backend phase)
- Should have a quick notes section (**tl/dr** button) that gives you the most important information first, followed by the long format of what you need to know. This should be a button that exposes the good stuff (like a cheat sheet)

---

## Backend

Lol, far away from this rn.

Postgres is looking like the database for this project. 

Dashboard for users - hold all data in database (duh). Add all the data analytics for the user I want, line graphs, etc. 

---

## End Goal

People can choose what they want to study by picking the most important ideas or removing things that do not interest them. They will be tested on the material in the form of spaced repetition. If they start to do bad, they need to revisit certain ideas/concepts until they get it stuck in there head. If they do well, questions will be asked further out. 