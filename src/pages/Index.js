import Decision from "../components/Decision";
import {useLoaderData, Form} from "react-router-dom"


const Index = (props) => {

  const decisions = useLoaderData()

  return <>

   {/* <div style={{textAlign: "center"}}> */}
   <div className="container-sm">
    <br></br>
    <br></br>    
    <h1>Decisions App</h1>
    <br></br>
    <br></br>
  <h3>Create a Decision</h3>
  <Form action="/create" method="post">
  <div className="mb-3"> 
    <label for="regBody" className="form-label">Regulatory Body</label>
    <input type="text" name="regBody" placeholder="regulatory body"/>
  </div>
  <div className="mb-3"> 
    <label for="companyName" className="form-label">Company Name</label>
    <input type="text" name="companyName" placeholder="company name"/>  
  </div>
  <div className="mb-3"> 
    <label for="allegationType" className="form-label">Allegation Type</label>
    <input type="text" name="allegationType" placeholder="allegation type"/>
  </div>    
  <div className="mb-3"> 
    <label for="decisionType" className="form-label">Decision Type</label>
    <input type="text" name="decisionType" placeholder="decision type"/>
  </div>     
      
      <button type="submit" class="btn btn-primary">Create New Decision</button>
  </Form>
  </div>
  <div className="container">
  {decisions.map((decision) => <Decision decision={decision} key={decision.id} /> )}
  </div>
  
  </>;
};
  
  export default Index;