import { FaUserAlt, FaFlag } from "react-icons/fa";

const Player = ({ player }) => {
  let { image, name, country, role, battingType, bowlingType, biddingPrice, rating } = player;
  console.log(player);

  return (
    <div className="border border-gray-300 rounded-md p-4">
      <div className="mb-4">
        <figure>
          <img
            className="w-full max-h-60 object-cover rounded-md"
            src={image}
            alt={name}
          />
        </figure>
      </div>
      <div className="flex flex-col border-b border-gray-300 pb-4">
        <div className="flex items-center gap-x-2.5">
          <FaUserAlt className="text-lg text-gray-600" />
          <h2 className="text-lg text-gray-900 font-bold">{name}</h2>
        </div>
        <div className="flex justify-between items-center mt-2">
          <div className="flex gap-x-2 items-center">
            <FaFlag className="text-gray-400 text-base" />
            <p className="text-base text-gray-500">{country}</p>
          </div>
          <span className="bg-gray-100 rounded-md px-4 py-1 text-base">
            {role}
          </span>
        </div>
      </div>
      <div className="flex flex-col mt-4">
        <h4 className="text-base font-semibold">
          Rating{" "}
          <span className="text-gray-400 ml-2 font-medium">{rating}</span>
        </h4>
        <div className="flex justify-between mt-3">
          <div className="space-y-2">
            <p className="text-base font-semibold">{battingType}</p>
            <p className="text-base font-semibold">Price: ${biddingPrice}</p>
          </div>
          <div className="space-y-2 flex flex-col items-end">
            <p className="text-base font-semibold text-gray-500">
              {bowlingType ? bowlingType : "N/A"}
            </p>
            <button className="border border-gray-200 text-sm text-gray-900 px-4 py-1 rounded-md cursor-pointer hover:bg-gray-50">
              Choose Player
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Player;
