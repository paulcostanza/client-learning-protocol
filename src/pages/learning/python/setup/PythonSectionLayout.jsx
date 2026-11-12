import SectionDrawer from '../../../../components/SideBarNav'
import PrevNextSection from '../../../../components/PrevNextSection'
import { Outlet } from 'react-router-dom'

const sections = [
    // Python 101: You wont get very far if you don't know what the fu¢k is going on
    { name: 'Intro', path: 'intro' },
    { name: 'Basics', path: 'basics' },
    { name: 'Booleans', path: 'booleans' },
    { name: 'Control Flow', path: 'control-flow' },
    { name: 'Loops', path: 'loops' },
    { name: 'Functions', path: 'functions' },
    { name: 'Lists', path: 'lists' },
    { name: 'List Comprehension', path: 'list-comprehension' },
    { name: 'Tuples', path: 'tuples' },
    { name: 'Sets', path: 'sets' },
    { name: 'Dictionaries', path: 'dictionaries' },
    { name: 'Type Hints', path: 'type-hints' },
    { name: 'Math 101', path: 'math-101' },
    { name: 'Scope', path: 'scope' },
    // OOP here
    { name: 'Classes & Objects', path: 'classes-and-objects' },
    { name: 'Importing Modules', path: 'importing-modules' },
    { name: 'Testing & Debugging', path: 'testing-and-debugging' },
    { name: 'Errors & Exceptions', path: 'errors-and-exceptions' },
    { name: 'Commputing', path: 'computing' },
    { name: 'Strings', path: 'strings' },
    { name: 'Regular Expressions', path: 'regular-expressions' },
    { name: 'Built-In Functions', path: 'built-in-functions' },
    { name: 'Passing Arguments', path: 'passing-arguments' },
    { name: 'RAM 101', path: 'ram-101' },
    // Data Structures & Algorithms
    { name: 'Algorithms: Problem-Solving Patterns', path: 'algorithms-problem-solving-patterns' },
    { name: 'Two Pointers & Sliding Window', path: 'two-pointers-and-sliding-window' },
    { name: 'Recursion', path: 'recursion' },
    { name: 'Backtracking', path: 'backtracking' },
    { name: 'Mutable Default Arguments', path: 'mutable-default-arguments' },
    { name: 'Depth-First Search', path: 'depth-first-search' },
    { name: 'Breadth-First Search', path: 'breadth-first-search' },
    { name: 'Trie: Dictionary Version', path: 'trie' },
    { name: 'Graphs: Intro', path: 'graphs-intro' },
    // APIs
]

export default function PythonSectionLayout() {
    return (
        <main>
            <SectionDrawer
                sections={sections}
                basePath='/python'
            />
            <main>
                <div className="container">
                    <Outlet />
                    <PrevNextSection sections={sections} basePath='/python' />
                </div>
            </main>
        </main>
    )
}