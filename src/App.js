import './App.css';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './Header' 
import './Header.css'
import Banner from './Banner';
import Fondo from './Fondo';
import Cabezote from './Cabezote';
import Results from './Results';
import Footer from './Footer';
import Messages from './Messages';
function App() {
  return (
    <Router>
      <div className="">
        <Switch>
          <Route path='/home'>
            <Header/>
            <Banner/>
            <Messages/>
            <Footer/>
          </Route>
          <Route path='/booking'>
            <Header/>
            <Results/>
            <Results/>
            <Footer/>
          </Route>
          <Route path='/eshome'>
            <Cabezote/>
            <Fondo/>
            <Footer/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
