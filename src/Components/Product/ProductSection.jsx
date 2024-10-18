import Header from "../Header";
import ProductCard from "./ProductCard";

const ProductSection = () => {
    return ( 
        <>
            <div className="container mx-auto py-10">
                <Header category={"Shop by Categories"} section={"All Department"}/>
                <div className="flex scroll overflow-x-scroll lg:overflow-hidden gap-4 flex-nowrap  ">
                    <ProductCard pname={"Beauty Pick"}/>
                    <ProductCard pname={"Computer & Accessories"}/>
                    <ProductCard pname={"Video Games"}/>
                    <ProductCard pname={"Toys & Games"}/>
                </div>
            </div>
        </>
     );
}
 
export default ProductSection;