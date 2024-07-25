import logo from "../assets/RVIcon.png";
import { scroller } from "react-scroll";
import { useState } from "react";
import { navLinks } from "../constants";
import close from "../assets/close.svg";
import menu from "../assets/menu.svg";

const Navbar = () => {
  const [active, setActive] = useState("Home");
  const [toggle, setToggle] = useState(false);

  const scrollWithOffset = (sectionId) => {
    scroller.scrollTo(sectionId, {
      duration: 1500,
      delay: 0,
      smooth: "easeInOutQuart",
      offset: -70,
    });
  };

  return (
    <nav className="navbar mb-20 flex w-full items-center justify-between py-6 bg-black bg-opacity-95">
      <img src={logo} alt="hoobank" className="w-[60px]" />

      <ul className="hidden flex-1 list-none items-center justify-end lg:flex md:hidden sm:hidden">
        {navLinks.map((nav, index) => (
          <li
            key={nav.link}
            className={`cursor-pointer font-poppins text-[20px] font-normal ${
              active === nav.name ? "text-white" : "text-dimWhite"
            } ${index === navLinks.length - 1 ? "mr-0" : "mr-10"}`}
            onClick={() => {
              setActive(nav.name);
              scrollWithOffset(nav.link);
            }}
          >
            <a href={`#${nav.link}`}>{nav.name}</a>
          </li>
        ))}
      </ul>

      <div className="flex flex-1 items-center justify-end lg:hidden md:flex sm:flex">
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="h-[28px] w-[28px] object-contain"
          onClick={() => setToggle(!toggle)}
        />

        <div
          className={`${
            !toggle ? "hidden" : "flex"
          } bg-black bg-opacity-95 sidebar absolute right-0 top-20 mx-4 my-2 min-w-[170px] rounded-xl p-6`}
        >
          <ul className="flex flex-1 list-none flex-col items-start justify-end">
            {navLinks.map((nav, index) => (
              <li
                key={nav.link}
                className={`cursor-pointer font-poppins text-[20px] font-medium ${
                  active === nav.name ? "text-white" : "text-dimWhite"
                } ${index === navLinks.length - 1 ? "mb-0" : "mb-4"}`}
                onClick={() => setActive(nav.name)}
              >
                <a href={`#${nav.link}`}>{nav.name}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
