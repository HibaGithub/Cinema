import Header from "../component/header";
import Footer from "../component/footer";
import ContentPage1 from "./pagecontente";
// import FlashCard from "./flashDeals/FlashCard";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../login/log-in";
export default function  Appale(){
    return(<>
    <BrowserRouter>
    <Routes>
          <Header />
          <ContentPage1 />
          <Footer />
          <Route path="/" element={<Login/>} />
      </Routes></BrowserRouter>
     
        {/* <FlashCard/> */}
        


         </>
    
    )
}