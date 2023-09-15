import { useEffect, useState } from "react";
import SingleCard from "../SingleCard/SingleCard";

const Cards = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("data.json");
        const data = await response.json();
        setCourses(data);
        console.log("Fetched data:", data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);
  return (
    <div className="md:col-span-2 lg:col-span-3">
      {courses.map((course) => (
        <SingleCard key={course.id} course={course} />
      ))}
    </div>
  );
};

export default Cards;
