import { ClassProgressSection } from "../ClassProgressSection/ClassProgressSection"
// import ImageSlider from "../ImageSlider/ImageSlider"
import OurTrainersintro from "../OurTrainersintro/OurTrainersintro"
// import ImageSlider from "../ImageSlider/ImageSlider"
import { RegisterNow } from "../RegisterNow/RegisterNow"
import { Testimonials } from "../Testimonials/Testimonials"
import { Whyus } from "../Whyus/Whyus"
import "./Aboutus.css"


export const Aboutus = () => {
    return (
        <div>
            <div className="Aboutus_backgroundimg_container">
               
            </div>
            <div>
                <Whyus/>
                <ClassProgressSection/>
                {/* <ImageSlider/> */}
                <Testimonials/>
                <RegisterNow/>
                <OurTrainersintro/>
                
            </div>
        </div>
    )
}
