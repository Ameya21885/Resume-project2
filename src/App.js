import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import One from "./components/About/One";
import Two from "./components/About/Two";

function App() {
  return (
    <div className="App">
      {/* <h1>hello</h1> */}
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="about" element={<About />}>
          <Route path="one" element={<One />} />
          <Route path="two" element={<Two />} />
        </Route>

        <Route path="contact" element={<Contact />} />
        <Route
          path="*"
          element={
            <main style={{ padding: "1rem" }}>
              <p>There's nothing here!</p>
            </main>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
