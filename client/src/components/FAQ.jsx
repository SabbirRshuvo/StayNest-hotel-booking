import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What is the check-in and check-out time?",
    answer:
      "Check-in time is from 2:00 PM, and check-out is until 11:00 AM. Early check-in or late check-out is subject to availability and may be charged.",
  },
  {
    question: "Can I cancel my booking?",
    answer:
      "Yes, bookings can be cancelled up to 24 hours before check-in for a full refund. Cancellation after that may incur charges.",
  },
  {
    question: "Is breakfast included in the room rate?",
    answer:
      "Yes, complimentary breakfast is included with all standard and deluxe room bookings.",
  },
  {
    question: "Do you offer airport pickup?",
    answer:
      "Yes, we offer 24/7 airport pickup service with an additional fee. Please mention it while booking or contact support.",
  },
  {
    question: "Are pets allowed in the hotel?",
    answer:
      "We are sorry, but pets are not allowed inside the hotel premises for hygiene reasons.",
  },
];
const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(index === openIndex ? null : index);
  };
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold text-center mb-8">
        Frequently Asked Questions
      </h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border border-gray-200 rounded-xl p-5 transition-all duration-300"
          >
            <button
              onClick={() => toggle(index)}
              className="flex justify-between items-center w-full text-left"
            >
              <span className="text-lg font-semibold text-gray-800">
                {faq.question}
              </span>
              <ChevronDown
                className={`h-5 w-5 text-gray-600 transition-transform duration-300 cursor-pointer ${
                  openIndex === index ? "rotate-180" : ""
                }`}
              />
            </button>
            {openIndex === index && (
              <div className="mt-4 text-gray-600 text-base">{faq.answer}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
