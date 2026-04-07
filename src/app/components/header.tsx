export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#A3241C] shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <div className="flex items-center">
            <a href="/">
              <h1 className="text-2xl sm:text-3xl font-bold text-white tracking-wide">
                SIFIL
              </h1>
            </a>
          </div>
          <nav className="hidden md:flex items-center space-x-6 lg:space-x-8">
            <a href="#why-sifil" className="text-white hover:text-[#e4bd22] transition-colors text-sm lg:text-base">
              Why SIFIL
            </a>
            <a href="#courses" className="text-white hover:text-[#e4bd22] transition-colors text-sm lg:text-base">
              Courses
            </a>
            <a href="#eligibility" className="text-white hover:text-[#e4bd22] transition-colors text-sm lg:text-base">
              Eligibility
            </a>
            <a href="#admission" className="text-white hover:text-[#e4bd22] transition-colors text-sm lg:text-base">
              Admission
            </a>
            <a href="#benefits" className="text-white hover:text-[#e4bd22] transition-colors text-sm lg:text-base">
              Benefits
            </a>
            <a href="#faq" className="text-white hover:text-[#e4bd22] transition-colors text-sm lg:text-base">
              FAQ
            </a>
          </nav>
          <div className="flex items-center">
            <a
              href="https://forms.gle/ARRU2zu1msnCFFWT9"
              target="_blank"
              className="bg-[#1b31a4] text-white px-4 sm:px-6 py-2 sm:py-2.5 rounded-full hover:opacity-90 transition-opacity text-sm sm:text-base"
            >
              Apply Now
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
