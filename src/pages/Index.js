import Decision from "../components/Decision";
import {useLoaderData, Form} from "react-router-dom"


const Index = (props) => {

  const decisions = useLoaderData()

  return <>

   <div style={{textAlign: "center"}}>
  <h2>Create a Decision</h2>
  <Form action="/create" method="post">
      <input type="text" name="regBody" placeholder="regulatory body"/>
      <input type="text" name="companyName" placeholder="company name"/>
      <input type="text" name="allegationType" placeholder="allegation type"/>
      <input type="text" name="decisionType" placeholder="decision type"/>
      <button>Create New Decision</button>
  </Form>
  </div>

  {decisions.map((decision) => <Decision decision={decision} key={decision.id} /> )}
  </>;
};
  
  export default Index;