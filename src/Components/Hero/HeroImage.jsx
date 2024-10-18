const HeroImage = ({image}) => {
    return ( 
        <>
            <div className="container flex md:justify-end justify-start md:ms-0 ms-44 z-20">
                <img src={image} className="md:h-[600px] h-[400px]   object-cover " alt="" />
            </div>
        </>
     );
}
 
export default HeroImage;