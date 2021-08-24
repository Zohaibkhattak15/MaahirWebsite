import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import SignUp4 from './Components/SigUp/SignUp4';
// import SignUp2 from './Components/SigUp/SignUp2';
// import SignUp3 from './Components/SigUp/SignUp3';
// import Login from './Components/Login/Login';
// import SignUp1 from './Components/SigUp/SignUp1';
import { BrowserRouter as Router, Switch, Route  } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Services from './Components/WebPages/Services';
// import History from './Components/WebPages/History';
import AboutUs from './Components/WebPages/AboutUs';
import Home from './Components/WebPages/Home';
import ContactUs from './Components/WebPages/ContactUs';
import TermandConds from './Components/WebPages/TermandConds';
import PrivacyPolicy from './Components/PrivacyPolicy/PrivacyPolicy';
import PricingPolicy from './Components/PricingPolicy/PricingPolicy';
import RefundPolicy from './Components/RefundPolicy/RefundPolicy';



function App() {


  return ( 
      <Router>
        <Navbar />
        <Switch>
          <Route path='/home' exact component={Home} />
          <Route path='/services' component={Services} />
          <Route path='/about-us' component={AboutUs} />
          <Route path='/contact-us' component={ContactUs} />
          <Route path='/terms-and-conditions' component={TermandConds}/>
          <Route path='/privacy-policy' component={PrivacyPolicy}/>
          <Route path='/pricing-policy' component={PricingPolicy}/>
          <Route path='/refund-policy' component={RefundPolicy}/>
        </Switch>
    </Router> 

  );
}

export default App;
