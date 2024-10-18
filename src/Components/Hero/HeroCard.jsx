import { FaStar } from "react-icons/fa";

const HeroCard = () => {
    return ( 
        <>
            <div className="container absolute z-0 lg:bottom-20 lg:right-0 left-0 lg:block  md:hidden">
                <div className="w-2/4 bg-white px-5 py-4 rounded-lg">
                    <p className="text-gray-400">Technology & Accessories</p>
                    <h5 className="text-md font-semibold">JBL T460BT Black Headphones</h5>
                    <div className="flex items-center gap-4">
                    <div className="flex items-center gap-[2px]">
                        <FaStar className="text-yellow-300"/>
                        <FaStar className="text-yellow-300"/>
                        <FaStar className="text-yellow-300"/>
                        <FaStar className="text-yellow-300"/>
                        <FaStar className="text-yellow-300"/>
                    </div>
                    <p>(136 Sold)</p>
                    </div> 
                    <div className="price flex items-center gap-5">
                        <h3 className="text-2xl font-semibold">
                            $125.00
                        </h3>
                        <h2 className="line-through">$135.00</h2>
                    </div>
                    <div className="moer">
                        <p><a href="">View More</a></p>
                    </div>
                  
                </div>
            </div>
        </>
     );
}
 
export default HeroCard;