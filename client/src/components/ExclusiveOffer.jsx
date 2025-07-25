import Title from "./Title";
import { assets, exclusiveOffers } from "../assets/assets";

const ExclusiveOffer = () => {
  return (
    <div className=" flex flex-col items-center px-6 md:px-16 lg:px-24 xl:px-32 pt-20 pb-30">
      <div className="flex flex-col md:flex-row items-center  w-full justify-between gap-4">
        <Title
          align="left"
          title="Exclusive Offers"
          subTitle="Take advantage of our limited-time offers and special packages to enhance your stay and create unforgettable memories."
        />
        <div className="flex justify-end items-center ">
          <button className="group inline-flex items-center gap-1 font-medium cursor-pointer md:text-sm">
            <span>View All Offers</span>
            <img
              src={assets.arrowIcon}
              alt="arrow"
              className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
            />
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 ">
        {exclusiveOffers.map((offer, index) => (
          <div
            key={index}
            className="group relative flex flex-col items-start justify-between gap-1 pt-12 md:pt-18 px-4 rounded-xl text-white bg-no-repeat bg-cover bg-center"
            style={{ backgroundImage: `url(${offer.image})` }}
          >
            <p className="px-3 py-1 absolute top-4 left-4 text-xs bg-white text-gray-800 font-medium rounded-full">
              {offer.priceOff}
            </p>
            <div>
              <p className="text-2xl font-medium font-playfair">
                {offer.title}
              </p>
              <p>{offer.description}</p>
              <p className="text-xs text-white/70 mt-3">{offer.expiryDate}</p>
            </div>
            <button className="flex items-center gap-2 font-medium cursor-pointer mt-4 mb-5">
              View Offers
              <img
                className="invert group-hover:translate-x-1"
                src={assets.arrowIcon}
                alt="arrow-icon"
              />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExclusiveOffer;
