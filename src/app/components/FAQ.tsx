"use client";

import { useState } from "react";

interface FAQItem {
    question: string;
    answer: string;
}

const FAQ: React.FC = () => {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    const faqs: FAQItem[] = [
        { question: "What is the purpose of email verifier?", answer: "An email verifier ensures email addresses are valid and can receive messages." },
        { question: "How do you find email addresses?", answer: "You can use tools like email finders or manually search through social platforms and websites." },
        { question: "What is the purpose of email verifier?", answer: "It helps in cleaning up your email lists to improve deliverability." },
        { question: "How do you find email addresses?", answer: "By leveraging email extraction tools or searching for professional contact information." },
        { question: "What is the purpose of email verifier?", answer: "It ensures you are sending emails to valid addresses, reducing bounce rates." },
        { question: "How do you find email addresses?", answer: "Search through directories, LinkedIn profiles, or use email lookup software." },
    ];

    const toggleFAQ = (index: number) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div className="bg-gray-50 py-20">
            <div className="max-w-6xl mx-auto px-6">
                <h2 className="text-4xl font-extrabold text-center mb-12 leading-tight text-[#2F327D]">
                    Got a Question? <br /> Get Your Answers
                </h2>
                <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                    {faqs.map((faq, index) => (
                        <div key={index} className="border-b last:border-b-0">
                            <button
                                onClick={() => toggleFAQ(index)}
                                className="w-full flex justify-between items-center py-6 px-8 text-left text-xl focus:outline-none hover:bg-gray-100"
                            >
                                <span className="text-[#616161] font-semibold">{faq.question}</span>
                                <span className="text-[#616161] text-2xl">
                                    {activeIndex === index ? "-" : "+"}
                                </span>
                            </button>
                            {activeIndex === index && (
                                <div className="px-8 pb-6 text-gray-700 text-lg">
                                    {faq.answer}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default FAQ;
