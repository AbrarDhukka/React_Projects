import React, { useContext } from "react";
import { useDispatch } from "react-redux";
import { addItems } from "../utilities/Redux/cartSlice";
import { useLocation } from "react-router-dom";
import HeadingComp from "./HeadingComp";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SubCategory = ({ catdata }) => {
  console.log("cat data............", catdata);
  const dispatch = useDispatch();
  const notify = () => toast("Added to Cart 🛒");

  const addHandler = (cat) => {
    dispatch(addItems(cat));
    notify();
  };

  let loc = useLocation();

  return (
    <div>
      {catdata.map((cat) => (
        <div
          key={cat?.card?.info?.id}
          className="border shadow-md flex justify-between bg-sky-50 m-5 "
        >
          <div className="w-10/12   ml-4 h-auto">
            <div className="mt-4">
              <span className="text-sky-950 font-bold text-lg">
                {cat?.card?.info?.name}
              </span>
            </div>
            <div className="mt-1">
              <span>
                {cat?.card?.info?.price / 100 ||
                  cat?.card?.info?.defaultPrice / 100}{" "}
                Rs/-
              </span>
            </div>
            <div className="mt-5 w-[580px] overflow-hidden text-ellipsis whitespace-wrap">
              <span className="text-sky-800">
                {cat?.card?.info?.description}
              </span>
            </div>
          </div>

          <div className="shadow-sm w-2/12 h-3/12 m-4">
            <img
              className="h-[100%] shadow-xl "
              src={
                "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/" +
                cat?.card?.info?.imageId
              }
            ></img>

            <button
              onClick={() => addHandler(cat)}
              className="absolute ml-10 shadow-lg -mt-6 px-2 py-1 rounded-lg bg-sky-700 text-[16px] text-white m-6 hover:scale-105 transition duration-600 ease-out-in"
            >
              ADD +
            </button>
            <ToastContainer
              position="top-center"
              autoClose={2000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="light"
            ></ToastContainer>

            <div></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SubCategory;
