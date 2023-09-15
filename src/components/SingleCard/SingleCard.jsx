import { HiOutlineBookOpen } from "react-icons/hi2";
import { FiDollarSign } from "react-icons/fi";

const SingleCard = ({ course, handleCart }) => {
  const { cover_photo, title, hours, description, price } = course;

  return (
    <div className="bg-white flex flex-col gap-4 justify-between p-3 rounded-md">
      {" "}
      <img src={cover_photo} alt="" />
      <h2 className="text-lg font-semibold ">{title}</h2>
      <p className="leading-5 text-stone-400 -my-1.5 tracking-wide">
        {description}
      </p>
      <div className="flex justify-between items-center text-stone-500 ">
        <div className="flex items-center">
          <FiDollarSign className=" text-xl text-stone-600 mr-1" />{" "}
          <p>Price: {price}</p>
        </div>
        <div className="flex items-center">
          <HiOutlineBookOpen className=" mr-2 text-xl text-stone-600" />
          <p>Credit : {hours}hrs</p>
        </div>
      </div>
      <button
        onClick={() => handleCart(course)}
        className="bg-[#2F80ED] py-2 rounded-md text-white font-semibold"
      >
        Select
      </button>
    </div>
  );
};

export default SingleCard;
