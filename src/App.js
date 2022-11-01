import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import HomePage from './pages/Home';
import ToolbarPage from './components/Toolbar';
import NavbarPage from './components/Navbar';
import Footer from './components/Footer';
import AboutPage from './pages/About';
import RDBenefitCalculator from './pages/RDBenefitCalculator';
import RDPayrolltaxCreditCalculator from './pages/RDPayrolltaxCreditCalculator';
import CostSegregationSavingsCalculator from './pages/CostSegregationSavingsCalculator';
import ERTCBenefitCalculator from './pages/ERTCBenefitCalculator';
import ContactUs from './pages/ContactUs';

import './App.css';

function App() {
  return (
    <Router basename="/">
      <div>
        {/* Spinner Start */}
        {/* <div id="spinner" className="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center">
          <div className="spinner-border position-relative text-primary" style={{width: '6rem', height: '6rem'}} role="status"></div>
          <img className="position-absolute top-50 start-50 translate-middle" src={spinner} alt="Icon"></img>
        </div> */}
        {/* Spinner End */}
        <ToolbarPage />
        <NavbarPage />
        <Routes>
          <Route path="aboutus" element={<AboutPage />} />
          <Route path="contactus" element={<ContactUs />} />
          <Route path="software">
            <Route exact index={true} path="rdbenefitcalculator" element={<RDBenefitCalculator />} />
            <Route exact index={false} path="rdpayrolltaxcreditcalculator" element={<RDPayrolltaxCreditCalculator />} />
            <Route exact index={false} path="costsegregationsavings" element={<CostSegregationSavingsCalculator />} />
            <Route exact index={false} path="ertcbenefitcalculator" element={<ERTCBenefitCalculator />} />
          </Route>
          <Route path="*" element={<HomePage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
