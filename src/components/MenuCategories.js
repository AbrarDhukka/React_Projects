import React, { useState } from "react";
import SubCategory from "./SubCategory";

const MenuCategories = ({ data, clicked, setShowIndex, index }) => {
   const [secondClicked, setSecondClicked]=useState()
  const subcat = data?.itemCards;
  console.log("Sub cat....", subcat);
  return (
    <div>
      <div className="my-4 bg-sky-100 shadow-lg p-4 ">
        <div
          className="flex justify-between hover:cursor-pointer"
          onClick={() => {
            setShowIndex()
          }}
        >
          <span className="font-bold text-lg">
            {data.title} ({data.itemCards.length})
          </span>
          <span>{clicked ? "⬆️" : "⬇️"}</span>
        </div>
      </div>

      <div>
        {/* {subcat.map((cat)=><SubCategory catdata={subcat}></SubCategory>)} */}
        {clicked ? <SubCategory catdata={subcat}></SubCategory> : <div></div>}
      </div>
    </div>
  );
};

export default MenuCategories;
