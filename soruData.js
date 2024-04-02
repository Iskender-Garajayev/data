const soruData = [
  {
    id: 1,
    num: 1,
    soru: "If you want to import just the Component from the React library, what syntax do you use?",
    a: "A. import React.Component from 'react'" ,
    b:"B. import [ Component ] from 'react'",
    c:"C. import React.Component from 'react'",
    d:"D. import { Component } from 'react'",

    cevap:"Answer: D"
  },
  {
    id: 2,
    num: 2,
    soru: "Given the following code, what does this React element look like?",
    soruOrnek:`React.createElement('h1', null, "What's happening?")`  ,
    a: "A. <h1 props={null}>What's happening?</h1>" ,
    b:"B. <h1>What's happening?</h1>",
    c:`C. <h1 id="component">What's happening?</h1>`,
    d:`D. <h1 id="element">What's happening?</h1>`,

    cevap:"Answer: B"
  },
  {
    id: 3,
    num: 3,
    soru: "When do you use useLayoutEffect?",
    // soruOrnek:`React.createElement('h1', null, "What's happening?")`  ,
    a: "A. <h1 props={null}>What's happening?</h1>" ,
    b:"B. <h1>What's happening?</h1>",
    c:`C. <h1 id="component">What's happening?</h1>`,
    d:`D. <h1 id="element">What's happening?</h1>`,

    cevap:"Answer: B"
  },
  {
    id: 4,
    num: 4,
    soru: "How do you destructure the properties that are sent to the Dish component?",
    soruOrnek:`function Dish(props) {
      return (
      <h1>
      {props.name} {props.cookingTime}
      </h1>
      );
     }`  ,
    a: "A. function Dish([name, cookingTime]) { return <h1>{name} {cookingTime}</h1>; }" ,
    b:"B. function Dish({name, cookingTime}) { return <h1>{name} {cookingTime}</h1>; }",
    c:`C. function Dish(props) { return <h1>{name} {cookingTime}</h1>; }`,
    d:`D. function Dish(...props) { return <h1>{name} {cookingTime}</h1>; }`,

    cevap:"Answer: B"
  },

  {
    id: 5,
    num: 5,
    soru: "Why is it important to avoid copying the values of props into a component's state where possible?",
    soruOrnek:``  ,
    a: "A. because you should never mutate state" ,
    b:"B. because getDerivedStateFromProps() is an unsafe method to use",
    c:`C. because you want to allow a component to update in response to changes in the props`,
    d:`D. because you want to allow data to flow back up to the parent`,

    cevap:"Answer: C"
  },
  {
    id: 6,
    num: 6,
    soru: "What is the children prop?",
    soruOrnek:``  ,
    a: "A. a property that adds child components to state" ,
    b:"B. a property that lets you set an array as a property",
    c:`C. a property that lets you pass data to child elements`,
    d:`D. a special property that JSX creates on components that contain both an opening tag and a closing tag, referencing it's contents.`,

    cevap:"Answer: D"
  },
  {
    id: 7,
    num: 7,
    soru: "Which library does the fetch() function come from?",
    soruOrnek:``  ,
    a: "A. FetchJS" ,
    b:"B. ReactDOM",
    c:`C. No library. fetch() is supported by most browsers.`,
    d:`D. React`,

    cevap:"Answer: C"
  },

  {
    id: 8,
    num: 8,
    soru: "What is Axios in the context of React.js?",
    soruOrnek:``  ,
    a: "A. A styling library" ,
    b:"B. A state management tool",
    c:`C. A JavaScript library for making HTTP requests`,
    d:`D. A routing library`,

    cevap:"Answer: C"
  },

  {
    id: 9,
    num: 9,
    soru: "How do you install Axios in a React project?",
    soruOrnek:``  ,
    a: "A. npm install react-axios" ,
    b:"B. npm install axios",
    c:`C. npm install react-http`,
    d:`D. npm install http-axios-react`,

    cevap:"Answer: B"
  },
  {
    id: 10,
    num: 10,
    soru: "A. Using the error method10. How do you handle errors in an Axios request?",
    soruOrnek:``  ,
    a: "A. Using the error method" ,
    b:"B. Using the fail method",
    c:`C. Using the handleError method`,
    d:`D. Using the catch method`,

    cevap:"Answer: D"
  },
  {
    id: 11,
    num: 11,
    soru: "How can you pass parameters in an Axios POST request in React?",
    soruOrnek:``  ,
    a: "A. Using the data property" ,
    b:"B. Using the params property",
    c:`C. Using the body property`,
    d:`D. Using the payload property`,

    cevap:"Answer: A"
  },
  {
    id: 12,
    num: 12,
    soru: "In React, what is a common approach to managing Axios requests in functional components?",
    soruOrnek:``  ,
    a: "A. Utilizing the useEffect hook" ,
    b:"B. Using the componentDidMount lifecycle method",
    c:`C. Embedding Axios calls directly in the component body`,
    d:`D. Creating a separate class for Axios requests`,

    cevap:"Answer: A"
  },
  {
    id: 13,
    num: 13,
    soru: "What is the primary advantage of using Axios over the traditional fetch API in React?",
    soruOrnek:``  ,
    a: "A. Axios provides a simpler syntax" ,
    b:"B. Axios is faster in making HTTP requests",
    c:`C. Axios has built-in support for interceptors and cancel tokens`,
    d:`D. Axios is the official HTTP library recommended by the React team`,

    cevap:"Answer: C"
  },
]

export default soruData