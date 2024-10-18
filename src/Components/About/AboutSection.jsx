import AboutCard from "./AboutCard";

const AboutSection = () => {
    return ( 
        <>
            <div className="container mx-auto py-10 mt-8 bg-pink-100">
                <div className="flex flex-row flex-nowrap  px-5 lg:overflow-hidden overflow-x-scroll scroll">
                    <AboutCard  header={"Hi ,Tomas"} text={"Recommendation for you"}/>
                    <AboutCard  header={"Your Orders"} text={"View your orders"}/>
                    <AboutCard  header={"Electronics"} text={"Buy,save 30%"}/>
                    <AboutCard  header={"Home & Kitchen"} text={"Big sale 30%"}/>
                </div>
            </div>
        </>
     );
}
 
export default AboutSection;