import footerLogo from "../../assets/logo-footer.png";
import CTA from "./CTA";

const Footer = () => {
  let currentYear = new Date();

  return (
    <footer className="bg-gray-950 pt-20 pb-4 relative">
      <div className="container max-w-screen-xl mx-auto">
        <CTA />
        <div className="mt-24 mx-10 xl:mx-0">
          <div className="text-center">
            <figure>
              <img className="w-24 mx-auto" src={footerLogo} alt="brand" />
            </figure>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-6">
            <div className="mt-2">
              <h2 className="text-white text-lg mb-2 font-bold">About Us</h2>
              <p className="w-3/4 text-gray-400">We are a passionate team dedicated to providing the best services to our customers.</p>
            </div>
            <div className="mt-2">
              <h2 className="text-white text-lg mb-2 font-bold">Quick Links</h2>
              <ul className="list-disc text-gray-400 ml-4">
                <li><a href="#">Home</a></li>
                <li><a href="#">Services</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Contact</a></li>
              </ul>
            </div>
            <div className="mt-2">
              <h2 className="text-white text-lg mb-2 font-bold">Subscribe</h2>
              <p className="text-gray-400">Subscribe to our newsletter to latest updates!</p>
              <div className="flex flex-col sm:flex-row gap-2 mt-6">
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Enter your email"
                  className="border border-gray-300 bg-white outline-0 px-4 py-1.5 rounded-md"
                />
                <input
                  type="submit"
                  value="Subscribe"
                  className="bg-gradient-to-br from-blue-400 via-purple-300 to-transparent px-4 py-1.5 rounded-md"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-300 text-center mt-8">
          <p className="text-sm text-gray-300 pt-4">&copy;{currentYear.getFullYear()} Muhammed Nayeem All right reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
