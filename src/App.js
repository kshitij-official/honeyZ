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

function App() {
  return (
    <div className='page-wrapper'>
      <Header />
      <div className='overlay-wrapper'></div>
      <ComingSoon />
      <AboutUs />
      <Benefits />
      <Roadmap />
      <RoadmapTwo />
      <Partners />
      <Team />
      <Faq />
      <Footer />
    </div>
  );
}

export default App;
