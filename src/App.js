import './App.css';
import Blogs from './componants/blog';
import Partner from './componants/Partners';
import ServicePage from './componants/Services';
import NumberStats from './componants/SiteNumbers';
import Reviews from './componants/Review';
import Reviewexp from './componants/Review';
import Contactus from './componants/contactus';

function App() {
  return (
    <div className="App">
      <ServicePage></ServicePage>
      <NumberStats />
      <Blogs/>
      <Partner/>
      <Reviewexp/>
      <Contactus/>
    </div>
  );
}

export default App;
