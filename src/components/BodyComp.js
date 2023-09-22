import CardComp from "./CardComp";
import { resList } from "../utilities/data";
import { useState } from "react";

//Body Component
const BodyComp = () => {
  const [listOfRest, setlistOfRest] = useState(resList);

  const topRatedHandler = () => {
    const filtered = listOfRest.filter((res) => res.info.avgRating > 4);
    setlistOfRest(filtered);
  };

  const mediumRatedHandler = () => { 
    const filtered = listOfRest.filter((res) => res.info.avgRating > 3 && res.info.avgRating < 4);
    setlistOfRest(filtered);
  };

  
  const lowRatedHandler = () => { 
    const filtered = listOfRest.filter((res) => res.info.avgRating > 2 && res.info.avgRating < 3);
    setlistOfRest(filtered);
  };

  return (
    <div id="body">
      <div id="rated-btn">
        <button id="rated-btn1" onClick={topRatedHandler}>
          Top rated
        </button>
        <button id="rated-btn1" onClick={mediumRatedHandler}>Medium rated</button>
        <button id="rated-btn1" onClick={lowRatedHandler}>Low rated</button>
      </div>
      <div id="card-cont">
        {listOfRest.map((restaurant) => (
          <CardComp resData={restaurant} key={restaurant.info.id}></CardComp>
        ))}
      </div>
    </div>
  );
};

export default BodyComp;
