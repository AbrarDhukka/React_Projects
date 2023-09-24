import CardComp from "./CardComp";
import { resList } from "../utilities/data";
import { useEffect, useState } from "react";

//Body Component
const BodyComp = (props) => {
  const [listOfRest, setlistOfRest] = useState([]);
  const [filteredList, setFileteredList] = useState([]);
  const [clicked, setClicked] = useState(false);
  const [clicked1, setClicked1] = useState(false);
  const [clicked2, setClicked2] = useState(false);
  const [clicked3, setClicked3] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      setlistOfRest(resList);
      setFileteredList(resList);
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
      <div id="card-cont">
        {filteredList.map((restaurant) => (
          <CardComp resData={restaurant} key={restaurant.info.id}></CardComp>
        ))}
      </div>
    </div>
  );
};

export default BodyComp;
