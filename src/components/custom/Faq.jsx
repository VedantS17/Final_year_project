import React, { useState } from 'react';

const FAQs = [
    {
      question: "What is a resume builder?",
      answer:
        "A resume builder is a tool that helps you create a professional resume.",
    },
    {
      question:
        "What’s unique about using your online Resume Builder to create my resume?",
      answer:
        "Our online Resume Builder offers unique templates and customization options.",
    },
    {
      question: "Is this Resume Builder free?",
      answer:
        "Yes, our Resume Builder offers a free version with basic features.",
    },
    {
      question: "Can an AI make my resume?",
      answer: "Yes, our AI can assist in creating a resume based on your input.",
    },
    {
      question: "Which is the best AI resume builder?",
      answer:
        "Our AI resume builder is considered one of the best due to its accuracy and ease of use.",
    },
    {
      question: "Is there a free AI resume builder tool?",
      answer:
        "Yes, we offer a free AI resume builder tool with limited features.",
    },
    {
      question: "Are your resumes ATS-friendly?",
      answer: "Yes, our resumes are designed to be ATS-friendly.",
    },
    {
      question: "Can I create a CV in your resume maker?",
      answer: "Yes, our resume maker also supports CV creation.",
    },
    {
      question: "Is it okay to use an online resume builder?",
      answer:
        "Yes, using an online resume builder is a convenient and effective way to create a resume.",
    },
    {
      question: "Can your resume creator help me if I’m new to the workforce?",
      answer:
        "Yes, our resume creator is designed to help individuals at all stages of their careers.",
    },
  ];
  
  const FAQItem = ({ question, answer, isOpen, onClick }) => (
    <div className="flex flex-col mx-4 md:mx-0 md:ml-[250px] md:mr-[250px]">
      <div
        className="flex justify-between border-b py-4 cursor-pointer max-w-4xl w-full"
        onClick={onClick}
      >
        <p className="text-lg flex-1">{question}</p>{" "}
        {/* Centering question text */}
        <i className={`fas ${isOpen ? "fa-minus" : "fa-plus"}`}></i>
      </div>
      {isOpen && <p className="text-gray-600 mt-2">{answer}</p>}
    </div>
  );

function Faq() {
    const [openIndex, setOpenIndex] = useState(null);
  return (
    <div>
      <div className="flex justify-center items-center min-h-screen bg-gray-100">
        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-8xl flex-2">
          <h1 className="text-3xl font-bold text-center mb-4">
            Resume Now FAQ
          </h1>
          <p className="text-center text-gray-600 mb-8">
            Last Updated:{" "}
            <span className="font-bold text-black">June 17, 2024</span>
          </p>
          <div className="space-y-4">
            {FAQs.map((faq, index) => (
              <FAQItem
                key={index}
                question={faq.question}
                answer={faq.answer}
                isOpen={openIndex === index}
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Faq
