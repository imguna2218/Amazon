const MakeItem = ({ item }) => {
  return (
    <div className="cartItem">
      <div className="buyItemimage" style={{ backgroundImage: `url(${item.itemImage})` }}></div>
      <div className="buycontent">
        <h3 className="itemName">{item.itemName}</h3>
        <p className="itemContent">{item.itemContent}</p>
        <div className="itemRating">{item.rating}</div>
        <div className="itemprice">
          <h3 className="itemName">Rs. {item.itemPrice}</h3>
          <h6>M.R.P</h6>
        </div>
      </div>
    </div>
  );
}

export default MakeItem;
