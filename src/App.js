import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import BestFitnessInTheTown from "./components/BestFitnessInTheTown";
import BodyContent from "./components/BodyContent";
import CaloriesBurned from "./components/CaloriesBurned";
import Footer from "./components/Footer";
import HeartBeat from "./components/HeartBeat";
import JoinNow from "./components/JoinNow";
import JoinUsForm from "./components/JoinUsForm";
import Logo from "./components/Logo";
import Menu from "./components/Menu";
import NumberCounter from "./components/NumberCounter";
import PersonTieShoes from "./components/PersonTieShoes";
import Programs from "./components/Programs";
import ShapeYourBody from "./components/ShapeYourBody";
import StartedButton from "./components/StartedButton";
import StartYourJourney from "./components/StartYourJourney";
import Testimonials from "./components/Testimonials";
import TrainingProgram from "./components/TrainingProgram";
import WhyChooseUs from "./components/WhyChooseUs";
import PersonBackground from "./PersonBackground";

function App() {
  return (
    <div className="App">
      <div className="body">
        <div className="left-body-side">
          <div className="left-header">
            <Logo />
            <Menu />
          </div>
          <div className="left-body">
            <BestFitnessInTheTown />
            <ShapeYourBody />
            <BodyContent />
            <div className="inner-body-number-calories">
              <div className="inner-body-left">
                <NumberCounter expertCoaches={140} joinedMembers={978} fitnessPrograme={50}/>
                <StartedButton />
              </div>
              <div className="inner-body-right">
                <CaloriesBurned />
              </div>
            </div>
          </div>
        </div>
        <div className="right-body-side">
          <div className="right-header">
            <JoinNow />
          </div>
          <HeartBeat />
          <div className="person-tie-shoes">
            <PersonBackground />
            <PersonTieShoes />
          </div>
        </div>
      </div>
      <div className="container">
      <div className="explore-our-programs">
          <Programs/>
          <TrainingProgram/>
          <WhyChooseUs/>
          <StartYourJourney/>
          <Testimonials/>
          <JoinUsForm/>
          <Footer/>
        </div>
      </div>
    </div>
  );
}

export default App;
