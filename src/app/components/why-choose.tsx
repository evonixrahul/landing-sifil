/// <reference types="vite/client" />
import { Clock, BookOpen, Users, Award, Globe } from 'lucide-react';

const features = [
  {
    icon: Clock,
    title: 'Flexible schedules for students and working professionals',
  },
  {
    icon: BookOpen,
    title: 'Structured curriculum aligned with international standards',
  },
  {
    icon: Users,
    title: 'Interactive classes and language practice sessions',
  },
  {
    icon: Award,
    title: 'Guidance to help you prepare for international language certification exams',
  },
  {
    icon: Globe,
    title: 'Cultural learning along with language training',
  },
];

export function WhyChoose() {
  return (
    <section className="py-16 lg:py-24 bg-gray-50" id='why-sifil'>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why Choose Online Language Courses in 2026
          </h2>
          <div className="new_why_choose_text_mainbox">
            <div className="new_why_choose_text_firstbox">
              <div className="rounded-3xl overflow-hidden shadow-xl">
                {/* <img src="/images/why-choose-image.webp" alt="online language learning courses" /> */}
                <img
                  src={`${import.meta.env.BASE_URL}images/why-choose-image.webp`}
                  alt="online language learning courses"
                />
              </div>
            </div>
            <div className="new_why_choose_text_secondbox">
              <p className="text-gray-600 mx-auto paragraph_margin_bottom">
                Digital education continues to grow across India. Online learning removes distance barriers and supports flexible schedules for students and professionals.
              </p>
              <p className="text-gray-600 paragraph_margin_bottom">
                You gain structured training through language courses online that combine academic learning and practical communication practice. Experienced faculty from a reputed academic institution lead the training.
              </p>
              <p className="text-gray-600 paragraph_margin_bottom">
                Another major advantage comes from certified programs. Many global employers prefer candidates who hold recognized language certifications.
              </p>
            </div>
          </div>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-shadow"
            >
              <div className="w-14 h-14 bg-[#A3241C]/10 rounded-full flex items-center justify-center mb-4">
                <feature.icon className="w-7 h-7 text-[#A3241C]" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900">
                {feature.title}
              </h3>
            </div>
          ))}
        </div>
        <p className="text-xl text-gray-600 max-w-8xl mx-auto text-center paragraph_margin_top">
          SIFIL offers a strong academic environment backed by the Symbiosis legacy. The institute focuses on practical communication and global cultural understanding.
        </p>
      </div>
    </section>
  );
}
