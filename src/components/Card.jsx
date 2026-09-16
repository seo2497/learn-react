import React from "react";

const Card = ({ imgUrl, itemName, onButtonClicks }) => {
  return (
    <div className="card">
      <img src={imgUrl} alt={itemName} />
      <p>{itemName}</p>
      <button type="button" onClick={()=>onButtonClicks(itemName)}>제품 페이지로 바로가기</button>
    </div>
  );
}

export default Card;
