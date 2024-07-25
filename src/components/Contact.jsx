import { CONTACT } from "../constants";
import { motion } from "framer-motion";

export const Contact = () => {
  const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${CONTACT.email}`;

  return (
    <div className="pb-4" id="contact">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-10 text-center text-4xl"
      >
        Get in touch
      </motion.h1>
      <div className="text-center tracking-tighter">
        <motion.p
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className="my-4"
        >
          {CONTACT.address}
        </motion.p>
        <motion.p
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.5 }}
          className="my-4"
        >
          {CONTACT.phoneNo}
        </motion.p>
        {/* <a href='#' className='border-b'>{CONTACT.email}</a> */}
        <a
          href={gmailUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="border-b"
        >
          {CONTACT.email}
        </a>
      </div>
    </div>
  );
};
