// How to write Hello world in javascript

// const heading = document.createElement("hi");
// heading.innerHTML = "Hello world"

// const root = document.getElementById("root")
// root.appendChild(heading)

//---------------------------------------------------------------

// How to write Hello world in React

// const heading = React.createElement("h1", {id : "heading"}, "hello world");                             //Name of the tag, attributes,children                 

//  console.log(heading) // It return object

// const root = ReactDOM.createRoot(document.getElementById("root"))

// root.render(heading)

//------------------------------------

// How to create nested elements in javascript

/*
 <div id="parent">
 <div id="child">
 <h1>I'm an h1 tag</h1>
  <h2>I'm an h2 tag</h2>
 </div> 
 </div>
 */

//------------------------------------

// How to create nested elements in React

// const parent = React.createElement(
//   "div",
//   { id: "parent" },
//     React.createElement("div", { id: "child" }, [
//     React.createElement("h1", {}, "I'm an h1 tag"),
//     React.createElement("h2", {}, "I'm an h2 tag"),
//   ])
// );

// console.log(parent); // It return object

// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(parent);

//------------------------------------

// How to create two child elements in javascript

/*
 <div id="parent">
 <div id="child1">
 <h1>I'm an h1 tag</h1>
  <h2>I'm an h2 tag</h2>
 </div> 

  <div id="child2">
 <h1>I'm an h1 tag</h1>
  <h2>I'm an h2 tag</h2>
 </div> 
 </div>
 */

//------------------------------------

// How to create two child elements in React

// const parent = React.createElement("div",{ id: "parent" },[
//         React.createElement("div", { id: "child" }, [
//         React.createElement("h1", {}, "I'm an h1 tag"),
//         React.createElement("h2", {}, "I'm an h2 tag"),
//       ]),
//       React.createElement("div", { id: "child" }, [
//         React.createElement("h1", {}, "I'm an h1 tag"),
//         React.createElement("h2", {}, "I'm an h2 tag"),
//       ])
//     ]);
  
//   console.log(parent); // It return object
  
//   const root = ReactDOM.createRoot(document.getElementById("root"));
  
//   root.render(parent);
  
