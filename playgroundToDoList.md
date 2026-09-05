## To Do

Each section is a new commit 

- add saving to localhost
- need to update practice/python as well as current problem
- create table dropdown inside Practice the Basics

The next section might need to be placed on hold, as I want to shift focus to adding content:

- add playlist
- add study guide (problem description header)

## random ideas or things to think about

- sandbox the code in iframe
- [neetcode - how I built a leetcode clone](https://www.linkedin.com/posts/navdeep-singh-3aaa14161_how-to-build-a-leetcode-clone-online-code-activity-7291952811943116800-wbmi/)
- Look up judge0
- how do I add an unlocking feature? (Most likely after adding signin)
- I don't like how in the Practice > python > Problems > python questions within the title I have the order number hard coded, how can I fix that?
- how do I fix the bottom cutoff that should be happening?
- how do I fix the top right quadrent's horizontal bar from not showing until you scroll all the way down?

---

## September 5th

- user submits code
- browser sends user's code as a request to the backend <code>POST /submit</code> with data:
     - <code>problem_id: 1</code>
     - <code>language: python</code>
     - <code>code: "def add(a, b): ...</code>
- backend creates a *job*
    - the server does not necessarily execute it immediately. It might put something like this into a queue since multiple users might submit code simultaneously:
        - <code>Job #827391

                Language: Python
                Problem: Two Sum
                Code: ...
                User: ...</code>
- send job to an isolated container (sandbox environment)
- test code + time limit + memory limit
- create result
- send to web server
- return result to user

Executing the code directly on your own server is bad. Instead, need to run program inside an isolated environment with things such as
- containers
- virtual machines
- linux namespaces
- seccomp
- resource limits

```console
CLP's actual server
│
├── website
├── database
├── user accounts
├── other services
│
└── isolated container
     │
     ├── your code
     ├── Python
     ├── test cases
     └── limited resources
```

```
                    INTERNET
                       │
                       ▼
                ┌─────────────┐
                │ Web Server  │
                └──────┬──────┘
                       │
                       ▼
                 ┌───────────┐
                 │   Queue   │
                 └─────┬─────┘
                       │
          ┌────────────┼────────────┐
          ▼            ▼            ▼
       Worker       Worker       Worker
          │            │            │
          ▼            ▼            ▼
       Sandbox      Sandbox      Sandbox
          │            │            │
          ▼            ▼            ▼
       Results      Results      Results
          └────────────┼────────────┘
                       ▼
                  Web Server
                       │
                       ▼
                     User
```

```
React code editor
       ↓
POST /submit
       ↓
Node/Express backend
       ↓
Start Docker container
       ↓
Run user's code + tests
       ↓
Capture result
       ↓
Destroy container
       ↓
Return "Accepted" / "Wrong Answer"
```

```
React
  │
  │ POST /submit
  ▼
Express backend
  │
  │ "Run this user's code"
  ▼
Docker container
  │
  │ executes code + tests
  ▼
Express backend
  │
  │ { passed: true }
  ▼
React
  │
  ▼
"✓ Accepted"
```

To build:
```
1. Frontend
   ↓
2. Backend
   ↓
3. Docker
   ↓
4. Code execution/testing
```