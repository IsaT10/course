const Cart = ({ totalHour, remainingTotalHour, totalPrice, courses }) => {
  return (
    <div className="col-span-1 sticky top-0 ">
      <div className="bg-white divide-y divide-stone-200 p-5 rounded-md flex flex-col  justify-center">
        <h3 className="text-[#2F80ED] font-semibold  pb-2">
          Credit hour remaining {remainingTotalHour} hr
        </h3>
        <div className="py-4">
          <h2 className="pb-3 text-lg font-semibold text-stone-800">
            Course Name
          </h2>
          {courses.length ? (
            <ol className="list-decimal ml-5">
              {courses.map((course, i) => (
                <li
                  key={i}
                  className="text-sm mb-2 font-medium text-stone-400 tracking-wide"
                >
                  {course.title}
                </li>
              ))}
            </ol>
          ) : (
            <p className="text-sm mb-2 font-medium text-stone-400 tracking-wide">
              Plaese select courses
            </p>
          )}
        </div>

        <p className="py-2 font-medium text-stone-600 tracking-wide">
          Total Credit Hour: {totalHour}
        </p>
        <p className="pt-2 font-medium text-stone-600 tracking-wide">
          Total Price: {totalPrice} $
        </p>
      </div>
    </div>
  );
};

export default Cart;
