import { BrowserRouter, Route, Routes } from "react-router-dom"
import Login from "./Login"
import Bmi from "./Bmi"
import Joke from "./Joke"
import Header from "./Header"
import Footer from "./Footer"
export default function App(){
  return(
    <>
  <BrowserRouter>
  <Header/>
  <Routes>
    <Route path="/" element={<Login/>}></Route>
  {/* suru ma k dekhauna man cha  */}

  <Route path="/bmi" element={<Bmi/>}></Route>
  {/* path="" here, path ko notation bhitra lekheko CHeez URL ma hanyo bhane Jun .jsx file janu cha tei ma jancha */}
  <Route path="/joke" element={<Joke/>}></Route>
  </Routes>
  <Footer/>
  </BrowserRouter>
    </>
    
  );

}

