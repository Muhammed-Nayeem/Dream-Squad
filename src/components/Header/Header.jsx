import logo from "../../assets/logo.png";
import { SiBitcoinsv } from "react-icons/si";

const Header = ({ coins }) => {
  return (
    <header className="bg-white py-4">
      <div className="container max-w-screen-xl mx-auto">
        <nav className="mx-10 xl:mx-0 flex justify-between items-center">
          <a href="#">
            <figure>
              <img className="w-16 h-16" src={logo} alt="logo" />
            </figure>
          </a>
          <div className="flex gap-x-4 items-center">
            <ul className="hidden md:flex gap-x-6">
              <li>
                <a className="text-base text-gray-700" href="">
                  Home
                </a>
              </li>
              <li>
                <a className="text-base text-gray-700" href="">
                  Fixture
                </a>
              </li>
              <li>
                <a className="text-base text-gray-700" href="">
                  Teams
                </a>
              </li>
              <li>
                <a className="text-base text-gray-700" href="">
                  Schedules
                </a>
              </li>
            </ul>
            <div className="flex items-center gap-x-1 border border-gray-200 px-4 py-1 rounded">
              <p className="text-sm text-gray-800">{coins} Coins</p>
              <SiBitcoinsv className="text-yellow-500 text-sm" />
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
