import {Route, Switch} from "react-router-dom";
import routes from "./routes";
import Login from "./pages/loginpage"
import Signup from "./pages/SignUppage";

function App() {
  return (
    <div>
      {/* <a href={routes.home}>home/login</a><br></br>
      <a href={routes.posts}>posts </a><br></br>
      <a href ={routes.signup}> signup</a>
      <br></br> */}
      
      <Switch>
      {/* <Route path={routes.posts}>
        <h1> poster here</h1>
      </Route> */}
      
      <Route path={routes.signup}>
      {/* <h1> home </h1>       */}
      <br></br> <br></br> 
        <Signup></Signup>
      </Route>
      <Route path={routes.home}>
        <h1> home</h1>
        <Login></Login>
      </Route>
    </Switch>
    </div>
    
  );
}

export default App;
