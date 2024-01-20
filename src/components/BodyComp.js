import CardComp, { withPromotedLabel } from "./CardComp";
import { resList, restData } from "../utilities/data";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import SubHead from "./SubHead";
import SubFooter from "./SubFooter";
import Footer from "./Footer";

//Body Component
const BodyComp = (props) => {
  const [listOfRest, setlistOfRest] = useState([]);
  const [filteredList, setFileteredList] = useState([]);
  const [clicked, setClicked] = useState(false);
  const [clicked1, setClicked1] = useState(false);
  const [clicked2, setClicked2] = useState(false);
  const [clicked3, setClicked3] = useState(false);
  const [inpText, setInputText] = useState("");

  const RestaurantCardPromoted = withPromotedLabel(CardComp);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      //const restdata= await fetch("https://www.swiggy.com/mapi/homepage/getCards?lat=19.0759837&lng=72.8776559")
      //const json=await restdata.json()
      //console.log("JSON PRINTING..........",json)
      setlistOfRest(
        restData[0]?.data?.success?.cards[3]?.gridWidget?.gridElements
          ?.infoWithStyle?.restaurants
      );
      setFileteredList(
        restData[0]?.data?.success?.cards[3]?.gridWidget.gridElements
          ?.infoWithStyle?.restaurants
      );
      console.log(restData[0].data);
      //console.log("JSON PRINTING..........",restData.data.success.cards[4].gridWidget.gridElements.infoWithStyle.restaurants)
    } catch (error) {
      console.error("An error occurred while fetching data:", error);
    }
  };

  const allRatedHandler = () => {
    setFileteredList(listOfRest);
    setClicked1(false);
    setClicked2(false);
    setClicked3(false);
    setClicked(!clicked);
  };

  const topRatedHandler = () => {
    const filtered = listOfRest.filter((res) => res.info.avgRating >= 4);
    setFileteredList(filtered);
    setClicked(false);
    setClicked2(false);
    setClicked3(false);
    setClicked1(!clicked1);
  };

  const mediumRatedHandler = () => {
    const filtered = listOfRest.filter(
      (res) => res.info.avgRating >= 3 && res.info.avgRating < 4
    );
    setFileteredList(filtered);
    setClicked(false);
    setClicked1(false);
    setClicked3(false);
    setClicked2(!clicked2);
  };

  const lowRatedHandler = () => {
    const filtered = listOfRest.filter(
      (res) => res.info.avgRating >= 2 && res.info.avgRating < 3
    );
    setFileteredList(filtered);
    setClicked(false);
    setClicked1(false);
    setClicked2(false);
    setClicked3(!clicked3);
  };

  const searchHandler = () => {
    if (inpText === "") {
      setFileteredList(
        restData[0]?.data?.success?.cards[3]?.gridWidget.gridElements
          ?.infoWithStyle?.restaurants
      );
    } else {
      setFileteredList(
        listOfRest.filter((res) => {
          return res.info.name.toLowerCase().includes(inpText.toLowerCase());
        })
      );
    }
  };
  useEffect(() => {
    searchHandler();
  }, [inpText]);

  const LightBtn = (props) => {
    return (
      <button
        className=" px-2 py-1 rounded-xl bg-sky-700 text-[16px] text-white m-6 hover:scale-105 transition duration-600 ease-out-in"
        onClick={props.handler}
      >
        {props.text}
      </button>
    );
  };
  const DarkBtn = (props) => {
    return (
      <button
        className="p-2 rounded-xl bg-sky-950 text-lg text-white m-7 hover:scale-90 transition duration-600 ease-out-in"
        onClick={props.handler}
      >
        {props.text}
      </button>
    );
  };

  return (
    <div className="flex justify-center bg-blue-100 w-[1700px]">
      <div className="w-[300px] flex flex-col justify-around items-center mt-[75px] 2xl:w-[1300px] xl:w-[1300px] lg:w-[900px] md:w-[800px] sm:w-[400px]">
        <SubHead></SubHead>

        <div>
          <div className="flex justify-around items-center">
            <div id="rated-btn">
              {clicked ? (
                <DarkBtn text="All Rated" handler={allRatedHandler}></DarkBtn>
              ) : (
                <LightBtn text="All Rated" handler={allRatedHandler}></LightBtn>
              )}
              {clicked1 ? (
                <DarkBtn text="4+ Rated" handler={topRatedHandler}></DarkBtn>
              ) : (
                <LightBtn text="4+ Rated" handler={topRatedHandler}></LightBtn>
              )}
              {clicked2 ? (
                <DarkBtn text="3+ Rated" handler={mediumRatedHandler}></DarkBtn>
              ) : (
                <LightBtn
                  text="3+ Rated"
                  handler={mediumRatedHandler}
                ></LightBtn>
              )}
              {clicked3 ? (
                <DarkBtn text="2+ Rated" handler={lowRatedHandler}></DarkBtn>
              ) : (
                <LightBtn text="2+ Rated" handler={lowRatedHandler}></LightBtn>
              )}
            </div>

            <div>
              <input
                className="focus:border-sky-500 bg-slate-100 border border-sky-400"
                type="text"
                value={inpText}
                onChange={(e) => {
                  setInputText(e.target.value);
                }}
              ></input>
              <button
                className="px-2 py-1 rounded-xl bg-sky-700 text-[16px] text-white m-6"
                onClick={searchHandler}
              >
                Search
              </button>
              {console.log("Input text ---", inpText)}
            </div>
          </div>

          <div className="flex flex-wrap justify-center items-center rounded-md mt-1 ">
            {filteredList.length === 0 ? (
              <div className="h-[500px] text-2xl flex flex-col justify-center items-center">
                <h2 className="m-5 -mt-20">No Item found</h2>
                <img src="https://cdn.iconscout.com/icon/premium/png-256-thumb/no-item-found-4372002-3633300.png?f=webp"></img>
              </div>
            ) : (
              filteredList.map((restaurant) => (
                <Link
                  id="card-cont-li"
                  to={"/restaurant/" + restaurant.info.id}
                  key={restaurant.info.id}
                >
                  {restaurant.info.promoted ? (
                    <div className="hover:scale-90 transition duration-700 ease-in-out">
                      <RestaurantCardPromoted
                        resData={restaurant}
                      ></RestaurantCardPromoted>
                    </div>
                  ) : (
                    <div className="hover:scale-90 transition duration-700 ease-in-out ">
                      <CardComp resData={restaurant}></CardComp>
                    </div>
                  )}
                </Link>
              ))
            )}
          </div>
        </div>

        <SubFooter></SubFooter>
      </div>
    </div>
  );
};

export default BodyComp;
