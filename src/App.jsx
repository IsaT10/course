import { useState } from "react";
import "./App.css";
import Cards from "./components/Cards/Cards";
import Cart from "./components/Cart/Cart";
import Header from "./components/Header/Header";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [courses, setCourses] = useState([]);
  const [totalHour, setTotalHour] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const [remainingTotalHour, setRemainingTotalHour] = useState(20);

  const handleCart = (course) => {
    let hour = course.hours;
    let price = course.price;
    const isExist = courses.find((c) => c.title === course.title);
    if (isExist) {
      return toast.error("Already exist", {
        position: "top-right",
        autoClose: 400,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }
    const sumHours = courses.reduce(
      (accumulator, course) => accumulator + course.hours,
      hour
    );
    console.log(sumHours);

    if (sumHours > 20) {
      return toast.error(
        `${
          remainingTotalHour > 0
            ? `You have only ${remainingTotalHour} credit ${
                remainingTotalHour > 1 ? "hours" : "hour"
              }`
            : "There are no more credit hours"
        }`,
        {
          position: "top-right",
          autoClose: 400,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
          progress: undefined,
          theme: "dark",
        }
      );
    }

    const sumprice = courses.reduce(
      (accumulator, course) => accumulator + course.price,
      price
    );
    setTotalPrice(sumprice);
    setCourses([...courses, course]);
    setTotalHour(sumHours);

    const remainingHour = 20 - sumHours;
    setRemainingTotalHour(remainingHour);
  };
  return (
    <div className="max-w-screen-xl mx-3 md:mx-auto">
      <Header />
      <main className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-4 gap-6 items-start">
        <Cards handleCart={handleCart} />
        <Cart
          totalHour={totalHour}
          remainingTotalHour={remainingTotalHour}
          totalPrice={totalPrice}
          courses={courses}
        />
      </main>
    </div>
  );
}

export default App;
