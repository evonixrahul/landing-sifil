import * as Accordion from '@radix-ui/react-accordion';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: '1. What languages are available in the online language courses starting March 2026?',
    answer: 'The online language courses starting March 2026 include French, German, Spanish, Japanese, Chinese, and Korean. These foreign language courses focus on grammar, vocabulary, pronunciation, and communication skills. Each course follows a structured curriculum and supports step by step language learning through guided lessons and interactive practice.',
  },
  {
    question: '2. Who can enroll in these online language learning programs?',
    answer: 'Students, graduates, and working professionals enroll in these online language learning programs. The courses suit individuals who want global career opportunities, study abroad preparation, or language skills for professional growth. Beginners and learners with basic knowledge both join these foreign language courses.',
  },
  {
    question: '3. Do the online language courses provide certification support?',
    answer: 'Yes, the online language courses provide preparation support for international language certification exams. The courses include grammar training, vocabulary development, and communication practice aligned with certification standards. Students receive academic guidance that supports preparation for globally recognised language proficiency exams.',
  },
  {
    question: '4. How are the online language classes conducted?',
    answer: 'Online language classes are conducted through live virtual sessions led by experienced faculty. Students participate in discussions, listening activities, and speaking practice during the sessions. The classes focus on pronunciation, grammar understanding, and real communication practice through structured lessons.',
  },
  {
    question: '5. What career benefits come from learning a foreign language?',
    answer: 'Learning a foreign language improves career opportunities in global industries and international business environments. Many organisations value professionals who communicate with global clients and teams. Language skills support careers in international business, translation, tourism, and global education sectors.',
  },
];

export function FAQ() {
  return (
    <section className="py-16 lg:py-24 bg-white" id='faq'>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
        </div>
        
        <Accordion.Root type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <Accordion.Item 
              key={index} 
              value={`item-${index}`}
              className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              <Accordion.Header>
                <Accordion.Trigger className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-gray-50 transition-colors group">
                  <span className="font-semibold text-gray-900 pr-4">
                    {faq.question}
                  </span>
                  <ChevronDown className="w-5 h-5 text-[#A3241C] transition-transform duration-300 group-data-[state=open]:rotate-180 flex-shrink-0" />
                </Accordion.Trigger>
              </Accordion.Header>
              <Accordion.Content className="overflow-hidden data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down">
                <div className="px-6 pb-5 text-gray-700 leading-relaxed">
                  {faq.answer}
                </div>
              </Accordion.Content>
            </Accordion.Item>
          ))}
        </Accordion.Root>
      </div>
    </section>
  );
}
