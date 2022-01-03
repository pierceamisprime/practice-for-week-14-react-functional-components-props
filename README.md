# Practice: Functional Components and Passing Props

In this practice you will create a functional component and pass props from a
parent component to a child component.

## Set up

Make sure you are logged in to your [codesandbox.io] account.

Navigate to the starter repo for this short practice by clicking the `Download
Project` button at the bottom of the page. Use one of the following options to
load the code into codesandbox.

### Option 1 (the simplest option)

- In the url of the starter repo, append `box` to the word `github` and hit
  `Enter` or `return` depending on your computer. You should be taken to
  [codesandbox.io] and the app should be loaded for you.
- Example: If the repo was
  `https://github.com/reduxjs/redux/tree/master/examples/todomvc`, it would
  become `https://githubbox.com/reduxjs/redux/tree/master/examples/todomvc`

### Option 2

- Navigate to [codesandbox.io] and sign in. Click `Create Sandbox`, then choose
 `Import Project` from the sidebar. Paste the link to the starter repo and
 click `Import and Fork`.

## Create a Functional Component

Create a functional component called `BaseStats` in your __src__ folder. It
should have a `div` with a class of `base-stats` and an `h1` with the text
"BaseStats". Import the __BaseStats.css__ file into your component.

Add the `BaseStats` component to your `App` component, placing it below the
`Showcase` component. (Don't forget to import it!) Test it in the browser.

Create an object literal inside your `App` component called `baseStats`.
It should look like this:

```js
const baseStats = {
  hp: 45,
  attack: 49,
  defense: 49,
  spAttack: 65,
  spDef: 65,
  speed: 45,
};
```

Pass this object to the `BaseStats` component using `stats` as the prop name.
In your `BaseStats` component, bring in `props` as the argument to the
functional component.

In your codesandbox browser, go to the browser DevTools and open the React
DevTools. Click on the `BaseStats` component. Under `props`, you should see your
stats props object.

![react-devtools-props]

## Use props object in the child component

Now you are ready to use your props object.

In `BaseStats.js`, create a table beneath your `h1` tag. It should have four
table rows, each with two table data tags. The first table data tag of each
table row should contain the header for each stat (Hit Points, Attack, Defense,
and Speed).

The second table data tag of each table row should contain the corresponding
variable you destructured from props. Your code should look something like this:

```js
  <table>
    <tbody>
      <tr>
        <td>Hit Points</td>
        <td>{props.stats.hp}</td>
      </tr>
      <tr>
        <td>Attack</td>
        <td>{props.stats.attack}</td>
      </tr>
      <tr>
        <td>Defense</td>
        <td>{props.stats.defense}</td>
      </tr>
      <tr>
        <td>Speed</td>
        <td>{props.stats.speed}</td>
      </tr>
    </tbody>
  </table>
```

The next goal is to make your code more concise and practice the DRY principle.
In the argument for the `BaseStats` functional component, destructure the
variables from the props object. Refactor your JSX to reflect these variables.
You should only call the variables `hp`, `attack`, `defense`, and `speed` in
your JSX.

**Remember: you can destructure a nested object.**

### Pass a Function as a Prop

There are times where you may want to pass a function as a prop. By doing this,
you will be passing a reference to the function in the parent component which
may then have some functionality.

In your `App` component, beneath your `baseStats` object, create a function
called `handleClick`.

Place this code inside the function:

```js
  alert(
    `Special Stats\n\tSpecial Attack: ${baseStats.spAttack}\n\tSpecial Defense: ${baseStats.spDef}`
  );
```

Now pass the `handleClick` function as a prop called `clicker` to the
`BaseStats` component.

In your `BaseStats` component, destructure the `clicker` prop in your function
component argument.

Next, above your table, create a button with the text `Check Special Stats`.
Give it a class of `sp-stats`. Pass an `onClick` event listener to the `button`
element and assign it the `clicker` function prop.

Remember, an event listener in React is camelCased--`onClick` instead of
`onclick`--and it takes a function as its assignment.

Notice that when the button is clicked, it triggers the `handleClick` function
in the parent component.

## What you've learned

**Congratulations!**
In this practice you have learned:

1. Passing values as props from parent to child
2. Checking props using React DevTools
3. Adding prop values to the child component
4. Destructuring props to remain DRY
5. Passing a function as a prop
6. One way of using the onClick EventHandler

[react-devtools-props]: ./images/react-devtools-props.png
[codesandbox.io]: https://codesanbox.io