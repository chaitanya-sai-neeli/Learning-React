import ItemList from "./ItemList";

const RestaurantCategory = ({data}) => {
    // console.log(data);
    return(
        <div className = "w-6/12 mx-auto my-2 bg-gray-100 shadow-lg p-4 ">
            {/* Header */}
            <div className="flex justify-between">
                <span className="font-bold">{data.title.replace(/"/g, '')} ({data.itemCards.length})</span>
                <span>🔽</span>
            </div>
            
            {/* Body */}
            <div className="mt-2">
                <ItemList itemData = {data.itemCards}/>
            </div>
        </div>
    )
}

export default RestaurantCategory;