import { ArrowRight, MessageCircle } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function CTA() {
  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-[#A3241C] to-[#1b31a4] text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#e4bd22] rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
              Start Your Online Language Learning Journey Today
            </h2>
            
            <p className="text-lg text-white/90 leading-relaxed">
              April 2026 offers a strong opportunity for you to start learning a new language from a trusted academic institution.
            </p>
            <p className="text-lg text-white/90 leading-relaxed">
              SIFIL’s online language learning programs combine global curriculum, expert faculty, and practical communication training. You build skills that support global careers and international education goals.
            </p>
            {/* <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button className="px-8 py-4 bg-white text-[#A3241C] rounded-full hover:bg-gray-100 transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2 font-semibold">
                Register Now
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-full hover:bg-white/10 transition-all flex items-center justify-center gap-2">
                <MessageCircle className="w-5 h-5" />
                Enquire Today
              </button>
            </div> */}
            
            {/* <p className="text-sm text-white/80 pt-4">
              ⚡ Seats are limited so early registration is recommended.
            </p> */}
          </div>
          
          {/* Right Image */}
          <div className="relative">
            <div className="rounded-3xl overflow-hidden shadow-2xl">
              <ImageWithFallback 
                src="https://images.unsplash.com/photo-1758876202877-30b2c505ad9d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnbG9iYWwlMjBjb21tdW5pY2F0aW9uJTIwd29ybGQlMjBtYXB8ZW58MXx8fHwxNzczNjY4ODc3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
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
