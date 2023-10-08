import star from "./StartRating.png";

//Restaurant Card Components
const CardComp = (props) => {
    const { resData } = props;
    const { name, avgRating, cuisines, costForTwo, cloudinaryImageId } =
      resData?.info;
      const {deliveryTime} = resData?.info?.sla;
  
    return (
      <div id="rest-card-container">
        <div className="m-3 p-[10px] w-[275px] bg-slate-100 drop-shadow-sm h-[370px] leading-5 rounded-[10px] ">
          <img className="w-[300px] h-[190px] rounded-xl"
            src={
              "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
              cloudinaryImageId
            }
            alt="food image"
          ></img>
          <h2 className="font-bold text-lg mt-2 w-[265px] overflow-hidden text-ellipsis whitespace-nowrap">{name}</h2>
          
          <div className="flex justify-start items-center mb-3">
          <h3 className="font-semibold">{avgRating}</h3>
          <img className="h-[17px] w-[29px] -ml-1" src={star}></img>
          </div>

          <h3 className="w-[260px] overflow-hidden text-ellipsis whitespace-nowrap">{cuisines.join(", ")}</h3>
          <h3 className="mt-1">{costForTwo}</h3>
          <h3 className="font-semibold mt-3">{deliveryTime} Minutes</h3>
        </div>
      </div>
    );
  };


export const withPromotedLabel =(CardComp)=>{
  return (props) => {
    return(
      <div>
        <label className="p-[6px] absolute rounded-xl bg-slate-500 text-white z-10 ">Promoted</label>
        <CardComp {...props}></CardComp>
      </div>
    );
  };
};

  export default CardComp