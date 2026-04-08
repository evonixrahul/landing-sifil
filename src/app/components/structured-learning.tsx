import { Video, Monitor, FileText, Globe2, Users2 } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const approaches = [
  { icon: Video, text: 'Live instructor-led sessions' },
  { icon: Monitor, text: 'Digital language labs' },
  { icon: FileText, text: 'Practice assignments' },
  { icon: Globe2, text: 'Cultural exposure activities' },
  { icon: Users2, text: 'Peer learning groups' },
];

export function StructuredLearning() {
  return (
    <section className="py-16 lg:py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Structured Learning Through Language Classes Online
            </h2>
            
            <p className="text-lg text-gray-700">
              A structured curriculum gives you consistent learning progress. Interactive language classes online help you develop better pronunciation, stronger grammar understanding, and cultural awareness.
            </p>
            <p className="text-lg text-gray-700">
              Classes focus on real communication and everyday use of the language. Students take part in discussions, role-play activities, and listening exercises.
            </p>
            <div className="space-y-4">
              <h3 className="font-semibold text-gray-900 text-xl">The learning approach includes:</h3>
              <div className="space-y-3">
                {approaches.map((approach, index) => (
                  <div key={index} className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-sm">
                    <div className="w-10 h-10 bg-[#1b31a4]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <approach.icon className="w-5 h-5 text-[#1b31a4]" />
                    </div>
                    <span className="text-gray-700">{approach.text}</span>
                  </div>
                ))}
              </div>
            </div>
            <p className="text-lg text-gray-700">This structure improves confidence in speaking and real-world communication.</p>
          </div>
          
          {/* Right Image */}
          <div className="relative">
            <div className="rounded-3xl overflow-hidden shadow-xl">
              <ImageWithFallback 
                src="https://images.unsplash.com/photo-1771054244019-96f9db9720b6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvbmxpbmUlMjB2aWRlbyUyMGNvbmZlcmVuY2UlMjBlZHVjYXRpb258ZW58MXx8fHwxNzczNjY4ODc4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Online language learning courses"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
