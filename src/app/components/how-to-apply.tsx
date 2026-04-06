import { Search, FileCheck, Send, CreditCard, Sparkles } from 'lucide-react';

const steps = [
  {
    number: '1',
    icon: Search,
    title: 'Online enquiry or registration on the official website',
  },
  {
    number: '2',
    icon: FileCheck,
    title: 'Course selection based on language interest',
  },
  {
    number: '3',
    icon: Send,
    title: 'Submission of basic academic details',
  },
  {
    number: '4',
    icon: CreditCard,
    title: 'Fee payment and batch confirmation',
  },
  {
    number: '5',
    icon: Sparkles,
    title: 'Orientation before course commencement',
  },
];

export function HowToApply() {
  return (
    <section className="py-16 lg:py-24 bg-gray-50" id='admission'>
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            How to Apply for March 2026 Language Courses
          </h2>
          <p className="text-lg text-gray-600 mx-auto">
            Admission begins before the course start date. Early registration helps secure seats in preferred batches.
          </p>
        </div>
        
        <div className="relative">
          {/* Connection line for desktop */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-[#A3241C] via-[#1b31a4] to-[#A3241C] opacity-20 -translate-y-1/2 z-0"></div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6 relative z-10">
            {steps.map((step, index) => (
              <div 
                key={index}
                className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-all text-center"
              >
                <div className="relative inline-block mb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#1b31a4] to-[#A3241C] rounded-full flex items-center justify-center">
                    <step.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-[#e4bd22] rounded-full flex items-center justify-center font-bold text-sm">
                    {step.number}
                  </div>
                </div>
                <h3 className="font-semibold text-gray-900">
                  {step.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
        <p className="text-center max-w-5xl text-lg text-gray-700 bg-white p-6 rounded-2xl shadow-sm mx-auto mt-10">
          Many students search for accredited online language courses that offer structured training and institutional credibility. SIFIL meets this requirement through university-backed programs.
        </p>
      </div>
    </section>
  );
}
