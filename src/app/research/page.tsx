import Navbar from "@/src/components/Navbar";
import Footer from "@/src/components/Footer";
import SectionTitle from "@/src/components/SectionTitle";

export default function ResearchPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <Navbar />
      <main id="main-content">
        <section className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-12">
          <SectionTitle
            eyebrow="Research"
            title="Supporting ideas that protect glaciers and people"
            description="We encourage meaningful research, innovation, and knowledge sharing that supports practical climate solutions."
          />
          <div className="mt-10 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
            <p className="text-lg leading-8 text-slate-600">
              Our approach combines community experience with emerging climate knowledge, helping connect local insight with wider environmental understanding.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
