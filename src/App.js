import "./App.css";
import { BrowserRouter as Routers, Route, Routes } from "react-router-dom";
import Footer from "./Components/Footer/Footer";
import { GalleryImages } from "./Components/GalleryImages/GalleryImages";
// import ImageCarousel from "./Components/ImageCarousel/ImageCarousel";
import ImageSlider from "./Components/ImageSlider/ImageSlider";
import { OurPlans } from "./Components/OurPlans/OurPlans";
import { Ourclasses } from "./Components/Ourclasses/Ourclasses";
import { RegisterNow } from "./Components/RegisterNow/RegisterNow";
import { Whyus } from "./Components/Whyus/Whyus";
import { Aboutus } from "./Components/Aboutus/Aboutus";
import { Header } from "./Components/Header/Header";
import { Classes } from "./Components/Classes/Classes";
import { Services } from "./Components/Services/Services";
import TrainerGrid from "./Components/TrainerGrid/TrainerGrid";
import { OurTrainers } from "./Components/OurTrainer/OurTrainer";
import { ContactPage } from "./Components/ContactPage/ContactPage";
import { Maps } from "./Components/Maps/Maps";




const slides = [
  {
    image: "Images/banner_1.jpg",
    // text: "This is the first slide",
  },
  {
    image: "Images/banner_2.jpg",
    // text: "This is the second slide",
  },

];
function App() {
  return (
    <div>
      <Routers>
        <Header />
        <Routes>
          <Route path="/" element={<>
            <ImageSlider slides={slides} />
            <Whyus />
            <Ourclasses />
            <RegisterNow />
            <OurPlans />
            <GalleryImages />
            {/* <ImageCarousel /> */}
            <TrainerGrid/>
          </>
          } />
          <Route path="/Aboutus" element={<Aboutus />} />
          <Route path="/classes" element={<Classes/>} />
          <Route path="/services" element={<Services/>}/>
          <Route path="/OurTeam" element={<OurTrainers/>}/>
          <Route path="/contact" element={<ContactPage/>}/>
        </Routes>
      </Routers>
      <Maps/>
      <Footer />
     
    </div>
  );
}

export default App;
