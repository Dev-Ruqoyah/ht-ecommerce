import BasicsText from "./BasicsText";

const Basics = ({ image, header, subheader, topic }) => {
  return (
    <>
      <div className="container mx-auto bg-pink-100 px-5 py-8">
        <div className="grid grid-cols-2 ">
          <BasicsText header={header}  subheader={subheader} topic={topic} />
          <div className="image border">
            <img src={image} className="h-[100px]" alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Basics;
