import { useState } from "react";
import "./App.css";
import Cards from "./components/Cards/Cards";
import Cart from "./components/Cart/Cart";
import Header from "./components/Header/Header";

function App() {
  const [courseName, setCourseName] = useState([]);
  const handleCart = (course) => {
    console.log(course);
    const isExist = courseName.find((name) => name === course);
    console.log(isExist);
    if (isExist) {
      return alert("ar na");
    }
    setCourseName([...courseName, course]);
    console.log(courseName);
  };
  return (
    <div className="max-w-screen-xl mx-3 md:mx-auto">
      <Header />
      <main className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-4 gap-6 items-start">
        <Cards handleCart={handleCart} />
        <Cart />
      </main>
    </div>
  );
}

export default App;
