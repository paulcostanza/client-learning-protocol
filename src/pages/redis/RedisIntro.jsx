import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism'
import Latex from 'react-latex'
import CacheIsStorage from '../../assets/redis/cache is storage.png'
import OnFailure from '../../assets/redis/on failure.png'
import KeyValues from '../../assets/redis/key value.png'
import KeyAsDataStructures from '../../assets/redis/key as data structures.png'
import FullStackRequestFlow from '../../assets/redis/full stack request flow.png'
import RedisAsADatabase from '../../assets/redis/redis as a database.png'
import Table from '@mui/joy/Table'
import Sheet from '@mui/joy/Sheet'

export default function RedisIntro() {

    const setGetKey = `redislabs.com:17069> SET hello world
redislabs.com:17069> GET hello
"world"`

    return (
        <div>

            <p>
                <strong><em>Redis</em></strong> (<strong>re</strong>mote <strong>di</strong>ctionary <strong>s</strong>erver) is an in-memory multi-model database that is known for its sub-millisecond latency. The general idea is that cache can also be a durable data storage.
            </p>

            <img src={CacheIsStorage} alt="cache is storage" style={{ maxWidth: '100%' }} />

            <h2>Can't fail</h2>

            <p>
                Redis creates a system where data is always modified or read from the main computer memory, as opposed to the much slower disk. But at the same time it stores its data on the disk so it can be reconstructed as needed. This means the database is fully durable, supporting things like snapshots and backups.
            </p>

            <p>
                Redis <em>handles failures</em> to ensure no data loss happens using <strong>persistent storage</strong> - data that is stored in <em>non-volatile ways</em> to make sure the data survives restarts, crashes, or power losses.
            </p>

            <ul>
                <li>Redis stores data in memory (RAM), but that is volatile</li>
                <li>Ephemeral data: redis stores its current state temporarily in SSD</li>
                <li>Persistent Storage (AOF/Snapshot)
                    <ul>
                        <li>AOF (Append Only File): logs every write operation</li>
                        <li>snapshot: periodic snapshot of the in-memory DB</li>
                    </ul>
                </li>
            </ul>

            <h4>Persistent vs Ephemeral</h4>

            <Sheet>
                <Table
                    borderAxis="none"
                    color="neutral"
                    size="lg"
                    stickyFooter={false}
                    stickyHeader={false}
                    stripe="odd"
                    variant="outlined"
                    hoverRow
                >
                    <thead>
                        <tr>
                            <th>Type</th>
                            <th>Location</th>
                            <th>Volatile?</th>
                            <th>Use Case</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Ephemeral data</td>
                            <td>RAM/SSD</td>
                            <td>Yes</td>
                            <td>Fast access during normal operation</td>
                        </tr>
                        <tr>
                            <td>Persistent data</td>
                            <td>Disk</td>
                            <td>No</td>
                            <td>Ensures durability after crash/restart</td>
                        </tr>
                    </tbody>
                </Table>
            </Sheet>

            <h4>What happens on failure</h4>

            <img src={OnFailure} alt="on failure" style={{ maxWidth: '100%' }} />

            <p>Redis Instance Fails (top box in pic)</p>
            <ul>
                <li>SSD-stored data is lost because it is ephemeral</li>
                <li>Redis has previously saved data to persistent storage (AOF or snapshot)</li>
            </ul>

            <p>Recovery (bottom box in pic)</p>
            <ul>
                <li>a new Redis instance is spun up</li>
                <li>it loads data from persistent storage (AOF/snapshot)</li>
                <li>no data is lost!</li>
            </ul>

            <h2>Key Value</h2>

            <p>
                Every data point in the database is a key followed by a value, which is represented by one of many data structures. This allows you to store data naturally, just like you would with whatever programming language you are working with.
            </p>

            <img src={KeyValues} alt="key value" style={{ maxWidth: '100%' }} />
            <img src={KeyAsDataStructures} alt="key as data structures" style={{ maxWidth: '100%' }} />

            <h2>Interact with database</h2>

            <p>
                Commands are relatively simple: <code>SET</code>, followed by a key and value to create data, followed by a <code>GET</code>, followed by a <code>KEY</code> to read data.
            </p>

            <div className="">
                <SyntaxHighlighter language="bash" style={tomorrow} showLineNumbers
                    wrapLines={true} className="code-snippet">
                    {setGetKey}
                </SyntaxHighlighter>
            </div>

            <p>
                Redis is known as a <em>key-value store</em> and is often used as a cache to make relational databases faster at scale.
            </p>

            <img src={FullStackRequestFlow} alt="full stack request flow" style={{ maxWidth: '100%' }} />

            <p>Here we see how requests flow through a typical full-stack application.</p>

            <ul>
                <li>The <strong>browser</strong> (client) interacts with the application</li>
                <li><strong>node.js</strong> is the backend that receives request from the browser to process them</li>
                <li>Our <strong>db</strong> stores all of the data the user has/needs access to</li>
                <li><strong>redis</strong> uses in-memory cache or session storage to improve performance for the app/website</li>
            </ul>

            <p>The flow:</p>
            <ul>
                <li>
                    <Latex>$ user \leftrightarrow node.js $</Latex>
                    <ul>
                        <li>the browser sends HTTP requests</li>
                        <li>node.js handles logic, routes, session, etc</li>
                    </ul>
                </li>
                <li>
                    <Latex>$ node.js \leftrightarrow relational \space db$</Latex>
                    <ul>
                        <li>when persistent data is needed, the server queries the relational db</li>
                    </ul>
                </li>
                <li>
                    <Latex>$ node.js \leftrightarrow redis $</Latex>
                    <ul>
                        <li>before hitting the relational db, the server may first check redis for cached data</li>
                        <li>redis speeds things up and reduces load on the database</li>
                    </ul>
                </li>
            </ul>

            <h2>As a database</h2>

            <p>
                Redis also has the ability to be its own database, following a multitude of database paradigms.
            </p>

            <img src={RedisAsADatabase} alt="redis as a database" style={{ maxWidth: '100%' }} />
        </div>
    )
}