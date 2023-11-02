import { Link } from "react-router-dom";
import logo from "./SM_Logo-removebg-preview.png";
import { useContext, useState } from "react";
import { userContext } from "../utilities/userContext";
import { useSelector } from "react-redux";


//Heading Component
const HeadingComp = (props) => {
  
  const { data } = props;
  // const { imgUrl } = data[0];
  const user =useContext(userContext)
  const [clicked, setClicked]=useState(false);

  const menuHandler=()=>{
    setClicked(!clicked)
  };

  const cart=useSelector((store) => store.cart.items)
  return (
    <div className="bg-blue-200 h-[75px] flex justify-center flex-wrap shadow-lg fixed top-0 w-full z-50">
      <div className=" w-[450px] sm:w-[1300px] md:w-[1700px] xl:w-[1300px] flex flex-wrap justify-between items-center">

        <div>
          <Link to="/"><img className="w-[70px] sm:w-[90px]" src={logo} alt="Logo"></img></Link>
        </div>

        <div>
          <span className="font-bold text-xl sm:text-3xl md:text-3xl xl:text-5xl 2xl:text-5xl text-blue-950 xl:ml-[140px]">Swigmato</span>
        </div>

        <div className="hidden sm:block">
          <ul className="flex flex-row flex-wrap">
          {/* <li className="m-3 text-lg font-bold hover:text-blue-700">
              <Link to="/">UserName : {user}</Link>
            </li> */}
            <li className="m-3 text-xs sm:text-sm md:text-base xl:text-lg hover:text-blue-700">
              <Link to="/">🏠 Home</Link>
            </li>
            <li className="m-3 text-xs sm:text-sm md:text-base xl:text-lg hover:text-blue-700">
              <Link to="/about">ℹ️ About</Link>
            </li>
            <li className="m-3 text-xs sm:text-sm md:text-base xl:text-lg hover:text-blue-700">
              <Link to="/contact">☏ Contact Us</Link>
            </li>
            <li className="m-3 text-xs sm:text-sm md:text-base xl:text-lg hover:text-blue-700 cursor-pointer flex ">
            <div className="flex text-xs sm:text-sm md:text-base xl:text-lg justify-center items-center ">
              <Link to="/cart">🛒 Cart  </Link>
              <span className="bg-sky-700 text-xs sm:text-sm md:text-base xl:text-lg ml-2 w-5 h-5 flex 
                    justify-center items-center animate-bounce rounded-full text-white" 
                    >{cart.length}</span>
                    </div>
            </li>
          </ul>
        </div>

        <span className="block sm:hidden md:hidden xl:hidden 2xl:hidden lg:hidden">
          <button onClick={menuHandler}>☰</button>

          {clicked===true ? 
          
          <ul className="flex flex-wrap flex-shrink">
          {/* <li className="m-3 text-lg font-bold hover:text-blue-700">
              <Link to="/">UserName : {user}</Link>
            </li> */}
            <li className="m-2 text-xs sm:text-sm md:text-base xl:text-lg hover:text-blue-700">
              <Link to="/">🏠 Home</Link>
            </li>
            <li className="m-2 text-xs sm:text-sm md:text-base xl:text-lg hover:text-blue-700">
              <Link to="/about">ℹ️ About</Link>
            </li>
            <li className="m-2 text-xs sm:text-sm md:text-base xl:text-lg hover:text-blue-700">
              <Link to="/contact">☏ Contact Us</Link>
            </li>
            <li className="m-1 text-xs sm:text-sm md:text-base xl:text-lg hover:text-blue-700 cursor-pointer flex ">
            <div className="flex text-xs sm:text-sm md:text-base xl:text-lg justify-center items-center ">
              <Link to="/cart">🛒 Cart  </Link>
              <span className="bg-sky-700 text-xs sm:text-sm md:text-base xl:text-lg ml-2 w-5 h-5 flex 
                    justify-center items-center animate-bounce rounded-full text-white" 
                    >{cart.length}</span>
                    </div>
            </li>
          </ul>:<div></div>}
        </span>

      </div>
    </div>
  );
};

export default HeadingComp;
