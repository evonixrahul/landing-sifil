import { Header } from './components/header';
import { Hero } from './components/hero';
import { GlobalSkills } from './components/global-skills';
import { WhyChoose } from './components/why-choose';
import { PopularCourses } from './components/popular-courses';
import { StructuredLearning } from './components/structured-learning';
import { CertificationSupport } from './components/certification-support';
import { WhoShouldJoin } from './components/who-should-join';
import { Eligibility } from './components/eligibility';
import { HowToApply } from './components/how-to-apply';
import { WhySIFIL } from './components/why-sifil';
import { CareerAdvantages } from './components/career-advantages';
import { CTA } from './components/cta';
import { FAQ } from './components/faq';
import { Footer } from './components/footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      {/* <GlobalSkills /> */}
      <WhyChoose />
      <PopularCourses />
      <StructuredLearning />
      <CertificationSupport />
      <WhoShouldJoin />
      <Eligibility />
      <HowToApply />
      <WhySIFIL />
      <CareerAdvantages />
      <CTA />
      <FAQ />
      <Footer />
    </div>
  );
}