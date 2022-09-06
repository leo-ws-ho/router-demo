import logo from "./logo.svg";
import React from "react";
import "./App.css";
import {
  BrowserRouter,
  Routes,
  Route,
  Outlet,
  Link,
  NavLink,
} from "react-router-dom";

// function Home() {
//   return (
//     <React.Fragment>
//       <div>
//         <h1>Hello World!</h1>
//         <p>This the the Home Page</p>
//       </div>
//     </React.Fragment>
//   );
// }

// function About() {
//   return (
//     <React.Fragment>
//       <div>
//         <h1>About Me!</h1>
//         <p>This the the About Page</p>
//       </div>
//     </React.Fragment>
//   );
// }

// function App() {
//   return (
//     <BrowserRouter>
//       <nav style={{ padding: "3px", borderBottom: "solid 1px" }}>
//         <NavLink
//           to="/"
//           style={({ isActive }) =>
//             isActive ? { backgroundColor: "green" } : undefined
//           }
//         >
//           Home
//         </NavLink>{" "}
//         |{" "}
//         <NavLink
//           to="/about"
//           style={({ isActive }) =>
//             isActive ? { backgroundColor: "green" } : undefined
//           }
//         >
//           About
//         </NavLink>
//       </nav>

//       <Routes>
//         <Route path="/about" element={<About />} />
//         <Route path="/" element={<Home />} />
//       </Routes>
//     </BrowserRouter>
//   );
// }

function Home() {
  return <h1>Home</h1>;
}

function About() {
  return (
    <div>
      <h1>About</h1>
      <Outlet />
    </div>
  );
}

function About1() {
  return <h1>Part 1</h1>;
}

function About2() {
  return <h1>Part 2</h1>;
}

function App() {
  return (
    <BrowserRouter>
      <nav>
        <NavLink
          to="/home"
          style={({ isActive }) => {
            if (isActive) return { backgroundColor: "lightgreen" };
          }}
        >
          Home
        </NavLink>{" "}
        |{" "}
        <NavLink
          to="/about"
          style={(obj) => {
            if (obj.isActive) return { backgroundColor: "lightgreen" };
          }}
        >
          About
        </NavLink>
      </nav>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/about" element={<About />}>
          <Route path="part1" element={<About1 />}></Route>
          <Route path="part2" element={<About2 />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
