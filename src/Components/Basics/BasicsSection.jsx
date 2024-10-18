import Basics from "./Basics";

const BasiscSection = () => {
    return ( 
        <>
            <div className="container my-3">
                <div className="grid md:grid-cols-2 grid-cols-1 gap-3">
                    <Basics header={"Amazon basics"} subheader={"Ship today's Deal,Lightening Deals and enjoyable discounts"} topic={"See more"}/>

                    <Basics header={"Deals and Promotion"} subheader={"Ship today's Deal,Lightening Deals and enjoyable discounts"} topic={"See more"}/>
                </div>
                
            </div>
        </>
     );
}
 
export default BasiscSection;