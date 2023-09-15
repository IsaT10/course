import { useEffect, useState } from "react";
import SingleCard from "../SingleCard/SingleCard";

const Cards = ({ handleCart }) => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/data.json");
        const data = await response.json();
        setCourses(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);
  return (
    <div className="md:col-span-2 lg:col-span-3 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {courses.map((course) => (
        <SingleCard key={course.id} course={course} handleCart={handleCart} />
      ))}
    </div>
  );
};

export default Cards;
