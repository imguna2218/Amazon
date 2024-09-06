import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Item = ({ item }) => {
  const navigate = useNavigate();
  return (
    <div className="box1 box">
      <div className="box-content">
        <h2>{item.itemName}</h2>
        <div
          className="img"
          style={{
            backgroundImage: `url(${item.imgLink})`,
          }}
        ></div>
        <p
          onClick={() => {
            navigate(`${item.apiName}`)
          }}
          className="see-more">See more</p>
      </div>
    </div >
  );
};

export default Item;
