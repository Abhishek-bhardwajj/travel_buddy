import { Route, Routes } from "react-router-dom";
import Auth from "./auth/Auth";
import Diaries from "./diaries/Diaries";
// import DiaryItem from "./diaries/DiaryItem";
import Home from "./home/Home";
import Header from './header/Header';
function App() {
  return(
    <>
     {/* <Navbar/> */}
   
    
        <Header/>
      
      
         <Routes>
          <Route path="/Home" element={<Home/>}/>
          <Route path="/Auth" element={<Auth/>}/>
          <Route path="/Diaries" element={<Diaries/>}/>

        </Routes> 
    
    </>
  );
  
}
export default App;
