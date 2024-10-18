import { FaArrowRight } from "react-icons/fa";

const BasicsText = ({header,subheader,topic}) => {
    return ( 
        <>
            <div className="container mx-auto flex flex-col justify-center items-start gap-3">
                <h3 className="text-2xl   font-semibold">{header}</h3>
                <p className="text-md   font-semibold ">{subheader}</p>
                <p className="flex items-center gap-2 cursor-pointer">
                    <span>{topic}</span>
                    <FaArrowRight/>
                    </p>
            </div>
        </>
     );
}
 
export default BasicsText;