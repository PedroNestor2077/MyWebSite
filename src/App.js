import {Body,AppS,Background,ImgBackground} from "./appStyle.js"
import Header from "./components/Header/header"
import Home from "./components/Home/Home"
import Abbout from "./components/Abbout/abbout"
import Projects from "./components/Projects/projects"
import Contact from "./components/Contact/contact"
import Footer from "./components/Footer/footer"
import "./AnimationAndMedia.css"
function App() {

  return (
    <AppS>
      <Background>
        <ImgBackground/>
      </Background> 
      <Body>
        <Header/> 
        <Home/>
        <Abbout />
        <Projects/>
        <Contact/>
        <Footer/>
      </Body>
    </AppS>
  );

}
export default App;
