import { ImageWithFallback } from './figma/ImageWithFallback';

export function GlobalSkills() {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Image */}
          <div className="order-2 lg:order-1">
            <div className="rounded-3xl overflow-hidden shadow-xl">
              <ImageWithFallback 
                src="https://images.unsplash.com/photo-1562917947-859259de851c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYW5ndWFnZSUyMGJvb2tzJTIwaW50ZXJuYXRpb25hbCUyMGZsYWdzfGVufDF8fHx8MTc3MzY2ODg3Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Language learning materials"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          {/* Right Content */}
          <div className="order-1 lg:order-2 space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Build Global Skills With Online Language Learning
            </h2>
            
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                India is seeing rapid growth in language education. Foreign language skills improve employability in international trade, IT services, tourism and global education sectors. Multilingual professionals often receive higher salary opportunities and international career advantages.
              </p>
              
              <p>
                SIFIL offers structured online language courses that allow students to learn global languages from home while gaining recognized certification.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
