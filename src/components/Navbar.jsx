import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <>
      <div className="navbar container h-20 w-full flex">
        <h1 className="text-white text-4xl mt-10 ml-32 sm:ml-48 hover:text-red-500 ">
          Anuj
        </h1>
        
          <p className="text-white mt-12 ml-96 text-2xl hover:underline hover:text-red-500 cursor-pointer">
            Home
          </p>{" "}
        
        <Link to="About" spy={true} smooth={true} offset={-212} duration={500}>
          <p className="text-white mt-12 ml-20 text-2xl hover:underline hover:text-red-500 cursor-pointer">
            About
          </p>
        </Link>
        <Link
          to="Projects"
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
        >
          <p className="text-white mt-12 ml-20 text-2xl hover:underline hover:text-red-500 cursor-pointer">
            Projects
          </p>
        </Link>
        <Link
          className=" w-56"
          to="Contact"
          spy={true}
          smooth={true}
          offset={-0}
          duration={1000}
        >
          <p className="text-white mt-12 ml-20 mr-96 text-2xl hover:underline hover:text-red-500 cursor-pointer">
            Contact
          </p>
        </Link>
      </div>
    </>
  );
};

export default Navbar;
