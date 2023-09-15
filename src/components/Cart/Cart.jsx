const Cart = ({ courseName, totalHour }) => {
  return (
    <div className="col-span-1 sticky top-0 ">
      <div className="bg-white divide-y divide-stone-200 p-5 rounded-md flex flex-col  justify-center">
        <h3 className="text-[#2F80ED] font-semibold  pb-2">
          Credit hour remaining 20 hr
        </h3>
        <div className="py-4">
          <h2 className="pb-3 text-lg font-semibold text-stone-800">
            Course Name
          </h2>
          <ol className="list-decimal ml-5">
            {courseName.map((name, i) => (
              <li
                key={i}
                className="text-sm mb-2 font-medium text-stone-400 tracking-wide"
              >
                {name}
              </li>
            ))}
          </ol>
        </div>

        <p className="py-2 font-medium text-stone-600 tracking-wider">
          Total Credit Hour:{totalHour}
        </p>
        <p className="pt-2 font-medium text-stone-600 tracking-wider">
          Total Price:
        </p>
      </div>
    </div>
  );
};

export default Cart;
