import {Body,AppS,Background,ImgBackground} from "./appStyle.js"
import Header from "./components/Header/header"
import SideBar from "./components/Header/sideBar"
import Home from "./components/Home/Home"
import Abbout from "./components/Abbout/abbout"
function App() {

  return (
    <AppS>
      <Background>
        <ImgBackground/>
      </Background> 
      <Body>
        <Header/> 
        <Home/>
        <Abbout/>
      </Body>
    </AppS>
  );

}
export default App;
