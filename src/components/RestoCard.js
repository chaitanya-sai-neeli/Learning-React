const RestoCard = (props) => {
  const { restData } = props;
  const { restImageUrl, restName, restCuisine, delvTime, restRating } =
    restData || {};
  return (
    <div className="foodCard hover:bg-[#f0f0f0] hover:shadow-[1px_1px_5px_grey] hover:border hover:border-[#808080] h-64 w-60 p-1.5 mt-2.5 my-3.5 ml-6 rounded-2xl ">
      <img
        className="foodImage h-[65%] w-full rounded-2xl"
        src={restImageUrl}
      ></img>
      <h3 className="font-bold py-2">{restName}</h3>
      <h4>{restCuisine}</h4>
      <div className="timeAndRating flex justify-between ">
        <p className="italic">{delvTime}</p>
        <p
          style={{
            backgroundColor: "red",
            borderRadius: "5px",
            backgroundColor: "#267E3E",
            color: "white",
          }}
        >
          {restRating}
        </p>
      </div>
    </div>
  );
};

//Higher Order Component
export const WithPromotedLabel = (RestoCard) => {
  return (props) => {
    return (
      <div>
        <label className=" absolute bg-[#242420] text-white rounded-lg m-2 p-1 ">
          Promoted
        </label>
        <RestoCard {...props} />
      </div>
    );
  };
};

export default RestoCard;
