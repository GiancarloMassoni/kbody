"use client";
import { useState } from "react";
import { text } from "stream/consumers";

type ContactModalProps = {
  style: string;
  text: string;
};

export default function ContactModal(contactModalProps: ContactModalProps) {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Contact Button */}
      <button onClick={() => setOpen(true)} className={contactModalProps.style}>
        {contactModalProps.text}
      </button>

      {/* Modal */}
      {open && (
        <div
          className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 font-body"
          onClick={() => setOpen(false)}
        >
          <div
            className="bg-white p-6 rounded-2xl w-full max-w-sm shadow-xl relative"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={() => setOpen(false)}
              className="absolute top-3 right-3 text-xl"
            >
              &times;
            </button>

            <h2 className="text-2xl mb-4 font-heading">Contact Me</h2>

            <form
              action="https://formsubmit.co/kaitlinbrubaker50@gmail.com"
              method="POST"
              className="space-y-4"
            >
              {/* FormSubmit options */}
              <input
                type="hidden"
                name="_cc"
                value="massonicarlo55@gmail.com"
              />

              <input
                type="hidden"
                name="_next"
                value="https://www.katebrubaker.com/thankyou"
              ></input>
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_template" value="table" />
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm text-left">First Name</label>
                  <input
                    type="text"
                    name="fname"
                    required
                    className="w-full p-2 border-gray-300 border rounded-lg"
                  />
                </div>
                <div className="inline">
                  <label className="block text-sm text-left">Last Name</label>
                  <input
                    type="text"
                    name="lname"
                    required
                    className="w-full p-2 border-gray-300 border rounded-lg"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm text-left">Email</label>
                <input
                  type="email"
                  name="email"
                  required
                  className="w-full p-2 border-gray-300 border rounded-lg"
                />
              </div>

              <div>
                <label className="block text-sm text-left">Inquiry Type</label>
                <select
                  name="inquiry"
                  id=""
                  className="w-full p-2 border-gray-300 border rounded-lg"
                >
                  <option value="Private Event">Private Event</option>
                  <option value="Classes">Classes</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm text-left">Message</label>
                <textarea
                  name="message"
                  rows={4}
                  required
                  className="w-full p-2 border-gray-300 border rounded-lg"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-primary text-white py-2 rounded-xl hover:bg-accent transition"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
