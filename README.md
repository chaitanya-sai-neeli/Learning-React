Learing react js from scratch as a beginner.

- `Package .json` is a configuration for npm. It keeps a track of what version of that package is installed in to the system. It maintains the version of our dependencies.
- Packagelock.json keeps track of exact version, locks the version and keeps track of it.
- There are 2 types of depedencies we can install:
  1. `Dev dependencies (Mostly used in development phase)`
  2. `Nomal dependencies (Used in production)`
- Transitive dependencies : Our Project --> Parcel --> dependencies --> dependencies
- `Parcel` : Parcel is a bundler, it also helps in Dev build, Local Server, HMR (Hot Module Replacement) using File Watching Algorithm written in C++, Caching- Faster builds, Image Optimisation, Minification, Bundling, Compressing, Tree Shaking, Diagonostics, Code splitting, Differential bundling
- With the help of package.json and packagelock.json-we can regenerate node modules, so we need not to push node_modules in to our Github
- npm - calling command of npm where as npx means executing a npm package parcel with a source file as index.html
- Till this point we were using React from CDN links but from now on we will be using react from node modules.

# Episode 01 and Episode 02:

- Package .json is a configuration for npm. It keeps a track of what version of that package is installed in to the system. It maintains the version of our dependencies.
- `Node modules`: It has all the dependencies of our project, needs help of variuos js packages that are installed inside node modules
- `Packagelock.json` keeps track of exact version, locks the version and keeps track of it.
- There are 2 types of depedencies we can install:
  1. `Dev dependencies` (Mostly used in development phase)
  2. `Normal dependencies` (Used in production)
- `Transitive dependencies` : Our Project --> Parcel --> dependencies --> dependencies
- `Parcel` : It's a powerful bundler, it also helps in Dev build, Local Server, HMR (Hot Module Replacement) using File Watching Algorithm written in C++, Caching- Faster builds, Image Optimisation, Minification, Bundling, Compressing, Tree Shaking, Diagnostics, Code splitting, Differential bundling
- With the help of package.json and packagelock.json-we can regenerate node modules, so we need not to push node_modules in to our Github
- npm - this is a calling command of npm where as npx means executing a npm package parcel with a source file as index.html
- Till this point we were using React from CDN links but from now on we will be using react from node modules.

# Episode 03:

- npm - It means-calling a command of npm where as npx means executing an npm command.
- npm parcel index.html : It means executing an npm package parcel with a source file as index.html
- `Industry standards` : We need to use scripts to start or build our projects. For that we need to write scripts in scripts json of package.json file.
  Syntax:
  "script name" : the command that needs to be run in npm
  "start" : parcel index.html - dev build
  "build" : parcel build index.html - production build
- Executing our scripts : npm run "script name" ie; npm run start or npm run build. For just dev build we can use shorthand as npm start
- `JSX(Javascript XML)` : It is a javascript syntax which is easier to create react elements.
- JSX is not html in javascript but JSX is html like syntax.
- JS Engine / Browsers doesn't understand JSX but Parcel is transpiling JSX code (in to React.CreateElement - JS Object) with the help of `babel` to make it understandable for JS Engine.
- To use attributes in JSX, we have to use camelcase. If we are writing JSX in multiple lines we need to wrap it in "()" round braces.
- `Components in React` :
  1. `Class based Component` : Older way of creating components.
  2. `Functional Components` : Newer way, It is a JS function that returns a JSX element/code. These functions should always start with Capital letters.
- To insert a React element (using JSX) inside an other React element we need to wrap it in curly braces "{}".
- To insert a Functional component inside an other we need to wrap it in "<> </>"
- `Props in JS`: Passing props to a component is same like passing an argument to a function
- When we have to dynamically pass data to a component we do it using props.
- `Config Driven UI`: UI is displayed based upon the data/Config.

# Episode 04 :

- Whenever we are using a map we need to assign a key for each element of an array.
- We shouldn't use the index of array elements as keys which is a bad practice.
- There are 2 types of Imports and Exports
  1. `Default export/import` Ex: export Header from ./src/components/Header;
  2. `Named export/import` Ex: export const Header;

# Episode 05:

- `React hooks :` These are normal JS utility functions given to us by react, it has some super powers. use State-used to create state variables and use Effect is for handling api calls and data feteching.
- Super Powerful state variable:
  React will be constantly monitoring the state variable and Whenever it changes/updates react re-renders the component.
- const [name, setName] = useState("Chaitanya Sai");
- `useState hook` returns an array- 1st ele of that array is a variable, 2nd ele is a modifier function
- It can also be written as:
  const arr = useState("Chaitanya Sai");
  const name = arr[0];
  const setName = arr[1];
- `Virtual DOM` is the object representation of actual DOM.
- `React / React Algo working nature behind the scenes:`
- Uses Reconciliation Algorithm / React Fibre: It uses diff algorithm to find the diff b/w prev & present JS objects (React keeps track of DOM in the form of objects) and then updates the UI. It doesn't compare the html elements. Hence React is faster.
- Whenever there is a change in state variable, React will find out the diff b/w virtual DOM and re-renders the component
- `Why React is fast ?`
- Because it does efffective DOM manipulation and
- React will be constantly monitoring the state variable and whenever it changes/updates react re-renders the component.
- Whenever a state variable update, react triggers a Reconciliation cycle(re-renders the component).
- `React Fibre`: New way of finding the diff and updating the DOM.
- `useEffect`: It takes 2 arguments - Callback function and a dependant array
- `Syntax :` useEffect(() => {}, []);
- The Callback function will be called after the component renders
- As soon as the component's render cycle is completed, the callback function of useEffect will be invoked
- If there is `no dependency array` then useEffect will be called `everytime when component renders.`
- If `dependency array is empty,` then useEffect will be called only when the `component renders for the 1st time.`
- If `dependency array has something` inside it, then useEffect will be called `everytime the dependency array changes.`
- Watch Akshay Saini's CORS video

# Episode 06:

- `Monolith Architecture:`
- `Micro Services:` All these micro services form a big whole app, all micro services talk to each other.
  Micro Services follow Single responsibility principle: Each service has its own job and Separation of concerns.
  Our app comes under UI micro service.
- `2 ways data can be fetched from API`
  Page loads --> API(wait for data-500ms) --> Render the data
  Page loads --> Render dummy UI till API fetches data --> API(wait for data-500ms) --> Re-render our app with new data
- When you update the content of an element inside a Functional component then react will re-render the whole component not just the updated element. Please note that-here only the updated element will be refreshed as the Reconciliation/diff would show only updated element.
- Functional Component re-rendering is same as a function invoking again.
- While using "useState" hook with a const variable, when the component re-renders-the whole new const variable is created with its updated content but not the old const variable is getting assigned with a new value(which is not possible in js).

# Episode 07:

- `useEffect` will be called everytime the component renders, only callback function is mandatory inside useEffect not the dependant array.
- If there is `no dependency array` then useEffect will be called `everytime when component renders`.
- If `dependency array is empty,` then useEffect will be called only when the `component renders for the 1st time`.
- If `dependency array has something inside it,` then useEffect will be called `everytime the dependency array changes`.
- useState should only be used inside a functional component.
- useState should be created at the start/top of functional component to avoid inconsistency and its a best practice.
- Never use useState inside if-else conditional statements or loops, it doesn't make sense.
- `Routing:` 1) Creating the router and 2) Providing the router
- `Router Configuration`
  1. `Creating the configuration:` import createBrowserRouter from react-router-dom.
  2. It takes in some config.
  3. Config is a list, list of objects.
  4. Each object defines a different path and what should happen in it.
- Router provider is a component and it will provide us the routing config to use in our app.
- React Router DOM gives us an access to imp. hook: useRouteError - gives us more info about the error encountered
- When you are using react & if you wish to route to other page, we shouldn't use traditional anchor tags
- Because anchor tags reloads the whole page where as Link tag only refreshes the components
- `Link component` is a super power given to us by react-router-dom
- 2 types of Routing in Web apps
  1. Client Side Routing : No n/w calls. All components are in the app already. Just components load accordingly.
  2. Server Side Routing : Reloads the whole page => Sends n/w call to aboutUs.html --> fetches the html --> Renders it to Web page
- Single Page Applications: Only 1 page would be there & only components would be interchanging via Client Side Routing.

# Episode 08:

- `Class based Components`: Older way of creating Components.
- Its a JS class(that extends React.Component) which has a render method which returns a piece of jsx.
- React.Component is a class given to us by React.
- Passing Props to Class based components
  constructor(props){
  super(props)
  }
  Reason why we are using super keyword in here:
- Inheritance in JavaScript Classes:
  ** UserClass extends React.Component, which means it’s a subclass of React.Component.
  ** In JavaScript, when a class extends another class, the constructor of the subclass must call super() (the parent class’s constructor) before accessing this or any properties on this.
  \*\* super() allows the subclass to inherit the functionality of the parent class (React.Component), setting up the component correctly.
- `Passing props to React.Component`:
  ** When you call super(props), you’re passing props to the parent class (React.Component) constructor.
  ** This allows React.Component to set up this.props for your component. Without super(props), this.props would be undefined in your component, leading to errors when you try to access this.props.name or this.props.place.
- `State in Class based components` : We declare state variables inside a state object and to update the variables-we use setState which expects an object to be returned for updation
- constructor > render > API Call > Fill the data of API inside component->re-renders the component
- Life Cycle of Class based Component: Contructor > Render > ComponentDidMount
- Reference link : "https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/"
- API calls will be made inside componentDidMount
- `Component life cycle`:
  1. `Render phase : constructor, render`
     -->React updates the DOM
  2. `Commit phase : componentDidMount`
- If there are 2 child class components inside of a parent Class component then the life cycle would be as follows-
  `Parent Constructor`
  `Parent Render`
  ----------------(React batches the render phase of 1st & 2nd child components)------------------
  `First Child Constructor`
  `First Child Render`
  `Second Child Constructor`
  `Second Child Render`
  ----------------(React batches the commit phase of 1st & 2nd child components)------------------
  <--DOM is updated-->
  `First Child componentDidMount`
  `Second Child componentDidMount`
  `Parent componentDidMount`
- `Constructor > Render > DOM Update > ComponentDidMount > ComponentDidUpdate > ComponentWillUnmount`

# Episode 09:

- We need to use Custom hooks for tasks distrubtion and make components handle individual tasks(Single Responsibility Principle).
- This improves modularity in code, maintainable and testable easily.
- `Lazy loading:` It's used to distribute the code in to different chunks.
- It is also known as Chunking, Code Splitting, Dynamic bundling, Ondemand loading, Dynamic import.

# Episode 10:

- Different ways to style UI in projects- SCSS & SaSS, Styled components, Bootstrap, Material UI, Chakra UI, Ant Design, Tailwind CSS etc..
- `Post CSS:` It is a tool for transforming CSS with javascript, Tailwind CSS inernally use Post CSS
- `tailwind.config.js` is configuration for tailwind CSS and .postcssrc is a configuration for Post CSS.
- `.postcssrc:` Parcel(our bundler) needs .postcssrc to read Tailwind
- .postcssrc is used to understand tailwind, its a kind of way that our projects understand whats inside Tailwind
- `Higher Order Component` : It takes in a component as an input, enhances it and returns a component

# Episode 11:

- `Context` : If we need some data to be accessed anywhere in our app, we hold that data inside a context and this context can be used anywhere in our app.
- Context is one of the way to resolve the problem of Props Drilling.
- `Syntax for Creating Context:` const UserContext = createContext({}), We hold data in curlybraces for making it accessible anywhere in the project.
- To use Context anywhere, we need a hook called as UseContext. Ex: const data = UseContext(UserContext)
- To use Context in a class based component we would use it within JSX which has a callback function
  <UserContext.Consumer>
  {(data) => (<h1>data<h1/>)}
  </UserContext.Consumer>

# Episode 12:

- `Redux store:` It's sort of a big JS Object kept in central global space.
- `Slice:` Part of Redux store, a small portion. To keep data separately, logical partitions are made which are called as Slices.
  Ex: User slice, Cart slice, Theme slice
- Add button is clicked > It will dispatch an action > which would call a function(Reducer) > function modifies the cart ie; modifies the slice
- `Selector:` Using a selector we can subscribe to the store, Selector will read the data from store and modify the react component.
- The above phenomenon is called as `subscribing to the store` (in sync with store)
- Installed @reduxjs/toolkit and react-redux
- `Creating Store:` To create our own store we use ConfigureStore which will be imported from @reduxjs/toolkit
- `Providing store:` To provide our store to the application we use Provider which will be imported from react-redux
- Provider will take a store as props for it. `Syntax:` <Provider store = {appStore}></Provider>
- `Creating Slice:` To create a slice we use CreateSlice which will be imported from @reduxjs/toolkit
- CreateSlice will take a config: name, initial state, reducer-Object which has actions(addItem, removeItem etc..)

* When using useSelector-make sure you are subscribing to the right portion of the store. {Impacts Performace}
* In older versions of Redux(Vanilla redux) : We shouldn't mutate the state directly, instead we need to have a copy of state and modify it as below:
  addItem: (state, action){
  const newState = [...state];
  newState.items.push(action.payload);
  return newState;
  }
* In newer version we have to mutate the state directly:
  addItem: (state, action){
  state.items.push(action.payload);
  }
* Redux still does the same older way of copying a state & modifying it internally but just developers don't have to do it explicitly.
* Redux uses "immer" library for finding the diff b/w original and mutated state and gives us back the new state ie; immutable state.
* The process of older way of not mutating the state is abstracted with the help of immer.
* In below action
  emptyCart(state, action) {
  state.items.length = 0; //will modify the original state
  state[]; //will not modify the original state
  return { items: [] }; //will empty [] will replace the original state
  },

# Episode 13:

- `Unit Testing`
- `Integration Testing`
- `End to End Testing (e2e Testing)`
- `React Test Library`- Standard library used to write test cases in react
- `Jest:` JavaScript testing framework
- React test library used Jest internally.
- Installed React Testing Library and Jest
- Installed depedencies to use babel along with Jest
- Configured Babel dependencies
- Now we already have Parcel in our project which internally uses Babel, since we again added babel.config.js file the babel inside parcel will conflict with the config we setup.
- To overcome this we need to configure our Parcel config to disable default Babel transpilation in Parcel.
- `Jest configuration:` npx jest --init; this will initialise jest and creates a new configuration file for jest.
- In the above process we need jsdom
- `Jsdom :` It is a JavaScript-based headless browser that can be used to create a realistic testing environment.
- It provides a environment to run the test cases.
- According to "https://testing-library.com/docs/react-testing-library/setup" If you're using Jest 28 or later, jest-environment-jsdom package now must be installed separately.
- Install JSdom library: npm install --save-dev jest-environment-jsdom
- `To run the test cases:` npm run test
- We need to create a folder **test** so that Jest will search for files with .js/.ts and they will be considered as test files
- It also searches for fileName.test.js or fileName.spec.js
- testMatch: **/**tests**/**/_.[jt]s?(x), \*\*/?(_.)+(spec|test).[tj]s?(x) - 0 matches (Above point explained this)
- `When testing a UI Component inside react you will have to render that component in to JSDOM first`
- Installed @babel/preset-react library to make JSX work in test cases
- Need to include @babel/preset-react inside babel config, @babel/preset-react helps testing library to convert jsx in to html code.
- Installed @testing-library/jest-dom
- `Syntax for test cases:`
- test("Describe the test case here",()=>{
  render(<ComponentName/>); //rendering to jsdom
  const heading = screen.getByRole("heading"); //Querying it in current screen
  expect(heading).toBeIntheDocument(); //Assertion
  (or)
  render(<Contact />);
  const headings = screen.getAllByRole("heading"); //Quering
  expect(headings.length).toBe(2); //Assertion
  headings.forEach((heading) => {
  expect(heading).toBeInTheDocument();
  });
  })
- We can use keyword "it" as well instead of "test" while writing tests
- `We can group the tests using "Describe"`
  Syntax: Describe("Provide description here", () => {
  test("", () => {})
  test("", () => {})
  });
