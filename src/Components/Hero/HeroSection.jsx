import HeaderText from "./HeaderText";
import HeroCard from "./HeroCard";
import HeroImage from "./HeroImage";
import Hero from '../../assets/image/hero1.png'
const HeroSection = () => {
    return ( 
        <>  
            <div className="container mx-auto h-[90vh] bg-slate-50">
                <div className="grid md:grid-cols-2 grid-cols-1 h-full">
                    <div className="text container mx-auto h-full flex justify-center px-6">
                        <HeaderText header={"SHOP COMPUTERS & ACCESSORIES"} subheader={"Shop laptop,desktop,monitors,tablets,PC,gaming,hard drive,accessories and more"} topic={"View More"}/>

                    </div>
                    <div className="flex md:justify-end justify-center items-center md:h-[90vh] h-[300px] relative  md:mx-0 mx-auto ">
                    <HeroCard />
                        <HeroImage image={Hero} />
                        <div className="bg-yellow-400 p-1 text-white rounded-full absolute top-24 right-24 z-20 lg:block hidden">
                            50%
                        </div>
                    </div>
                </div>
            </div>
        
        </>
     );
}
 
export default HeroSection;