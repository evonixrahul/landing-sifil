import { CheckCircle } from 'lucide-react';

const courses = [
  { name: 'French', color: 'from-blue-500 to-blue-600' },
  { name: 'German', color: 'from-gray-700 to-gray-800' },
  { name: 'Spanish', color: 'from-red-500 to-red-600' },
  { name: 'Japanese', color: 'from-pink-500 to-pink-600' },
  { name: 'Russian', color: 'from-indigo-500 to-indigo-600' },
  { name: 'Sanskrit', color: 'from-orange-500 to-orange-600' },
  { name: 'Hindi', color: 'from-green-500 to-green-600' },
  { name: 'Korean', color: 'from-blue-500 to-blue-600' },
  { name: 'Chinese', color: 'from-red-500 to-red-600' },
];

export function PopularCourses() {
  return (
    <section className="py-16 lg:py-24 bg-white" id='courses'>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Popular Foreign Language Courses Available Online
          </h2>
          <p className="text-lg text-gray-600 mx-auto paragraph_margin_bottom_10">
            In April 2026, new batches of structured <strong>online foreign language courses</strong> will open for beginners and intermediate learners.
          </p>
          <p className="text-lg text-gray-600 mx-auto">
            You gain access to expert instructors and <strong>comprehensive learning modules</strong> that build strong grammar, vocabulary, and speaking skills.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-8">
          {courses.map((course, index) => (
            <div
              key={index}
              className="bg-white border-2 border-gray-200 p-6 rounded-2xl hover:border-[#A3241C] transition-all shadow-sm hover:shadow-lg group"
            >
              <div className={`w-12 h-12 bg-gradient-to-br ${course.color} rounded-xl mb-4 flex items-center justify-center text-white font-bold text-xl`}>
                {course.name[0]}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {course.name}
              </h3>
              <div className="flex items-center text-sm text-gray-600">
                <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                Available
              </div>
            </div>
          ))}
        </div>
        <div className="new_courses_para_mainbox">
          <p className="text-gray-600">
            Each program follows internationally recognized learning frameworks such as CEFR where applicable. Students progress from beginner to higher proficiency levels.
          </p>
          <p className="text-gray-600">
            Many learners also explore the best languages to learn for career growth. German, Japanese, and French often support careers in global manufacturing, technology, hospitality, and international trade.
          </p>
        </div>
      </div>
    </section>
  );
}
