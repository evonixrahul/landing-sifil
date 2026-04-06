import { CheckCircle } from 'lucide-react';

const requirements = [
  'Minimum qualification: 10+2 or equivalent',
  'Basic English reading and comprehension',
  'Interest in global languages and cultures',
  'Access to a stable internet connection',
];

export function Eligibility() {
  return (
    <section className="py-16 lg:py-24 bg-white" id='eligibility'>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Eligibility
          </h2>
          <p className="text-lg text-gray-600 mx-auto">
            Enrollment remains accessible for most learners. Basic eligibility ensures that students understand classroom instruction and complete assignments.
          </p>
        </div>
        
        <div className="bg-gradient-to-br from-[#A3241C]/5 to-[#1b31a4]/5 p-8 md:p-12 rounded-3xl shadow-lg">
          <div className="space-y-4 mb-6">
            {requirements.map((requirement, index) => (
              <div key={index} className="flex items-start gap-4">
                <CheckCircle className="w-6 h-6 text-[#A3241C] flex-shrink-0 mt-1" />
                <span className="text-lg text-gray-800">{requirement}</span>
              </div>
            ))}
          </div>
          
          <p className="text-gray-700 mt-8 pt-6 border-t border-gray-300">
            Students from any academic background join these language learning programs online
          </p>
          <p className="text-gray-700 mt-4">
            Learning languages opens the door to cultural understanding and new perspectives. Motivation plays a key role in long-term progress.
          </p>
        </div>
      </div>
    </section>
  );
}
