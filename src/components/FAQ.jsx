// FAQ.js

import React, { useState } from 'react';

const FAQ = () => {
    const [expandedIndex, setExpandedIndex] = useState(null);

    const faqs = [
        { question: "How accurate are the drafts?", answer: "The Drafts are made with the help of AI and are accurate but human input is still required for inputs and proof-reading." },
        { question: "How secure are the documents?", answer: "All the documents and prompts are encrypted." },
        { question: "How does DraftAI prevent hallucination in its drafts?", answer: "To prevent hallucination, DraftAI utilizes user-uploaded drafts and templates. This ensures accuracy and reduces reliance on external data sources, providing a reliable drafting experience." },
        // Add more FAQs as needed
    ];

    const toggleExpand = (index) => {
        setExpandedIndex(index === expandedIndex ? null : index);
    };

    return (
        <div className="max-w-3xl mx-auto mt-[10vh]">
            <h2 className="text-5xl font-bold mb-8 font-garet-book">FAQs</h2>
            <div className="space-y-6">
                {faqs.map((faq, index) => (
                    <div key={index} className="border-b pb-4">
                        <div className="flex justify-between items-center">
                            <h3 className="text-2xl font-garet-book">{faq.question}</h3>
                            <button
                                onClick={() => toggleExpand(index)}
                                className="text-blue-500 focus:outline-none"
                            >
                                {expandedIndex === index ? <div><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="black" class="bi bi-x-lg" viewBox="0 0 16 16">
                                    <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z" />
                                </svg></div> : <div><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="black" class="bi bi-plus-lg" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2" />
                                </svg></div>}
                            </button>
                        </div>
                        {expandedIndex === index && (
                            <p className="text-gray-700 mt-4 text-xl font-hindGuntur-regular tracking-wide">{faq.answer}</p>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FAQ;
