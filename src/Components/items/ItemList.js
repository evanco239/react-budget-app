import React from "react";
import ItemSummary from "./ItemSummary";

const ItemList = ({items}) => {

  const outputList = items && items.map(item => {
    return <ItemSummary item={item} key={item.id}/>
  })

  return (
    <div className="item-list section">
      {outputList}
    </div>
  );
};

export default ItemList;
