import {
  BrowserRouter as Router, Route
} from "react-router-dom";
import AuthProvider from "./contexts/AuthProvider";
import AddService from "./Pages/AddService/AddService";
import Footer from "./Pages/Footer/Footer";
import Header from "./Pages/HomePage/Header/Header";
import HomePage from "./Pages/HomePage/HomePage";
import PrivateRoute from "./Pages/HomePage/PrivateRoute/PrivateRoute";
import ServiceDetails from "./Pages/HomePage/Services/ServiceDetails/ServiceDetails";
import Login from "./Pages/Login/Login";
import ManageServices from "./Pages/ManageServices/ManageServices";
import UpdateService from "./Pages/UpdateService/UpdateService";

function App() {
  return (
    <AuthProvider>
         <Router>
          <Header/>
          <Route exact path ="/" component = {HomePage}/>
          <Route exact path ="/login" component = {Login}/>
          <Route exact path ="/addService" component = {AddService}/>
          <Route path="/manageService" exact component = {ManageServices}/>
          <Route path="/update/:updateId" exact component = {UpdateService}/>
          <PrivateRoute path="/service/:serviceId">
            <ServiceDetails></ServiceDetails>
          </PrivateRoute>
          <Footer/>
        </Router>
    </AuthProvider>
   
  );
}

export default App;
