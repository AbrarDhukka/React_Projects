import { useState, useEffect } from "react";

const useRestaurantMenu = (resId) => {

    const [resInfo, setResInfo] = useState(null);

    useEffect(() => {
        fetchMenu();
      },[]);
    
      const fetchMenu = async () => {
          const restdata = await fetch(
            "https://www.swiggy.com/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=19.0759837&lng=72.8776559&restaurantId="+resId+"&submitAction=ENTER");
          const json = await restdata?.json();
          console.log("JSON PRINTING..........", json);
          setResInfo(json?.data);   
      };
    
  return resInfo;
}

export default useRestaurantMenu