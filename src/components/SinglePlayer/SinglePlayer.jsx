import { MdDeleteForever } from "react-icons/md";

const SinglePlayer = ({ player, removePlayerHandler }) => {
  let { image, name, role, biddingPrice } = player;

  return (
    <div className="bg-gray-50 px-4 py-4 rounded-md flex justify-between items-center">
      <div className="flex items-center gap-4">
        <div className="border border-gray-200 rounded-md p-1">
          <figure>
            <img className="w-32 h-32" src={image} alt={name} />
          </figure>
        </div>
        <div className="flex flex-col gap-y-2">
          <h2 className="text-base text-gray-900 font-semibold">{name}</h2>
          <p className="text-sm text-gray-600 font-normal">Role: {role}</p>
          <p className="text-sm text-gray-600 font-normal">
            Price: ${biddingPrice}
          </p>
        </div>
      </div>
      <MdDeleteForever
        onClick={() => removePlayerHandler(player?.playerId)}
        className="text-2xl text-red-700 cursor-pointer"
      />
    </div>
  );
};

export default SinglePlayer;
