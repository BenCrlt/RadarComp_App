import '../styles/App.css';
import Banner from './Banner';
import Home from './Home';
import Evaluation from './ModelEvaluation/Evaluation';
import Footer from './Footer';
import { Provider } from 'react-redux'
import store from '../store/configureStore'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


function App() {
  return (
    <Provider store={store}>
      <div className="rca-container">
        <Router>
          <Banner/>
            <div className="container">
              <Switch>
                <Route path="/eval">
                  <Evaluation/>
                </Route>
                <Route path="/">
                  <Home />
                </Route>
              </Switch>
            </div>
          <Footer/>
        </Router>
      </div>
    </Provider>

  );
}

export default App;
