import { Briefcase, Plane, Laptop, GraduationCap, Languages, Brain, TrendingUp, Users } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const careers = [
  {
    icon: Briefcase,
    title: 'International business and trade',
  },
  {
    icon: Plane,
    title: 'Hospitality and tourism',
  },
  {
    icon: Laptop,
    title: 'IT services and outsourcing',
  },
  {
    icon: GraduationCap,
    title: 'Global education and research',
  },
  {
    icon: Languages,
    title: 'Translation and interpretation services',
  },
];

export function CareerAdvantages() {
  return (
    <section className="py-16 lg:py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Career Advantages After Learning a Foreign Language
          </h2>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto paragraph_margin_bottom_10">
            Language proficiency supports multiple career opportunities. Multilingual professionals often gain access to international projects and cross-border collaborations.
          </p>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Industries that value foreign language skills include:
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
          {/* Left Content */}
          <div className="space-y-4">
            {careers.map((career, index) => (
              <div 
                key={index}
                className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition-all flex items-center gap-4"
              >
                <div className="w-12 h-12 bg-[#1b31a4]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <career.icon className="w-6 h-6 text-[#1b31a4]" />
                </div>
                <h3 className="font-semibold text-gray-900">
                  {career.title}
                </h3>
              </div>
            ))}
          </div>
          
          {/* Right Image */}
          <div className="rounded-3xl overflow-hidden shadow-xl">
            <ImageWithFallback 
              src="https://images.unsplash.com/photo-1772987438485-ac832640c8a5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBjYXJlZXIlMjBzdWNjZXNzJTIwYnVzaW5lc3N8ZW58MXx8fHwxNzczNjY4ODc4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Professional career success"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        
        {/* Additional Skills */}
        <div className="bg-white p-8 rounded-2xl shadow-lg">
            <p className='text-center text-lg text-gray-700 paragraph_margin_bottom'>
              You also develop cognitive skills such as memory improvement and cultural intelligence through learn foreign language online programs.
            </p>
            <p className='text-center text-lg text-gray-700'>
              Learning a new language supports both career growth and personal development.
            </p>
        </div>
      </div>
    </section>
  );
}
