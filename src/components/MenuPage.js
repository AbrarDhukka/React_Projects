import React, { useState } from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { menu1 } from "../utilities/data";
import useRestaurantMenu from "../utilities/useRestaurantMenu";

const MenuPage = () => {

  const { resId } = useParams();

  //custom hook
  const resInfo=useRestaurantMenu(resId);

  if(resInfo === null) {
    return (<div>
    Loading!!..
    </div>)
  }

  const {name,cuisines,avgRating,areaName}=resInfo?.cards[0]?.card?.card?.info ;

  const {itemCards}= resInfo?.cards[3]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
  
  

  return (
    <div id="menu">
      <div id="menu-sec1">
        <div>

        <h2>{name}</h2>
          <p>{cuisines.join(",")}</p>
          <p>{areaName}</p>

          {/* <h2>{resInfo?.cards[0]?.card?.card?.info?.name}</h2>
          <p>{resInfo?.cards[0]?.card?.card?.info?.cuisines.join(", ")}</p>
          <p>{resInfo?.cards[0]?.card?.card?.info?.areaName}</p> */}
        </div>

        <div>
          <ul>
            {itemCards.map(item=> <li key={item?.card?.info?.id}>{item?.card?.info?.name}</li>)}
          </ul>
        </div>

        <div>
          <p>{resInfo?.cards[0]?.card?.card?.info?.avgRating} Ratings</p>
        </div>
      </div>

      <div id="recomm-menu"></div>
    </div>
  );
};

export default MenuPage;
