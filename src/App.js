import {Body,AppS,Background,ImgBackground} from "./components/style.js"
import Header from "./components/header"
import SideBar from "./components/sideBar"
function HeaderBreakPoints(width,height){
  /* return true for full Header and false for small header. */
  if(width>1200){
    return true
  }else{
    return false
  }
}
function App() {

  return (
    <AppS>
      <Background>
        <ImgBackground></ImgBackground>
        <h1>pedro</h1>
      </Background>
      <Body>
        <Header breakPointRules={HeaderBreakPoints}/> 
        <SideBar/>
      </Body>
    </AppS>
  );

}
export default App;
