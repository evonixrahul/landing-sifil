import { Award, CheckCircle } from 'lucide-react';

const certifications = [
  { name: 'DELF', language: 'French' },
  { name: 'Goethe', language: 'German' },
  { name: 'JLPT', language: 'Japanese' },
  { name: 'HSK', language: 'Chinese' },
  { name: 'TOPIK', language: 'Korean' },
  { name: 'DELE', language: 'Spanish' },
];

export function CertificationSupport() {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-[#A3241C]/10 rounded-full mb-4">
            <Award className="w-8 h-8 text-[#A3241C]" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Foreign Language Classes Online With Certification Support
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Global certification remains an important milestone in language learning. Many programs prepare you for recognized international examinations.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-6 mb-8">
          {certifications.map((cert, index) => (
            <div 
              key={index}
              className="bg-gradient-to-br from-white to-gray-50 border border-gray-200 p-6 rounded-2xl hover:shadow-lg transition-all text-center"
            >
              <div className="w-12 h-12 bg-[#1b31a4] rounded-full mx-auto mb-3 flex items-center justify-center">
                <Award className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-bold text-gray-900 mb-1">{cert.name}</h3>
              <p className="text-sm text-gray-600">{cert.language}</p>
            </div>
          ))}
        </div>
        
        <div className="bg-gray-50 p-8 rounded-2xl">
          <p className="text-gray-700 paragraph_margin_bottom">
            These foreign language classes online help you prepare for exam formats, vocabulary standards, and communication requirements expected by international institutions.
          </p>
          <p className="text-gray-700">
            Students often choose programs that offer an online language course with certificate because certification strengthens academic and professional profiles.
          </p>
        </div>
      </div>
    </section>
  );
}
