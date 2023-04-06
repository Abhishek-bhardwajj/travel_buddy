import { Route, Routes } from "react-router-dom";
import Auth from "./auth/Auth";
import Diaries from "./diaries/Diaries";
import Home from "./home/Home";
import Header from './header/Header';
import { useSelector } from "react-redux";
import Add from "./diaries/Add";
import Profile from "./profile/Profile";
function App() {
  const isLoggedIn = useSelector(state=>state.isLoggedIn);
  console.log(isLoggedIn);
  return(   
    <div>
        <header>
          <Header/>
        </header>
        
        <section>
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/auth" element={<Auth />}/>
            <Route path="/diaries" element={<Diaries />}/>
            <Route path="/add" element={<Add />}/>
            <Route path="/profile" element={<Profile />}/>
          </Routes> 
        </section>
    </div>
    
    
  );
  
}
export default App;
