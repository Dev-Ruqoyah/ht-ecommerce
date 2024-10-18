import HeroSection from "../Components/Hero/HeroSection";
import NavBar from "../Components/NavBar";
import AboutSection from "../Components/About/AboutSection";
import ProductSection from "../Components/Product/ProductSection";
import BasiscSection from "../Components/Basics/BasicsSection";
const HeroPage = () => {
    return ( 
        <>
            <div className="container mx-auto">
                <NavBar/>
                <HeroSection/>
                <AboutSection/>
                <ProductSection/>
                <BasiscSection/>
            </div>
        </>
     );
}
 
export default HeroPage;