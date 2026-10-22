## My notes for the object section in JS

## Objects





 













> Adding, updating, and removing

Objects do not have to be set in stone the moment you create them. You can add new properties, change existing ones, and remove properties entirely after the fact. 

Adding and updating. Both use the exact same syntax: assign to a key:

```js
const user = {
  name: "Brad",
  email: "brad@example.com",
  age: 38,
}
 
user.role = "admin"   // key didn't exist: added
user.age = 39         // key existed: overwritten
 
console.log(user)
// { name: "Brad", email: "brad@example.com", age: 39, role: "admin" }
```

If the key was there, it gets overwritten. If it was not, the object grows. Same operator (<code>=</code>), same syntax. Bracket notation works the same way (<code>user["isActive"] = true</code>). Use brackets when the key needs them, otherwise use those dots.

> Removing a property with <code>delete</code>

To take a property off an object entirely, use the <code>delete</code> operator. 

```js
delete user.role
 
console.log(user.role)   // undefined
```

It is an operator and not a function. <code>delete user.x</code> works without parentheses. It works with bracket notation the same way. You will not use this too often.

Like arrays, objects are declared with <code>const</code>, yet we keep changing it without an error. 

```js
user.age = 40              // fine
user = { name: "Sasha" }   // TypeError: Assignment to constant variable
```

<code>const</code> *does not* make the object's contents permanent. It only stops the variable from being reassigned to a different value. It protects the label, not the box, the same model arrays follow. 

> Object methods

Remember how we mentioned that the value of a property could be a function? A function stored as a property is called a method. A **method** lets an object carry its own behavior alongside its data.

The basic shape: A method is jsut a property whose value is a function:

```js
const user = {
  name: "Brad",
  greet: function () {
    console.log("Hi!")
  },
}
 
user.greet()   // "Hi!"
```

You access it the same way as any other property (<code>user.greet</code>) and then call it with <code>()</code>.

Writing <code>function ()</code> after every key gets noisy fast, so object literals have a shorter form just for methods:

```js
const user = {
  name: "Brad",
  greet() {
    console.log("Hi!")
  },
}
```

Same thing: drop the <code>:</code> and the word <code>function</code>. This is the form you will see in real code most of the time.

<code>this</code>

Methods usually want to read the object's own data. They do that with the keyword <code>this</code>: inside a method <code>this</code> refers to the object the method was called on. So inside <code>user.greet()</code>, <code>this.name</code> is <code>user.name</code>.

```js
const user = {
  name: "Brad",
  greet() {
    console.log(`Hi, I'm ${this.name}`)
  },
}
 
user.greet()         // "Hi, I'm Brad"
 
user.name = "Sasha"
user.greet()         // "Hi, I'm Sasha"
```

<code>name</code> is not permentaly saved to <code>user</code>. <code>this</code> looks up name every time.

> When do I decide that a method should belong to an object?

If the behavior is *about* this object specifically and reads from its own fields, make it a method. If it is general and coule work on any input, make it a standalone function. Methods are keeping behavior gluded to the data it operators on.

> Nested Data

Real data is rarely flat. A user has an address, which has a city and a zip. A user has a list of tags. the values inside an object can themselves be objects or arrays, and you will spend a lot of time drilling down to find what you want. 

An object inside an object. Any value can go on the right side of a property, including another object literal.

```js
const user = {
  name: "Brad",
  address: {
    city: "Boston",
    state: "MA",
    zip: "02108",
  },
}
 
console.log(user.address.city)   // "Boston"
user.address.zip = "02101"       // writing works the same way
```

Read it left to right: user -> address -> city. Each dot drops you one level deeper. there is no special *nested update* syntax either. You chain until you are at the right level, then assign.

Arrays as values

A property's value can also be an array. You access individual items by its index, just as you would expect:

```js
const user = {
  name: "Brad",
  tags: ["frontend", "react", "design"],
}
 
console.log(user.tags[0])         // "frontend"
console.log(user.tags.length)     // 3
user.tags.push("typescript")      // adds to the array
```

How deep can it go?

As deep as the data needs. Real API responses regularly look ike this:

```js
const order = {
  id: 1042,
  customer: {
    name: "Sasha",
    address: {
      city: "Boston",
      coords: { lat: 42.36, lng: -71.06 },
    },
  },
  items: [
    { name: "Notebook", qty: 2 },
    { name: "Pen", qty: 5 },
  ],
}
 
console.log(order.customer.address.coords.lat)   // 42.36
console.log(order.items[0].name)                  // "Notebook"
```

The pattern is always the same: dot to go into an object, brackets-with-a-number to go into an array, repeat until you are at the value. 

The TypeError trap: One issue to be aware of is if a step in the chain is missing, JS throws a <code>TypeError</code> instead of just giving you <code>undefined</code>.

```js
const user = { name: "Brad" }
 
console.log(user.address)        // undefined (one level deep, no problem)
console.log(user.address.city)   // TypeError: Cannot read properties of undefined
```

Reading <code>user.address</code> gives you <code>undefined</code>, fine. But then you try to read <code>.city</code> off <code>undefined</code> and that becomes an error. As you nest deeper, you become more responsible for knowing the shape of your data: when the shape is known, chain freely! When it is uncertain, check first. 

---

## Review

Make this a question: 

Asking for a key that is not on the object never causes an error. You just get <code>undefined</code> back, so writing <code>user.naem</code> when you meant <code>user.name</code> fails silently instead of warning you. 
