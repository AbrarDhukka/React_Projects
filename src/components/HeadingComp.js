import { Link } from "react-router-dom";

//Heading Component
const HeadingComp = (props) => {
    const { data } = props;
    const { imgUrl } = data[0];
    return (
      <div id="heading">
        <div>
          <img src={imgUrl} alt="logo"></img>
        </div>
        <div>
          <h1 id="headtext">Swigmato</h1>
        </div>
        <div id="navlinks">
          <ul id="navlinks-text">
           <li><Link to="/">Home</Link></li>
           <li><Link to="/about">About</Link></li>
           <li><Link to="/contact">Contact Us</Link></li>
           <li>Cart</li>
          </ul>
        </div>
      </div>
    );
  };

  export default HeadingComp