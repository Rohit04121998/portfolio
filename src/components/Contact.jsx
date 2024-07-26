import { motion } from "framer-motion";
import { useState } from "react";
import ReactGA from "react-ga";

export const Contact = () => {
  const apiUrl = import.meta.env.VITE_WEB3FORMS_API_URL;
  const apiKey = import.meta.env.VITE_WEB3FORMS_API_KEY;

  const [submissionStatus, setSubmissionStatus] = useState(null);

  const onSubmit = async (event) => {
    ReactGA.event({
      category: "User",
      action: "Submitted a contact form",
    });

    event.preventDefault();
    const formData = new FormData(event.target);
    const additionalData = {
      access_key: apiKey,
      from_name: "Portfolio Visitor",
    };

    for (const [key, value] of Object.entries(additionalData)) {
      formData.append(key, value);
    }

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);
    console.log(json);

    const res = await fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      console.log("Success", res);
      event.target.reset();
      setSubmissionStatus("success");
    } else {
      setSubmissionStatus("error");
    }
  };

  return (
    <div className="pb-4" id="contact">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-10 text-center text-5xl"
      >
        Get in touch
      </motion.h1>

      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 0.5 }}
        className="mx-auto max-w-xl rounded-xl bg-stone-950/70 p-6 bg-blend-normal shadow-md"
      >
        <form class="space-y-8" onSubmit={onSubmit}>
          <div class="relative">
            <input
              type="text"
              id="name"
              required
              class="border-1 peer block w-full appearance-none rounded-lg border-gray-700 bg-transparent px-2.5 pb-2.5 pt-4 text-sm text-white focus:border-purple-600 focus:outline-none focus:ring-0 dark:border-gray-600 dark:text-white dark:focus:border-purple-500"
              name="name"
              placeholder=" "
            />
            <label
              for="name"
              class="absolute start-1 top-2 z-10 origin-[0] -translate-y-4 scale-75 transform bg-transparent px-2 text-sm text-gray-400 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:bg-stone-950/80 peer-focus:px-2 peer-focus:text-purple-600 dark:bg-transparent dark:text-white peer-focus:dark:text-purple-300 rtl:peer-focus:left-auto rtl:peer-focus:translate-x-1/4"
            >
              Your Name
            </label>
          </div>

          <div class="relative">
            <input
              type="email"
              id="email"
              required
              class="border-1 peer block w-full appearance-none rounded-lg border-gray-700 bg-transparent px-2.5 pb-2.5 pt-4 text-sm text-white focus:border-purple-600 focus:outline-none focus:ring-0 dark:border-gray-600 dark:text-white dark:focus:border-purple-500"
              name="email"
              placeholder=""
            />
            <label
              for="email"
              class="absolute start-1 top-2 z-10 origin-[0] -translate-y-4 scale-75 transform bg-transparent px-2 text-sm text-gray-400 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:bg-stone-950/80 peer-focus:px-2 peer-focus:text-purple-600 dark:bg-transparent dark:text-white peer-focus:dark:text-purple-300 rtl:peer-focus:left-auto rtl:peer-focus:translate-x-1/4"
            >
              Email
            </label>
          </div>

          <div class="relative">
            <input
              type="text"
              id="subject"
              required
              class="border-1 peer block w-full appearance-none rounded-lg border-gray-700 bg-transparent px-2.5 pb-2.5 pt-4 text-sm text-white focus:border-purple-600 focus:outline-none focus:ring-0 dark:border-gray-600 dark:text-white dark:focus:border-purple-500"
              name="subject"
              placeholder=" "
            />
            <label
              for="subject"
              class="absolute start-1 top-2 z-10 origin-[0] -translate-y-4 scale-75 transform bg-transparent px-2 text-sm text-gray-400 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:bg-stone-950/80 peer-focus:px-2 peer-focus:text-purple-600 dark:bg-transparent dark:text-white peer-focus:dark:text-purple-300 rtl:peer-focus:left-auto rtl:peer-focus:translate-x-1/4"
            >
              Subject
            </label>
          </div>

          <div class="relative">
            <textarea
              rows="4"
              type="message"
              id="message"
              required
              class="border-1 peer block w-full appearance-none rounded-lg border-gray-700 bg-transparent px-2.5 pb-2.5 pt-4 text-sm text-white focus:border-purple-600 focus:outline-none focus:ring-0 dark:border-gray-600 dark:text-white dark:focus:border-purple-500"
              name="message"
              placeholder=""
            />
            <label
              for="message"
              class="absolute start-1 top-2 z-10 origin-[0] -translate-y-4 scale-75 transform px-2 text-sm text-gray-400 duration-300 peer-placeholder-shown:top-5 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:bg-stone-950/80 peer-focus:px-2 peer-focus:text-purple-600 dark:bg-transparent dark:text-white peer-focus:dark:text-purple-300 rtl:peer-focus:left-auto rtl:peer-focus:translate-x-1/4"
            >
              Type your message
            </label>
          </div>

          <div className="flex justify-center">
            <button
              type="submit"
              className="rounded-lg bg-gradient-to-r from-purple-700 to-fuchsia-900 px-4 py-2 font-semibold text-white hover:bg-pink-600 focus:outline-white"
            >
              Send Message
            </button>
          </div>
        </form>

        {submissionStatus === "success" && (
          <div className="mt-4 flex items-center justify-center text-green-500">
            <svg
              className="mr-2 h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 13l4 4L19 7"
              ></path>
            </svg>
            Your message was successfully submitted!
          </div>
        )}

        {submissionStatus === "error" && (
          <div className="mt-4 flex items-center justify-center text-red-500">
            <svg
              className="mr-2 h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
            There was an error submitting your message.
          </div>
        )}
      </motion.div>
    </div>
  );
};
