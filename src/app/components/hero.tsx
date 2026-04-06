import { Download } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-white via-red-50/30 to-white pt-16 sm:pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <div className="inline-block px-4 py-2 bg-[#A3241C]/10 rounded-full">
              <span className="text-[#A3241C] font-semibold">Starting March 2026</span>
            </div>
            
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
              Online Language Courses Starting March 2026
            </h1>
            
            <p className="prose prose-lg text-gray-600">
              Today’s global careers demand the ability to communicate across cultures. English alone does not give you a strong edge in global markets today. Companies value multilingual professionals. Universities prefer students who understand new cultures and languages.
            </p>
            
            <div className="prose prose-lg text-gray-600">
              <p>
                India sees rapid growth in language education. Foreign language skills improve employability in international trade, IT services, tourism, and global education sectors. Multilingual professionals often receive higher salary opportunities and international career advantages.
              </p>
            </div>
            <div className="prose prose-lg text-gray-600">
              <p>
                March 2026 brings a strong opportunity for you. <strong>SIFIL (Symbiosis Institute of Foreign and Indian Languages)</strong> opens new <strong>online language courses</strong> that help you learn global languages from your home while gaining recognized certification.
              </p>
            </div>
            
            {/* <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button className="px-8 py-4 bg-[#1b31a4] text-white rounded-full hover:bg-[#1b31a4]/90 transition-all shadow-lg hover:shadow-xl">
                Register Now
              </button>
              <button className="px-8 py-4 bg-white text-[#1b31a4] border-2 border-[#1b31a4] rounded-full hover:bg-[#1b31a4]/5 transition-all flex items-center justify-center gap-2">
                <Download className="w-5 h-5" />
                Download Course Details
              </button>
            </div> */}
          </div>
          
          {/* Right Image */}
          <div className="relative">
            <div className="rounded-3xl overflow-hidden shadow-2xl">
              <ImageWithFallback 
                src="https://images.unsplash.com/photo-1771408427146-09be9a1d4535?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkZW50JTIwb25saW5lJTIwbGVhcm5pbmclMjBjb21wdXRlcnxlbnwxfHx8fDE3NzM2Njg4NzZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Student learning online"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-[#e4bd22] rounded-full opacity-20 blur-2xl"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-[#A3241C] rounded-full opacity-20 blur-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
}