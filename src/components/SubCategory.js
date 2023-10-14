import React from "react";

const SubCategory = ({ catdata }) => {
  console.log("cat data............",catdata)
  return (
    <div>
      {catdata.map((cat) => (
        <div key={cat?.card?.info?.id} className="border border-red-400 flex justify-between bg-sky-50 m-5">
        <div className="w-9/12">
          <div>
            <span>{cat?.card?.info?.name}</span>
          </div>
          <div>
            <span>{cat?.card?.info?.price / 100}</span>
          </div>
          <div>
            <span>{cat?.card?.info?.description}</span>
          </div>

          </div>


          <div className="w-3/12">
            <img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/"+cat?.card?.info?.imageId}></img>
          </div>

        </div>
      ))}
    </div>
  );
};

export default SubCategory;
