import ReviewQuiz from '../../../components/ReviewQuiz.jsx'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism'
// import Dropdown from '../../../Helpers/Dropdown.jsx'

export default function TypeHints() {
    const quizImports = {
        python: () => import('../../../pages/quiz/database/PythonQuestions.js')
    }

    const getDamage = `def get_damage(weapon: dict, level: int) -> int:
    return weapon["damage"] + (level * 2)`

    const character = `character_name: str = "Some Dude"
character_level: int = 17
character_health: float = 92.5
has_magic: bool = True`

    const greetPlayer = `def greet_player(name: str):
    print(f"Welcome, {name}!")`

    const addGold = `def add_gold(current_gold: int, found_gold: int):
    return current_gold + found_gold`

    const addGoldWithReturnType = `def add_gold(current_gold: int, found_gold: int) -> int:
    return current_gold + found_gold`

    const getGreeting = `def get_greeting(player_name: str) -> str:
    return f"Welcome, {player_name}!"`

    const inventory = `inventory: list[str] = ["Iron Sword", "Healing Potion"]`

    const uniqueItems = `unique_items: set[str] = {"Iron Sword", "Healing Potion"}`

    const itemCount = `item_counts: dict[str, int] = {
    "Wooden Arrow": 30,
    "Small Amethyst": 2,
}`

    const lootDrop = `loot_drop: tuple[str, int] = ("Garnet Mask", 2)`

    const stats = `stats: tuple[int, float, int] = (100, 42.5, 75)`

    const characterSpells = `character_spells: dict[str, list[str]] = {
    "Gandalf": ["Fireball", "Light"],
    "Frodo": ["Hide"],
}`

    const damageBonus = `damage_bonus: int | None`

    const getPreparedSpell = `def get_prepared_spell(has_spell: bool) -> str | None:
    if has_spell:
        return "Fireball"

    return None`

    return (
        <div className="container">
            <h1>Type Hints</h1>

            <p>When a program is small, it is usually easy to remember the types of your variables, arguments, and parameters. However, as your program grows it is easy to forget...</p>

            <ul>
                <li>Is a <code>level</code> an <code>int</code> or a <code>str</code>?</li>
                <li>Does <code>get_item()</code> always return an item name as <code>str</code> or can it return <code>None</code> if one is not found?</li>
                <li>Is <code>inventory</code> a list of strings, or a dictionary of item counts?</li>
            </ul>

            <p><strong>Type hints</strong> let us write those expectations directly in our code:</p>

            <div className="">
                <SyntaxHighlighter language="python" style={tomorrow} showLineNumbers
                    wrapLines={true} className=" code-snippet">
                    {getDamage}
                </SyntaxHighlighter>
            </div>

            <p>The <code>weapon: dict</code>, <code>level: int</code>, and <code>-&gt;</code> parts are all type hints. They tell humans and code editors what kinds of values the function expects and returns. </p>

            <p>Make no mistake, python is still a <em>dynamically typed language</em>, and it will not automatically reject the wrong value just because a type hint says so.</p>

            <p>Type hints are optional and for:</p>

            <ul>
                <li>making code easier to read</li>
                <li>helping your editor autocomplete and warn you about mistakes</li>
                <li>makies bugs easier to spot before running your code</li>
            </ul>

            <h2>Basic types</h2>

            <p>To add a type hint to a variable declaration, put a colon after the variable name, then the type. This comes before the equals sign and the value:</p>

            <div className="">
                <SyntaxHighlighter language="python" style={tomorrow} showLineNumbers
                    wrapLines={true} className=" code-snippet">
                    {character}
                </SyntaxHighlighter>
            </div>

            <blockquote>
                <p>The value works the exact same way they did before.</p>
            </blockquote>

            <p>It is usually not typical to add the hint for basic types since you can <em>infer</em> which basic type it is.</p>

            <p>Example, <code>character_name = "Some Dude"</code> is easy to tell that <code>character_name</code> is a string value.</p>

            <h2>Function parameters</h2>

            <p>The syntax is the same as variable type hints as it is for function parameters:</p>

            <div className="">
                <SyntaxHighlighter language="python" style={tomorrow} showLineNumbers
                    wrapLines={true} className=" code-snippet">
                    {greetPlayer}
                </SyntaxHighlighter>
            </div>

            <p>And when a function has multiple parameters, each one can have its own type hint:</p>

            <div className="">
                <SyntaxHighlighter language="python" style={tomorrow} showLineNumbers
                    wrapLines={true} className=" code-snippet">
                    {addGold}
                </SyntaxHighlighter>
            </div>

            <h2>Return types</h2>

            <p>You can also annotate the type that you expect a function to <code>return</code>. When you know what types go into and come out of a function, you can (probably) use it without having to read every line of the function body. Return types come after the parameter list but before the colon:</p>

            <div className="">
                <SyntaxHighlighter language="python" style={tomorrow} showLineNumbers
                    wrapLines={true} className=" code-snippet">
                    {addGoldWithReturnType}
                </SyntaxHighlighter>
            </div>

            <p>The <code>-&gt;</code> means this function is <em>expected</em> to return an <code>int</code>.</p>

            <div className="">
                <SyntaxHighlighter language="python" style={tomorrow} showLineNumbers
                    wrapLines={true} className=" code-snippet">
                    {getGreeting}
                </SyntaxHighlighter>
            </div>

            <p>The <code>-&gt;</code> means this function is expected to return a <code>str</code>.</p>

            <h2>List and set hints</h2>

            <p>Beyond the basic types, python also allows you to add hints for <em>container types</em> - types that hold other data types:</p>

            <ul>
                <li><code>list</code></li>
                <li><code>set</code></li>
                <li><code>dict</code></li>
                <li><code>tuple</code></li>
            </ul>

            <p>When we type-hint a container, we specify what kind of container it is and what type of values it contains. For example, a <em>list of strings</em> can be expressed as <code>list[str]</code> and used like so:</p>

            <div className="">
                <SyntaxHighlighter language="python" style={tomorrow}
                    wrapLines={true} className=" code-snippet">
                    {inventory}
                </SyntaxHighlighter>
            </div>

            <p>The <em>contained</em> type goes in square brackets after the container type. Similarly, for a set of strings, we would write <code>set[str]</code> like this:</p>

            <div className="">
                <SyntaxHighlighter language="python" style={tomorrow}
                    wrapLines={true} className=" code-snippet">
                    {uniqueItems}
                </SyntaxHighlighter>
            </div>

            <blockquote>
                <p>With container type hints, it is also possible to just write the container type without the type of value. Sometimes you really do not know what types of values a container will hold, or the specific type hint would be too complicated to be useful. This is not an issue... just give clear type hints whenever possible!</p>
            </blockquote>

            <h2>Dictionary hints</h2>

            <p>Since dictionaries are container types that map keys to values, you include both in the type hint:</p>

            <div className="">
                <SyntaxHighlighter language="python" style={tomorrow} showLineNumbers
                    wrapLines={true} className=" code-snippet">
                    {itemCount}
                </SyntaxHighlighter>
            </div>

            <p>The first type is for the keys and the second type is for the values: <code>dict[key_type, value_type]</code></p>

            <p>So with something like <code>dict[str, int]</code>, the keys are strings and the values are integers.</p>

            <h2>Tuple hints</h2>

            <p>Lists and sets usually hold multiple values of the same type. However, tuples are a small fixed group of values where each position has its own meaning. Because they are fixed, it is quite common for those values to be of different types. For example, a loot drop might have an item name and a quantity:</p>

            <div className="">
                <SyntaxHighlighter language="python" style={tomorrow}
                    wrapLines={true} className=" code-snippet">
                    {lootDrop}
                </SyntaxHighlighter>
            </div>

            <p>Here, <code>tuple[str, int]</code> means there are two values in the tuple:</p>

            <ol>
                <li>The first value is a <code>str</code></li>
                <li>The second value is an <code>int</code></li>
            </ol>

            <p>A tuple can have any number of values, although 2 and 3 are the most common. Here is an example representing a characters, HP, MP, and stamina:</p>

            <div className="">
                <SyntaxHighlighter language="python" style={tomorrow}
                    wrapLines={true} className=" code-snippet">
                    {stats}
                </SyntaxHighlighter>
            </div>

            <p>The type hint <code>tuple[int, float, int]</code> tells us this is a three-value tuple with an integer, float, and another integer in that order.</p>

            <h2>Nested types</h2>

            <p>We have looked at relatively simple container types, but they can get more complex when one container holds another container! It is possible to have <em>nested container types</em>.</p>

            <p>A dictionary for example could map each character's name to their list of spells:</p>

            <div className="">
                <SyntaxHighlighter language="python" style={tomorrow} showLineNumbers
                    wrapLines={true} className=" code-snippet">
                    {characterSpells}
                </SyntaxHighlighter>
            </div>

            <p>We read <code>dict[str, list[str]]</code> from the outside in:</p>

            <ul>
                <li>We have a dictionary (<code>dict</code>)</li>
                <li>With each key being a string (<code>str</code>)</li>
                <li>And each value is a list of strings (<code>list[str]</code>)</li>
            </ul>

            <blockquote>
                <p>In extreme cases, nested types can get super confusing, but it is less confusing than it would be without the types attached. For now, just focus on knowing that type hints can describe containers within container.</p>
            </blockquote>

            <h2>Optional values</h2>

            <p>You can use the <code>|</code> operator to indicate that a value can be of multiple types:</p>

            <div className="">
                <SyntaxHighlighter language="python" style={tomorrow}
                    wrapLines={true} className=" code-snippet">
                    {damageBonus}
                </SyntaxHighlighter>
            </div>

            <p>This means that <code>damage_bonus</code> can be either an integer or <code>None</code>. For example, a function might return a prepared spell if one is ready, or <code>None</code> if there is no spell prepared:</p>

            <div className="">
                <SyntaxHighlighter language="python" style={tomorrow} showLineNumbers
                    wrapLines={true} className=" code-snippet">
                    {getPreparedSpell}
                </SyntaxHighlighter>
            </div>

            <hr />

            <h2>Review</h2>

            <ReviewQuiz
                quizImports={quizImports}
                subcategory="type-hints"
            />

        </div>
    )
}