import { Link } from "react-router-dom";

//destructure the post from props
const Decision = ({ decision }) => {
  // console.log(decision)
  //////////////////
  // Style Objects
  //////////////////
  // const div = {
  //   textAlign: "center",
  //   border: "3px solid",
  //   margin: "10px auto",
  //   width: "80%",
  // };
  return (
    <div className="container">
      <Link to={`/${decision.id}/`}>
        <h3>{decision.regBody}</h3>
      </Link>
      <h3>{decision.allegationType}</h3>
      <h3>ID - {decision.id}</h3>
    </div>
  );
};

export default Decision