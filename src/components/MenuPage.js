import React, { useState } from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { menu1 } from "../utilities/data";
import useRestaurantMenu from "../utilities/useRestaurantMenu";
import star from "./StartRating.png";
import MenuCategories from "./MenuCategories";

const MenuPage = () => {
  const [showIndex,setShowIndex]=useState(null)
  const { resId } = useParams();

  //custom hook
  const resInfo = useRestaurantMenu(resId);

  if (resInfo === null) {
    return <div>Loading!!..</div>;
  }

  const { name, cuisines, avgRating, areaName } =
    resInfo?.cards[0]?.card?.card?.info;

  const { itemCards } =
    resInfo?.cards[3]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

  console.log("itemcrad.....", itemCards);
  console.log(
    resInfo?.cards[3]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
      (c) =>
        c.card?.["card"]?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    )
  );
  const categories =
    resInfo?.cards[3]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
      (c) =>
        c.card?.["card"]?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  console.log(resInfo?.cards[3]?.groupedCard?.cardGroupMap?.REGULAR?.cards);

  return (
    <div className="w-[1300px] border border-solid border-black flex flex-col justify-between items-center mx-auto mt-16">
      <div className="w-[900px] border border-solid border-black">
        <div className="border border-red-200 flex justify-between items-center">
          <div>
            <p className="font-bold text-2xl">{name}</p>
            <p className="mt-2">{cuisines.join(",")}</p>
            <p>{areaName}</p>
          </div>

          <div>
            <img className="h-[17px] w-[29px] -ml-1" src={star}></img>
            <p>{avgRating}</p>
          </div>

          {/* <h2>{resInfo?.cards[0]?.card?.card?.info?.name}</h2>
          <p>{resInfo?.cards[0]?.card?.card?.info?.cuisines.join(", ")}</p>
          <p>{resInfo?.cards[0]?.card?.card?.info?.areaName}</p> */}
        </div>

        <div className="border border-blue-500 mt-12">
          <ul>
            {/* {itemCards?.map(item=> <li key={item?.card?.info?.id}>{item?.card?.info?.name}</li>)} */}
            {categories?.map((cat, index) => (
              <MenuCategories
                data={cat?.card?.card}
                key={cat?.card?.card.title}
                clicked={index===showIndex ?true:false}
                setShowIndex={()=>setShowIndex(index)}
                index={index}
              ></MenuCategories>
            ))}
          </ul>
        </div>
      </div>

      <div id="recomm-menu"></div>
    </div>
  );
};

export default MenuPage;
