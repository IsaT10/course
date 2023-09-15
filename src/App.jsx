import { useState } from "react";
import "./App.css";
import Cards from "./components/Cards/Cards";
import Cart from "./components/Cart/Cart";
import Header from "./components/Header/Header";

function App() {
  const [courseName, setCourseName] = useState([]);
  const [courses, setCourses] = useState([]);
  const [totalHour, setTotalHour] = useState(0);

  const handleCart = (course) => {
    setCourses([...courses, course]);

    let hour = course.hours;

    const isExist = courseName.find((name) => name === course.title);
    if (isExist) {
      return alert("ar na");
    }
    setCourseName([...courseName, course.title]);

    const sumHours = courses.reduce(
      (accumulator, course) => accumulator + course.hours,
      hour
    );

    setTotalHour(sumHours);
  };
  console.log(courses);

  console.log(totalHour);

  console.log(courseName);
  console.log(totalHour);
  return (
    <div className="max-w-screen-xl mx-3 md:mx-auto">
      <Header />
      <main className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-4 gap-6 items-start">
        <Cards handleCart={handleCart} />
        <Cart courseName={courseName} totalHour={totalHour} />
      </main>
    </div>
  );
}

export default App;
