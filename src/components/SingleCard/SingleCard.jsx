const SingleCard = ({ course }) => {
  const { id, cover_photo, title, hours, description, price } = course;
  return (
    <div className="bg-white ">
      {" "}
      <img src={cover_photo} alt="" />
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
};

export default SingleCard;
