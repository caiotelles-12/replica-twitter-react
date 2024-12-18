import PropTypes from "prop-types";
import { getAvatar } from "../../utils/generate";

export function FollowItem({ name, username }) {
  const avatar = getAvatar(
    `${name + Math.floor(Math.random() * 1000)}@email.com`
  );

  return (
    <div className="flex items-center justify-between py-3 px-1 hover:bg-gray-700 transition duration-200 rounded-md">
      <div className="flex items-center">
        <img
          className="rounded-full w-12 h-12 mr-3"
          src={avatar}
          alt="user avatar"
        />
        <div>
          <p className="font-bold">{name}</p>
          <p className="text-gray-500">{username}</p>
        </div>
      </div>
      <button className="bg-white text-black px-4 py-2 rounded-full font-bold hover:bg-gray-300">
        Follow
      </button>
    </div>
  );
}

FollowItem.propTypes = {
  name: PropTypes.string,
  username: PropTypes.string,
};
