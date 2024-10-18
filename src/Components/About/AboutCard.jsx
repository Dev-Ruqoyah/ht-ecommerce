const AboutCard = ({image,header,text}) => {
    return ( 
        <>
            <div className="container lg:basis-1/4 md:basis-1/3 basis-1/2 shrink-0">
                <div className="flex items-center gap-3">
                    <div className="image">
                        <img src={image} className="h-14 w-14 rounded-full border" alt="" />
                    </div>
                    <div className="flex flex-col ">
                        <p className="text-[18px] font-semibold">{header}</p>
                        <p className="m-0 p-0"> {text}</p>
                    </div>
                </div>
            </div>
        </>
     );
}
 
export default AboutCard;