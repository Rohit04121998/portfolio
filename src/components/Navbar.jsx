import logo from "../assets/RVLogo.png";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <div className="fixed top-0 left-20 right-20">
      <nav className="mb-20 flex items-center justify-between bg-black">
        {/* Logo */}
        <div className="flex flex-shrink-0 items-center">
          <img className="w-[110px]" src={logo} alt="logo" />
        </div>

        {/* Centered Navigation Links */}
        <div className="flex-1 flex justify-center items-center">
          <div className="flex gap-8">
            <Link
              to="hero"
              smooth={true}
              duration={500}
              spy={true}
              offset={-100}
              className="cursor-pointer"
            >
              Home
            </Link>
            <Link
              to="about"
              smooth={true}
              duration={500}
              spy={true}
              offset={-100}
              className="cursor-pointer"
            >
              About
            </Link>
            <Link
              to="technologies"
              smooth={true}
              duration={500}
              spy={true}
              offset={-100}
              className="cursor-pointer"
            >
              Technologies
            </Link>
            <Link
              to="education"
              smooth={true}
              duration={500}
              spy={true}
              offset={-100}
              className="cursor-pointer"
            >
              Education
            </Link>
            <Link
              to="experience"
              smooth={true}
              duration={500}
              spy={true}
              offset={-100}
              className="cursor-pointer"
            >
              Experience
            </Link>
            <Link
              to="projects"
              smooth={true}
              duration={500}
              spy={true}
              offset={-100}
              className="cursor-pointer"
            >
              Projects
            </Link>
            <Link
              to="contact"
              smooth={true}
              duration={500}
              spy={true}
              offset={-100}
              className="cursor-pointer"
            >
              Contact
            </Link>
          </div>
        </div>

        {/* Social Media Icons */}
        <div className="flex gap-4 text-4xl">
          <a
            href="https://www.linkedin.com/in/rohit-veeradhi/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://www.instagram.com/its_rohit_da/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram />
          </a>
          <a
            href="https://github.com/Rohit04121998"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </a>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
