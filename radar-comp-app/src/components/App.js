import '../styles/App.css';
import Banner from './Banner';
import Home from './Home';
import Footer from './Footer';

function App() {
  return (
    <div className="rca-container">
      <Banner/>
      <div className="container">
        <Home/>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
