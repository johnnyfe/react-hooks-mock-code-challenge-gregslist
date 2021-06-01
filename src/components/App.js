import React, {useEffect, useState} from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {
  const [listData,setListData]=useState([]);
  const [search,setSearch]=useState("")

  useEffect(()=>{
    fetch("http://localhost:6001/listings")
    .then(r=>r.json())
    .then(data=>setListData(data))
  },[])

  const displayList= listData.filter((list)=>list.description.toLowerCase().includes(search.toLowerCase()));

  function deleteList(id) {
    const newList=listData.filter((list)=>list.id!==id)
    setListData(newList)
  }
  
  
  return (
    <div className="app">
      <Header onSearch={setSearch}/>
      <ListingsContainer listData={displayList} onRemoveList={deleteList}/>
    </div>
  );
}

export default App;
