import {Body,AppS,Background,ImgBackground} from "./appStyle.js"
import Header from "./components/Header/header"
import SideBar from "./components/Header/sideBar"

function App() {

  return (
    <AppS>
      <Background>
        <ImgBackground/>
      </Background>
      <Body>
        <Header/> 
      </Body>
    </AppS>
  );

}
export default App;
