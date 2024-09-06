import Item from "./Item";
import homeItems from "../Data/Homepage";
const ItemList = () => {
  return <div className="shop-section">
    {homeItems.map((item) => <Item key={item.id} item={item} />)}
  </div>
}

export default ItemList;