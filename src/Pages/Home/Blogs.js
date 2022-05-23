import React from "react";

const Blogs =()=>{
    return (
        <div className="p-10">
		
        <h1 className="text-2xl text-blue-500 ">Question # 01. How will you improve the performance of a React Application?</h1>
<p className="text-xl text-aqua-500 mb-10"> Answer:<br/>Internally, React uses several clever techniques to minimize the number of costly DOM operations required to update the UI. While this will lead to a faster user interface without specifically optimizing for performance for many cases, there are ways to speed up React application. This post will go over some useful techniques to improve React code.
<ul>
    <li>1. Using Immutable Data Structures</li>
    <li>2. Function/Stateless Components and React Pure Component</li>
    <li>3. Multiple Chunk Files</li>
    <li>4. Using Production Mode Flag in Webpack</li>
    <li>5. Dependency optimization</li>
    <li>6. Use React.Fragments to Avoid Additional HTML Element Wrappers</li>
    <li>7. Avoid Inline Function Definition in the Render Function.</li>
    <li>8. Throttling and Debouncing Event Action in JavaScript</li>
    <li>9. Avoid using Index as Key for map</li>
    <li>10. Avoiding Props in Initial States</li>
    <li>11. Spreading props on DOM elements</li>
    <li>12. Use Reselect in Redux to Avoid Frequent Re-render</li>
    <li>13. Avoid Async Initialization in component Will Mount()</li>
    <li>14. Memoize React Components</li>
    <li>15. CSS Animations Instead of JS Animations</li>
    <li>16. Using a CDN</li>
    <li>17. Using Web Workers for CPU Extensive Tasks</li>
    <li>18. Virtualize Long Lists</li>
    <li>19. Analyzing and Optimizing Your Webpack Bundle Bloat</li>
    <li>20. Consider Server-side Rendering</li>
    <li>21. Enable Gzip Compression on Web Server</li>
    </ul>
There are many ways to optimize a React app, for example lazy loading components, using Service Workers to cache application state, considering SSR, avoiding unnecessary renders etc.. That said, before considering optimization, it’s worth understanding  how React components work, understanding diffing algorithms, and how rendering works in React. These are all important concepts to take into consideration when optimizing your application.

</p>

<h1 className="text-2xl text-blue-500 ">Question # 02 What are the different ways to manage a state in a React application?</h1>
<p className="text-xl text-aqua-500 mb-10"> Answer:<br/>Kinds of React State to Manage
There are four main types of state we need to properly manage in our React apps:<br/>
Local state<br/>
Global state<br/>
Server state<br/>
URL state<br/>
Local (UI) state – Local state is data we manage in one or another component.
Local state is most often managed in React using the useState hook.
For example, local state would be needed to show or hide a modal component or to track values for a form component, such as form submission, when the form is disabled and the values of a form’s inputs.<br/>
Global (UI) state – Global state is data we manage across multiple components.
Global state is necessary when we want to get and update data anywhere in our app, or in multiple components at least.<br/>
Server state – Data that comes from an external server must be integrated with our UI state. Server state is a simple concept, but can be hard to manage alongside all of our local and global UI state. There are several pieces of state that must be managed every time you fetch or update data from an external server, including loading and error state. Fortunately there are tools such as SWR and React Query that make managing server state much easier.<br/>

URL state – Data that exists on our URLs including the pathname and query parameters.
URL state is often missing as a category of state, but it is an important one.
There are undoubtedly more pieces of state that we could identify, but these are the major categories worth focusing on for most applications we build.
 </p>
 <h1 className="text-2xl text-blue-500 ">Question # 03. How does prototypical inheritance work?</h1>
<p className="text-xl text-aqua-500 mb-10"> Answer:<br/>

Every object with its methods and properties contains an internal and hidden property known as [[Prototype]]. The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the [[Prototype]] of an object, we use Object.getPrototypeOf and Object.setPrototypeOf. Nowadays, in modern language, it is being set using __proto__.

</p>
<h1 className="text-2xl text-blue-500 ">Question # 04.What is a unit test? Why should write unit tests?</h1>
<p className="text-xl text-aqua-500 mb-10"> Answer:<br/>

Unit Test:<br/>
A unit test verifies the behavior of a unit of software in the system. It verifies whether a small and isolated piece of the codebase called “unit” behaves as the developer intended.<br/>
Unit tests verify the smallest parts or components of an application by comparing their actual behavior with the expected behavior in complete isolation. Here, “complete isolation” means that, during unit testing, devs do not connect the application with external dependencies such as databases, the filesystem, or HTTP services. This allows unit tests to be fast and stable since they won’t fail due to problems integrating with those external services.<br/>
Why Write Unit Tests:<br/>
Usually, developers write unit tests first, then write the software code. This approach is known as test-driven development (TDD). In TDD, the requirements are turned into specific test cases, then the software is improved to pass the new tests. In the case of unit tests, it allows for the modification of code without affecting the functionality of other units or the software in its entirety. This makes the job easier for developers as the bugs are easy to locate at this stage, which saves time and money.<br/>
Also, within unit test environments, the individual modules of a product become isolated from one another and have their own area of responsibility. In this scenario, tests are more reliable because they are run in a contained environment. The code too, because of said reliability, becomes reliable.
</p>
        </div>
    );
};

export default Blogs;
