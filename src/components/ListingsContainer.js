import React from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({listData, onRemoveList}) {
  return (
    <main>
      <ul className="cards">
      {listData.map((list)=>(
      <ListingCard 
        key = {list.id}
        list={list}
        onRemoveList={onRemoveList}/>
      ))}
      </ul>
    </main>
  );
}

export default ListingsContainer;
