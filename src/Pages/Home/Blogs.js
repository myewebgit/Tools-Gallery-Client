import React from "react";

const Blogs =()=>{
    return (
        <div className="p-10">
		
        <h1 className="text-2xl text-blue-500 ">Question # 01. How will you improve the performance of a React Application?</h1>
<p className="text-xl text-aqua-500"> Answer:<br/>Internally, React uses several clever techniques to minimize the number of costly DOM operations required to update the UI. While this will lead to a faster user interface without specifically optimizing for performance for many cases, there are ways to speed up React application. This post will go over some useful techniques to improve React code.
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
        </div>
    );
};

export default Blogs;
