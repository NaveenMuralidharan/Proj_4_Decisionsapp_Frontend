import { Link, useLoaderData, Form } from "react-router-dom";

// destructuring the props needed to get our post, including router prop match
const Show = () => {
  const decision = useLoaderData();
  console.log("decision found is "+decision.regBody)
  ////////////////////
  // Styles
  ///////////////////
  const div = {
    textAlign: "center",
    border: "3px solid green",
    width: "80%",
    margin: "30px auto",
  };

  return (
    <div style={div}>
      <h1>{decision.regBody}</h1>
      <h2>{decision.allegationType}</h2>
      <h2>{decision.companyName}</h2>
      <h3>{decision.decisionType}</h3>

      <div style={{ textAlign: "center" }}>
        <h2>Update a Decision</h2>
        <Form action={`/update/${decision.id}`} method="post">
          <input
            type="text"
            name="regBody"
            placeholder="reg body"
            defaultValue={decision.regBody}
          />
          <input
            type="text"
            name="companyName"
            placeholder="company name"
            defaultValue={decision.companyName}
          />
            <input
            type="text"
            name="allegationType"
            placeholder="allegation type"
            defaultValue={decision.allegationType}
          />
            <input
            type="text"
            name="decisionType"
            placeholder="decision type"
            defaultValue={decision.decisionType}
          />
          <button>Update Decision</button>
        </Form>
        <Form action={`/delete/${decision.id}`} method="post">
          <button>Delete Decision</button>
        </Form>
      </div>  

      <Link to="/">
        <button>Go Back</button>
      </Link>
    </div>
  );
};

export default Show;