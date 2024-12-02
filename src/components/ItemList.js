import { ITEM_URL } from "../utils/constants";

const ItemList  = ({itemData}) => {
    console.log("itemData=" , itemData)
    return(
        <div>
            {itemData.map((item)=>(
                <div key={item.card.info.id} className="m-2 p-2 border-gray-300 border-b-2 flex justify-between">
                    <div>
                        <div className="text-left font-semibold">
                            <span>{item.card.info.name}</span>
                            <span>{" "}- ₹{" "} {item.card.info.price ? Math.floor((item.card.info.price)/100) : Math.floor((item.card.info.defaultPrice)/100)}</span>
                        </div>
                        <p className="text-left text-xs mt-6">{item.card.info.description}</p>
                    </div>
                    {item.card.info.imageId && (
                        <img src={ITEM_URL + item.card.info.imageId} className="h-32 w-40 rounded-lg" alt="Item" />
                    )}
                </div>
            ))}
        </div>
    )
}

export default ItemList;