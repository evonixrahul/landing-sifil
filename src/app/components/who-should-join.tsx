import { GraduationCap, Briefcase, TrendingUp, Heart, Users } from 'lucide-react';

const audiences = [
  {
    icon: GraduationCap,
    title: 'College students',
    description: 'Building international career profiles',
  },
  {
    icon: Users,
    title: 'Graduates',
    description: 'Planning overseas education',
  },
  {
    icon: Briefcase,
    title: 'Working professionals',
    description: 'In multinational companies',
  },
  {
    icon: TrendingUp,
    title: 'Career switchers',
    description: 'Entering global industries',
  },
  {
    icon: Heart,
    title: 'Language enthusiasts',
    description: 'Exploring new cultures',
  },
];

export function WhoShouldJoin() {
  return (
    <section className="py-16 lg:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Who Should Join These Online Language Learning Programs
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Students from diverse backgrounds benefit from multilingual skills. You build cultural awareness and communication skills needed to work in global environments.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {audiences.map((audience, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-all"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-[#1b31a4] to-[#1b31a4]/80 rounded-2xl flex items-center justify-center mb-4">
                <audience.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {audience.title}
              </h3>
              <p className="text-gray-600">
                {audience.description}
              </p>
            </div>
          ))}
        </div>
        
        <p className="text-center text-lg text-gray-700 bg-white p-6 rounded-2xl shadow-sm mx-auto">
          An online language learning platform provides the flexibility needed for modern learners. Students attend sessions from any location while maintaining regular academic or work schedules.
        </p>
      </div>
    </section>
  );
}
