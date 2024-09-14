import { socialMedia } from "../constants";
import { FaLinkedin, FaGithub, FaInstagram, FaFacebook, FaMedium } from "react-icons/fa";
import { SiTableau } from "react-icons/si";

const iconMapping = {
  in: <FaInstagram />,
  fb: <FaFacebook />,
  gh: <FaGithub />,
  li: <FaLinkedin />,
  md: <FaMedium />,
  tb: <SiTableau />,
};

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <section className="absolute left-0 right-0 mx-20 flex flex-col items-center justify-center overflow-hidden py-10">
      <div className="mt-7 w-full border-b border-neutral-700"></div>
      <div className="flex w-full flex-col items-center justify-between pt-2 md:flex-row">
        <p className="font-poppins py-6 text-center text-[15px] font-normal leading-[27px] text-white 2xl:text-[18px]">
          Copyright Ⓒ {currentYear} Rohit Veeradhi. All Rights Reserved.
        </p>

        <div className="mt-6 flex flex-row md:mt-0">
          {socialMedia.map((social, index) => (
            <a
              href={social.link}
              className={`cursor-pointer object-contain text-3xl 2xl:text-4xl ${
                index !== socialMedia.length - 1 ? "mr-10" : "mr-0"
              }`}
              target="_blank"
              rel="noopener noreferrer"
            >
              {iconMapping[social.id]}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
