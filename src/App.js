import './App.css';
import { Header } from './components/Header';
import { ComingSoon } from './components/ComingSoon';
import { AboutUs } from './components/AboutUs';
import { Benefits } from './components/Benefits';
import { Roadmap } from './components/Roadmap';
import { RoadmapTwo } from './components/RoadmapTwo';
import { Partners } from './components/Partners';
import { Team } from './components/Team';
import { Faq } from './components/Faq';
import { Footer } from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import { Home } from './components/Home';

function App() {
  return (
    <div className='page-wrapper'>
      <Router>
        <Header />
        <div className='overlay-wrapper'></div>
        <Switch>
          <Route path='/' component={Home} />
          <Route path='/comingsoon' component={ComingSoon} />
          <Route path='/aboutus' component={AboutUs} />
          <Route path='/benefits' component={Benefits} />
          <Route path='/roadmap' component={Roadmap} />
          <Route path='/roadmaptwo' component={RoadmapTwo} />
          <Route path='/partners' component={Partners} />
          <Route path='/team' component={Team} />
          <Route path='/faq' component={Faq} />
          <Route render={() => <Redirect to='/' />} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
