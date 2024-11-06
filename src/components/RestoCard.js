const RestoCard = (props) => { 
    const {restData} = props;
    const {restImageUrl, restName, restCuisine, delvTime, restRating} = restData || {};
    return (
        <div className = "foodCard">
            <img className = "foodImage" src={restImageUrl}></img>
            <h3>{restName}</h3>
            <h4>{restCuisine}</h4>
            <div className = "timeAndRating">
                <p>{delvTime}</p>
                <p style ={{backgroundColor: "red", borderRadius: "5px", backgroundColor:"#267E3E", color: "white"}}>{restRating}</p>
            </div>
        </div>
    );
}

export default RestoCard;