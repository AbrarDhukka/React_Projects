import CardComp from "./CardComp";
import { resList, restData } from "../utilities/data";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

//Body Component
const BodyComp = (props) => {
  const [listOfRest, setlistOfRest] = useState([]);
  const [filteredList, setFileteredList] = useState([]);
  const [clicked, setClicked] = useState(false);
  const [clicked1, setClicked1] = useState(false);
  const [clicked2, setClicked2] = useState(false);
  const [clicked3, setClicked3] = useState(false);
  const [inpText, setInputText] = useState('');

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

    if (inpText === '') {
      setFileteredList(
        restData[0]?.data?.success?.cards[3]?.gridWidget.gridElements
          ?.infoWithStyle?.restaurants
      );
    } 
    else {
      setFileteredList(
        listOfRest.filter((res) => {
          return (res.info.name.toLowerCase().includes(inpText.toLowerCase()));
          
        })
      );
    }

    
  };
  useEffect(() => {
    searchHandler();
  }, [inpText]);
  


  const LightBtn = (props) => {
    return (
      <button id="rated-btn1" onClick={props.handler}>
        {props.text}
      </button>
    );
  };
  const DarkBtn = (props) => {
    return (
      <button id="rated-btn2" onClick={props.handler}>
        {props.text}
      </button>
    );
  };

  return (
    <div id="body">
      <div id="topSection">
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
            <LightBtn text="3+ Rated" handler={mediumRatedHandler}></LightBtn>
          )}
          {clicked3 ? (
            <DarkBtn text="2+ Rated" handler={lowRatedHandler}></DarkBtn>
          ) : (
            <LightBtn text="2+ Rated" handler={lowRatedHandler}></LightBtn>
          )}
        </div>

        <div id="searchBtn">
          <input
            id="searchbar"
            type="text"
            value={inpText}
            onChange={(e) => {
              setInputText(e.target.value);
            }}
          ></input>
          <button id="txtBtn" onClick={searchHandler}>
            Search
          </button>
          {console.log("Input text ---", inpText)}
        </div>
      </div>

      <div id="card-cont">
        {filteredList.map((restaurant) => (
          <Link
            id="card-cont-li"
            to={"/restaurant/" + restaurant.info.id}
            key={restaurant.info.id}
          >
            {" "}
            <CardComp resData={restaurant}></CardComp>{" "}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default BodyComp;
