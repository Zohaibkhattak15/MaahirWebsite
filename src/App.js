import React from 'react';
import { BrowserRouter as Router, Switch, Route  } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Services from './Components/WebPages/Services';
import AboutUs from './Components/WebPages/AboutUs/AboutUs';
import Home from './Components/WebPages/Home';
import ContactUs from './Components/WebPages/ContactUs/ContactUs';
import TermandConds from './Components/WebPages/TermandConds';
import PricingPolicy from './Components/PricingPolicy/PricingPolicy';
import RefundPolicy from './Components/RefundPolicy/RefundPolicy';
import ScrollButton from './Components/ScrollButton.js/ScrollButton';
import Login from './Components/CustomerRegister/Login/Login'
import './App.css';
import SignUp1 from './Components/CustomerRegister/SignUp/SignUp1';
import SignUp3 from './Components/CustomerRegister/SignUp/SignUp3';

const App = () =>  {

  return ( 
      <Router>
        <Navbar />
          <Switch>
            <Route exact path='/'  component={Home} />
            <Route path='/customerlogin'  component={Login} />
            <Route path='/customersignup1'  component={SignUp1} />
            <Route path='/customerOTP'  component={SignUp3} />
            <Route path='/services' component={Services} />
            <Route path='/about-us' component={AboutUs} />
            <Route path='/contact-us' component={ContactUs} />
            <Route path='/terms-and-conditions' component={TermandConds}/>
            {/* <Route path='/privacy-policy' component={PrivacyPolicy}/> */}
            <Route path='/pricing-policy' component={PricingPolicy}/>
            <Route path='/refund-policy' component={RefundPolicy}/>
          </Switch>
        <ScrollButton />  
    </Router> 

  );
}

export default App;
