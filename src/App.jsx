import React from "react";
import HomePage from "./Components/HomePage";
import MapComponent from "./Components/Locations";
import Page from "./Components/Locations";
import Locations from "./Components/Locations";
import Membership from "./Components/MembershipPage";
import AboutUs from "./Components/AboutUsPage";
import LoginPage from "./Components/Login";
import SignupPage from "./Components/SignUp";
import SignUpPage from "./Components/SignUp";




function App() {
  let Component

  switch(window.location.pathname) {
    case "/":
      Component = HomePage
      break

      case "/Locations":
      Component = Locations
      break
      
      case "/Membership":
      Component = Membership
      break

      case "/AboutUs":
      Component = AboutUs
      break

      case "/Login":
        Component = LoginPage
        break

        case "/SignUp":
          Component = SignUpPage
          break

  }
  return (
    <div className="App">
      

      
     
      <Component />

    


    </div>
  );
}

export default App;