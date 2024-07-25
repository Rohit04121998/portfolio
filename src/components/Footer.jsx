import { socialMedia } from "../constants";
import { FaLinkedin, FaGithub, FaInstagram, FaFacebook } from "react-icons/fa";

const iconMapping = {
  in: <FaInstagram />,
  fb: <FaFacebook />,
  gh: <FaGithub />,
  li: <FaLinkedin />,
};

export const Footer = () => {
  return (
    <section className="flex justify-center items-center py-6 flex-col">
      <div className="flex w-full flex-col items-center justify-between pt-6 md:flex-row">
        <p className="text-center font-poppins text-[15px] font-normal leading-[27px] text-white py-6">
          Copyright Ⓒ 2024 Rohit Veeradhi. All Rights Reserved.
        </p>

        <div className="mt-6 flex flex-row md:mt-0">
          {socialMedia.map((social, index) => (
            <a
              href={social.link}
              className={`cursor-pointer object-contain text-3xl ${
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
