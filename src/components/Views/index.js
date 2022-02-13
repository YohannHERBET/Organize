import './views.scss';
import Header from 'src/components/Header';
import Footer from 'src/components/Footer';
import Navbar from 'src/components/Navbar';
import constructor from 'src/assets/noun-construction.png';

const Views = () => (
  <>
  <Header />
  <Navbar />
    <div className="container-construction">
    <img src={constructor} alt="logo de construction" className="construction-logo"/>
    <p className="construction-page"> 
     Page en cours de construction
    </p>
    </div>
  </>
);

export default Views;
