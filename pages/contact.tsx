import { Navbar } from 'components/Navbar';
import React from 'react';

const Contact: React.FC = () => {
  return (
    <div>
      <Navbar />
      <div className="mx-auto max-w-lg py-12 px-5">
        <h1 className="text-3xl md:text-4xl font-extrabold text-gray-800">
          Contact Me
        </h1>
        <p className="mb-8 text-gray-600 md:text-lg">
          I'll respond shortly to address any issues!
        </p>
        <form
          action="https://api.formium.io/submit/5f9f9557e99f1a00017769d0/coderinblack"
          className="w-full space-y-6"
          method="POST"
        >
          <div>
            <label htmlFor="email" className="block mb-1 text-gray-700">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="text-gray-800 px-3 py-2 border w-full shadow-sm focus:outline-none focus:shadow-outline-blue focus:border-blue-300 rounded"
              placeholder="contact@example.com"
              required
            />
          </div>
          <div>
            <label htmlFor="subject" className="block mb-1 text-gray-700">
              Subject
            </label>
            <input
              type="text"
              name="subject"
              id="subject"
              className="text-gray-800 px-3 py-2 border w-full shadow-sm focus:outline-none focus:shadow-outline-blue focus:border-blue-300 rounded"
              placeholder="Example"
              required
            />
          </div>
          <div>
            <label htmlFor="message" className="block mb-1 text-gray-700">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              className="text-gray-800 px-3 py-2 border w-full shadow-sm focus:outline-none focus:shadow-outline-blue focus:border-blue-300 rounded h-32"
              placeholder="Example..."
              required
            />
          </div>
          <button
            type="submit"
            className="bg-primary px-3 py-2 w-full text-white rounded font-medium focus:shadow-outline-blue focus:outline-none"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
