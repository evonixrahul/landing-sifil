import { Building2, Users, Globe, Monitor, Palette, Award } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const highlights = [
  {
    icon: Users,
    text: 'Certified and experienced faculty',
  },
  {
    icon: Globe,
    text: 'International curriculum alignment',
  },
  {
    icon: Monitor,
    text: 'Interactive digital learning infrastructure',
  },
  {
    icon: Palette,
    text: 'Cultural immersion activities',
  },
  // {
  //   icon: Building2,
  //   text: 'Part of Symbiosis International University',
  // },
  {
    icon: Award,
    text: 'Global certification preparation',
  },
];

export function WhySIFIL() {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why SIFIL Stands Out for Online Language Learning
          </h2>
          <p className="text-lg text-gray-600 mx-auto paragraph_margin_bottom_10">
            Several factors strengthen the learning experience at SIFIL.
          </p>
          <p className="text-lg text-gray-600 mx-auto">
            Academic credibility remains a major advantage. The institute is part of Symbiosis International University and follows strong academic and teaching standards.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Image */}
          <div className="rounded-3xl overflow-hidden shadow-xl">
            <ImageWithFallback 
              src="https://images.unsplash.com/photo-1758270705518-b61b40527e76?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaXZlcnNlJTIwc3R1ZGVudHMlMjBzdHVkeWluZyUyMHRvZ2V0aGVyfGVufDF8fHx8MTc3MzYxODIyNHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Diverse students studying together"
              className="w-full h-full object-cover"
            />
          </div>
          
          {/* Right Content */}
          <div className="grid sm:grid-cols-2 gap-6">
            {highlights.map((highlight, index) => (
              <div 
                key={index}
                className="bg-gradient-to-br from-gray-50 to-white border border-gray-200 p-6 rounded-2xl hover:shadow-lg transition-all"
              >
                <div className="w-12 h-12 bg-[#A3241C]/10 rounded-xl flex items-center justify-center mb-3">
                  <highlight.icon className="w-6 h-6 text-[#A3241C]" />
                </div>
                <p className="text-gray-800 font-medium">
                  {highlight.text}
                </p>
              </div>
            ))}
          </div>
        </div>
        <p className="text-center text-lg text-gray-700 mx-auto mt-8">
            These features make SIFIL a strong choice for learners looking for career focused online language courses.
          </p>
      </div>
    </section>
  );
}
