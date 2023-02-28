import { Link } from "react-router-dom";

//destructure the post from props
const Decision = ({ decision }) => {
  // console.log(decision)
  //////////////////
  // Style Objects
  //////////////////
  const div = {
    textAlign: "center",
    border: "3px solid",
    margin: "10px auto",
    width: "80%",
  };
  return (
    <div style={div}>
      <Link to={`/${decision.id}/`}>
        <h1>{decision.regBody}</h1>
      </Link>
      <h2>{decision.allegationType}</h2>
      <h3>ID - {decision.id}</h3>
    </div>
  );
};

export default Decision