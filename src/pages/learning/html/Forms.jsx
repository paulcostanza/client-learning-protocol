export default function Forms() {
    return (
        <div className="container">
            <h1>Forms</h1>

            <h2>How do Forms, Labels, and Inputs work in HTML?</h2>

            <p>The <code>form</code> element in HTML is used to gather user information such as names and email addresses.</p>

            <pre><code>
                {`<form method="value-goes-here" action="url-goes-here">
  <!-- inputs go inside here -->
</form>`}
            </code></pre>

            <ul>
                <li>The <code>action</code> attribute specifies where the form data will be sent upon submission. This connects to an API endpoint, which we do not need to worry about quite yet. For now, you can just put empty quotes.</li>
                <li>The <code>method</code> attribute is used to specify the HTTP method to use when sending the form data. You will learn more about this later on. But for now, understand the most common ones are <code>GET</code> and <code>POST</code>.</li>
            </ul>

            <p>To collect specific information you need to use the <code>input</code> element.</p>

            <pre><code>
                {`<form action="" method="POST">
  <input type="text" />
</form>`}
            </code></pre>

            <p>Right now our form is really boring and does nothing. The <code>input</code> needs to a little sprucing up!</p>

            <p><code>input</code> elements are void elements so they do not have closing tags. The <code>type</code> attribute defines the <em>data type</em> expected from the user. In this case, the data would be plaintext. For the user to understand what information you want from them, you would use a <code>label</code> element to label it.</p>

            <pre><code>
                {`<form action="">
    <label>
        Full Name:
        <input type="text">
    </label>
</form>`}
            </code></pre>

            <p>By nesting an <code>input</code> inside a <code>label</code> element, you create an <strong>implicit association</strong> between the two elements. The term <em>implicit</em> refers to something that is understood or inferred without needing to be explicitly stated or defined with additional attributes or elements. Now, if you want you can <strong>explicitly associate</strong> a <code>label</code> with an <code>input</code> via the <code>for</code> attribute.</p>

            <pre><code>
                {`<form action="">
  <label for="email"> Email Address: </label>
  <input type="email" id="email" />
</form>`}
            </code></pre>

            <p>Oh look, it's our friend the <code>id</code> attribute! When using an explicit association, the values for the <code>for</code> attribute in <code>label</code>, and the <code>id</code> attribute in <code>input</code>, need to be the same.</p>

            <p>In this case, the values are both set to <code>email</code>. The <code>email</code> type in the input provides basic validation for correctly formatted email addresses. If you want to show additional hints to the users about the expected input, you can use the <code>placeholder</code> attribute.</p>

            <pre><code>
                {`<!-- click on the email input and start typing in an email -->
<!-- you will see the placeholder text go away -->
<form action="">
  <label for="email"> Email Address: </label>
  <input type="email" id="email" placeholder="paul@clp.com" />
</form>`}
            </code></pre>

            <p>The placeholder text is great for providing helpful short text to show the format and type of data you expect from the user. In this case, the placeholder text shows the user that they must enter a correctly formatted email address.</p>

            <h3>Reviewing implicit vs explicit</h3>

            <ul>
                <li><strong>Implicit form association:</strong> inputs can be associated with labels by wrapping the input field <em>inside</em> the <code>label</code> element.</li>
                <li><strong>Explicit form association:</strong> inputs can be associated with labels by using the <code>for</code> attribute on the label element and the <code>id</code> attribute on the input element.</li>
            </ul>

            <h2>Changing default size of input bar</h2>

            <p><code>input</code> elements can have a size attribute. This attribute defines the number of characters that should be visible as the user types into the input. The value of <code>size</code> should be a non-negative integer greater than zero. If <code>size</code> is not specified, or is specified with an invalid value, the input will have the default width set by the browser.</p>

            <h2>What are the different types of buttons?</h2>

            <p>The <code>button</code> element is used to perform a particular action when it is activated.</p>

            <p>There are plenty of things buttons are used for, submitting a form, showing a modal, toggling a side menu to open and close, etc. The <code>button</code> element has a <code>type</code> attribute which controls the behavior of the button when it is activated. The first possible value for the <code>type</code> attribute would be the <code>button</code> type.</p>

            <p>By default, the button will not do anything when activated. However, you can add some JavaScript to make the button interactive, such as showing an alert in this case.</p>

            <p>Another possible value for the <code>type</code> attribute is the <code>submit</code> value.</p>

            <p>The <code>name</code> attribute is used to identify form data after it has been submitted to the server. This is how the server (the address by <code>action</code> which is sent by <code>method</code>) identifies what the user has selected.</p>

            <p>The third possible value for the <code>type</code> attribute is the <code>reset</code> value.</p>

            <p>We actually have a second way to create buttons, and that is with the <code>input</code> element. The <code>input</code> element also has a <code>type</code> attribute with the possible values of <code>submit</code>, <code>reset</code>, and <code>button</code>.</p>

            <p>The <code>value</code> attribute is used to show the button text. So what's the difference between using the <code>input</code> and <code>button</code> elements?</p>

            <ul>
                <li><code>input</code> elements are void elements</li>
                <li><code>button</code> elements are not, meaning you can nest text, images, and icons inside.</li>
            </ul>

            <p>Other than that, use the one you find best for your specific situation.</p>

            <h3>Button review</h3>

            <p>Here is a review of every type of button we have covered from above.</p>

            <pre><code>
                {`<form action="" method="POST">    

    <!-- Different button types using button element -->
    <button type="submit">Submit Form</button>
    <button type="reset">Reset Form</button>
    <button type="button" onclick="alert('This is a generic button!')">Show Alert</button>
    
    <!-- Different button types using input element -->
    <input type="button" value="Input Button" onclick="alert('This is an input button!')" />
    <input type="submit" value="Input Submit" />
    <input type="reset" value="Input Reset" />   
</form>`}
            </code></pre>

            <h2>Organizing Inputs in Form</h2>

            <p>Obviously forms can get <em>a lot</em> more involved and collect a lot more information at once. A great way to keep your code clean and well organized is with the <strong>fieldset</strong> element. It allows you to group related inputs together.</p>

            <pre><code>
                {`<form action="/example-url">
  <fieldset>
    <label for="name">Full name:</label>
    <input type="text" id="name" name="name" />
    <label for="email">Email:</label>
    <input type="email" id="email" name="email" />
  </fieldset>
</form>`}
            </code></pre>

            <p>And then when working with <code>fieldset</code> elements, it is common to use a caption to describe the group of inputs. You can use the <code>legend</code> element for this.</p>

            <h2>What is client-side form validation inside of HTML forms?</h2>

            <p>When a user fills out a form on a website, it is important that they fill out all of the necessary information in the correct format. HTML form controls, like <code>input</code>s, have a lot of built-in validation that you can use to check for invalid data. This will help ensure that the user fixes these mistakes before the information is submitted and processed by the server.</p>

            <p>The term <em>client-side</em> refers to everything that happens on the user's computer or device, like the part of a website or app you interact with directly. This includes the layout, design, and any interactive features.</p>

            <p>The term <em>server-side</em> refers to everything that happens on the server, the computer, or system that hosts the website or app. This includes processing data, running applications, and handling requests that come from the user's device.</p>

            <p>While client-side validation is important, you also need server-side validation for added security. Malicious users can bypass client-side checks, so robust server-side measures are essential. For now, let's take a look at some examples of client-side form validation.</p>

            <p>One common example of built-in form validation is to use the <code>required</code> attribute in inputs. The <code>required</code> attribute specifies that the user needs to fill out that portion of the form before it gets submitted.</p>

            <blockquote>Each browser will have its own set of styles for showing this alert message.</blockquote>

            <p>Another advantage of using the email input is that email inputs have some basic validation to ensure correctly formatted email addresses. For example, if you type in random words and click submit, then the browser will show an alert that an <code>@</code> sign is missing.</p>

            <blockquote>Browser will only check for basic validation for standard email addresses. It is up to YOU to add additional layers of validation (more on that later).</blockquote>

            <p>Other forms of validation for email inputs are to use the <code>minlength</code> and <code>maxlength</code> attributes.</p>

            <h2>What are different form states?</h2>

            <p>In HTML, form control, like inputs, can be in different stages or conditions. The first state would be considered the <code>default</code> state. Example: the default state of an email address input is a blank input or what the input looks like when it is first rendered on the page.</p>

            <p>When the user clicks on a form control or selects it with the keyboard's tab key, then that means it has entered the <code>focused</code> state. When an input is in this state, most browsers will show a blue highlighted border around the input (but this can be edited via CSS).</p>

            <p>The third form state is the <code>disabled</code> state. This shows users that an input cannot be focused or activated.</p>

            <h2>Different input types</h2>

            <p>Here we will discuss additional input types you can have within your form, including <code>radio</code>, <code>checkbox</code>, and <code>number</code> types.</p>

            <h3>Radio</h3>

            <p>If you want users to select one option from a list of options, you can use a set of <strong>radio buttons</strong>.</p>

            <p>The radio buttons are grouped together by using the same <code>name</code> attribute value. This means that only one radio button can be selected at a time.</p>

            <pre><code>
                {`<input type="radio" id="yes" name="likes-pizza">
<label for="yes">Yes</label>
<input type="radio" id="no" name="likes-pizza">
<label for="no">No</label>`}
            </code></pre>

            <p>The <code>value</code> attribute is used to specify the value that will be sent to the server when the form is submitted.</p>

            <blockquote>
                <code>name</code>: identifies the group<br />
                <code>value</code>: identifies the option that is selected
            </blockquote>

            <p>To recap our understanding of the example:</p>
            <ul>
                <li>both inputs share the <code>name</code> attribute of <em>likes-pizza</em></li>
                <li>selecting one radio button automatically unselects the others</li>
                <li>if <em>Yes</em> is selected &gt; once submitted the form sends the information <code>fruit=banana</code> to the server</li>
            </ul>

            <h3>Checkbox</h3>

            <p>When you want a user to select multiple options from a list, you can use <strong>checkboxes</strong>.</p>

            <pre><code>
                {`<fieldset>
  <legend>Food Options</legend>
  <input type="checkbox" id="burger" name="food-and-beverage" value="burger">
  <label for="burger">Burger</label>
  <input type="checkbox" id="hot-dog" name="food-and-beverage" value="hot-dog">
  <label for="hot-dog">Hot Dog</label>
  <input type="checkbox" id="fries" name="food-and-beverage" value="fries">
  <label for="fries">Fries</label>
  <input type="checkbox" id="onion-rings" name="food-and-beverage" value="onion-rings">
  <label for="onion-rings">Onion Rings</label>
  <input type="checkbox" id="cola" name="food-and-beverage" value="cola">
  <label for="cola">Cola</label>
  <input type="checkbox" id="water" name="food-and-beverage" value="water" checked>
  <label for="water">Water</label>
</fieldset>`}
            </code></pre>

            <p>Now we use the <code>name</code> attribute here as well, but this <em>does not cancel an input if two are selected</em>. Each checkbox can be checked/unchecked independently, even though they are sharing the same name.</p>

            <p>So in this example:</p>
            <ul>
                <li>all the inputs share the <code>name</code> attribute of <em>food-and-beverage</em></li>
                <li>selecting one checkbox button <em>does not</em> automatically unselect the others</li>
                <li>if <em>Hot Dog</em> and <em>Fries</em> is selected &gt; once submitted the form sends the information <code>food-and-beverage=hot-dog&food-and-beverage=fries</code> to the server</li>
            </ul>

            <blockquote>In addition, if you want to make a checkbox input checked by default, you can add the <code>checked</code> attribute. This can also be applied to <code>radio</code> elements.</blockquote>

            <h3>Number</h3>

            <p>The <code>type</code> attribute can use the value <code>number</code> to create a numeric input field.</p>

            <pre><code>
                {`<label for="age">Age:</label>
<input type="number" id="age" name="age" min="18" max="100" value="21">`}
            </code></pre>

            <p>The <code>min</code> and <code>max</code> attributes are used to set the minimum and maximum values that can be entered in the input field. The <code>value</code> attribute is used to give your input a default starting number.</p>

            <h2>Dropdown menus</h2>

            <p>When you want users to make selections from a dropdown menu, you can use the <code>select</code> and <code>option</code> elements.</p>

            <pre><code>
                {`<label for="city">Choose a City: </label>
<select id="city" name="city">
  <option value="new-york">New York</option>
  <option value="los-angeles">Los Angeles</option>
  <option value="chicago">Chicago</option>
  <option value="miami">Miami</option>
</select>`}
            </code></pre>

            <p>And just like with the <code>checkbox</code> value for the <code>type</code> attribute for <code>input</code> elements, you can make an <code>option</code> selected by default by simply adding the <code>selected</code> attribute to the <code>option</code> element you want to be selected.</p>

            <pre><code>
                {`<option selected value="amazing">Amazing</option>`}
            </code></pre>

            <p>A cool thing you can do is omit the label and create placeholder text inside of the dropdown itself.</p>

            <pre><code>
                {`<select name="country">
  <option value="" disabled selected>Select your country</option>
  <option value="us">United States</option>
  <option value="ca">Canada</option>
  <option value="me">Mexico</option>
</select>`}
            </code></pre>

            <p>The new <em>placeholder</em> is created with an empty (or no) <code>value</code> attribute, and adding the <code>disabled</code> and <code>selected</code> boolean attributes.</p>

            <h2>Textarea</h2>

            <p>If you want users to have more space to write down comments or messages, you can use a <code>textarea</code> element. It's an element that allows for multi-line text input control that allows users to enter text that is longer than a single line. It can be used to create a comment box, a message input, or other input that requires multiple lines.</p>

            <pre><code>
                {`<textarea id="comments" name="comments" rows="4" cols="50"></textarea>`}
            </code></pre>

            <p>The <code>rows</code> attribute is used to specify the visible height of the <code>textarea</code>, and the <code>cols</code> attribute is used to specify the visible width of the <code>textarea</code>.</p>

            <hr />
        </div>
    )
}