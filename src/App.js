import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
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

function App() {
  return (
    <div>
      <Header />
      <ComingSoon />
      {/* <AboutUs />
      <Benefits />
      <Roadmap />
      <RoadmapTwo />
      <Partners /> */}
      <Team />
      {/* <Faq /> */}
      <Footer />
    </div>
  );
}

export default App;
