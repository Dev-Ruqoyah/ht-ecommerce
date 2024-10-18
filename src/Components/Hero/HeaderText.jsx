const HeaderText = ({header,subheader,topic}) => {
    return ( 
        <>
            <div className="container mx-auto flex flex-col justify-center items-start gap-3">
                <h3 className="lg:text-6xl md:text-4xl text-3xl font-semibold">{header}</h3>
                <p className="text-md   font-semibold ">{subheader}</p>
                <button className="border-2 border-black px-5 rounded-lg py-2 hover:bg-black hover:text-white transition-all">{topic}</button>
            </div>
        </>
     );
}
 
export default HeaderText;