import './App.css';
import AboutPage from './Pages/AboutPage';
import ContactPage from './Pages/ContactPage';
import FrontPage from './Pages/FrontPage';
import ItemsPage from './Pages/ItemsPage';
import MoreInfoPage from './Pages/MoreInfoPage';
import { PricingPage } from './Pages/PricingPage';
import ReviewPage from './Pages/ReviewPage';
import WorkingPage from './Pages/WorkingPage';

function App() {
  return ( 
   <>
    <FrontPage />
    <AboutPage />
    <WorkingPage />
    <PricingPage />
    <MoreInfoPage />
    <ReviewPage />
    <ItemsPage />
    <ContactPage />
   </>
  
  );
}

export default App;
