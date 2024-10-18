import { FaArrowRight } from "react-icons/fa6";

const Header = ({category,section}) => {
    return ( 

        <>
            <div className="container py-4">
                <div className="flex justify-between items-center">
                    <p className="text-[18px] font-semibold">{category}</p>
                    <p className="flex items-center">
                        <span>{section}</span>
                        <FaArrowRight/>
                        
                    </p>
                </div>
            </div>
        </>
     );
}
 
export default Header;