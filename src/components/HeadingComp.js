//Heading Component
const HeadingComp = (props) => {
    const { data } = props;
    const { imgUrl, links } = data[0];
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
            {links.map((link) => {
              return (<li>{link}</li>);
            })}
          </ul>
        </div>
      </div>
    );
  };

  export default HeadingComp