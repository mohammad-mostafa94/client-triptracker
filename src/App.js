import {
  BrowserRouter as Router, Route
} from "react-router-dom";
import AuthProvider from "./contexts/AuthProvider";
import AddService from "./Pages/AddService/AddService";
import Footer from "./Pages/Footer/Footer";
import Header from "./Pages/HomePage/Header/Header";
import HomePage from "./Pages/HomePage/HomePage";
import ServiceDetails from "./Pages/HomePage/Services/ServiceDetails/ServiceDetails";
import Login from "./Pages/Login/Login";

function App() {
  return (
    <AuthProvider>
         <Router>
          <Header/>
          <Route exact path ="/" component = {HomePage}/>
          <Route exact path ="/login" component = {Login}/>
          <Route exact path ="/addService" component = {AddService}/>
          <Route path="/service/:serviceId">
            <ServiceDetails></ServiceDetails>
          </Route>
          <Footer/>
        </Router>
    </AuthProvider>
   
  );
}

export default App;
