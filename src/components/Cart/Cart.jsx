const Cart = () => {
  return (
    <div className="col-span-1 sticky top-0 ">
      <div className="bg-white divide-y divide-stone-200 p-5 rounded-md flex flex-col  justify-center">
        <h3 className="text-[#2F80ED] font-semibold  pb-2">
          Credit hour remaining 20 hr{" "}
        </h3>
        <h2 className="py-4 text-lg font-semibold text-stone-800">
          Course Name
        </h2>
        <p className="py-2 text-sm font-medium text-stone-500 tracking-wider">
          Total Credit Hour:
        </p>
        <p className="pt-2 text-sm font-medium text-stone-500 tracking-wider">
          Total Price:
        </p>
      </div>
    </div>
  );
};

export default Cart;
