import React from "react"
import ReactDOM from "react-dom"
import SearchParams from "./SearchParams"

// const App = () => {
//   return React.createElement("div", {}, [
//     React.createElement("h1", {}, "Adopt-me"),
//     React.createElement(Pet, { name: "Luna", animal: "Dog", breed: "german" }),
//     React.createElement(Pet, {
//       name: "Jeremy",
//       animal: "Vampire",
//       breed: "Dumb",
//     }),
//     React.createElement(Pet, {
//       name: "Bonnie",
//       animal: "witchywitch",
//       breed: "Witch",
//     }),
//     // React.createElement(Pet),
//     // React.createElement(Pet)
//   ]);
// };

const App = () => {
  return(
<div>
   <h1>Adopt me !</h1>
   {/* <Pet name="Luna" animal="Dog" breed="german" />
   <Pet name="Jeremy" animal="Dog" breed="dumb" />
   <Pet name="Bonnie" animal="witchywitch" breed="witch" /> */}
    <SearchParams/>
 </div>

  )
 

}

ReactDOM.render(<App/> , document.getElementById("root"));
