import { Link } from "react-router-dom";
import logo from "./SM_Logo-removebg-preview.png";
//Heading Component
const HeadingComp = (props) => {
  const { data } = props;
  // const { imgUrl } = data[0];
  return (
    <div className="bg-blue-200 flex justify-center flex-wrap shadow-lg">
      <div className="w-[1300px] flex flex-wrap justify-between items-center">

        <div>
          <Link to="/"><img className="w-[120px]" src={logo} alt="Logo"></img></Link>
        </div>

        <div>
          <span className="font-bold text-5xl text-blue-950 ml-[140px]">Swigmato</span>
        </div>

        <div>
          <ul className="flex flex-row flex-wrap">
            <li className="m-3 text-lg hover:text-blue-700">
              <Link to="/">Home</Link>
            </li>
            <li className="m-3 text-lg hover:text-blue-700">
              <Link to="/about">About</Link>
            </li>
            <li className="m-3 text-lg hover:text-blue-700">
              <Link to="/contact">Contact Us</Link>
            </li>
            <li className="m-3 text-lg hover:text-blue-700 cursor-pointer">Cart</li>
          </ul>
        </div>

      </div>
    </div>
  );
};

export default HeadingComp;
