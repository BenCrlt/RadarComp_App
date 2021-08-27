import '../styles/App.css';
import Banner from './Banner';
import Home from './Home';
import Evaluation from './ModelEvaluation/Evaluation';
import Footer from './Footer';
import Login from './Login/Login';
import Sign from './Login/Sign';
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
                  <Evaluation />
                </Route>
                <Route path="/home">
                  <Home />
                </Route>
                <Route path="/sign">
                  <Sign />
                </Route>
                <Route path="/">
                  <Login />
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
