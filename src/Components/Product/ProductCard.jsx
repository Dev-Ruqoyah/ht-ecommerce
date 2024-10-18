const ProductCard = ({image,pname}) => {
    return ( 
        <>
            <div className="container lg:basis-1/5 md:basis-1/2  basis-full shrink-0 mx-auto">
                <div className="flex justify-end border">
                    <img src={image} className="h-[250px]" alt="" />
                </div>
                <p className="font-semibold text-[18px]">{pname}</p>
            </div>
        </>
     );
}
 
export default ProductCard;